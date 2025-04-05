import {
  Avatar,
  Button,
  FileInput,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  Pagination,
  Table,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconUpload } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete, MdDriveFileRenameOutline } from 'react-icons/md';
import { TbMessage2Exclamation } from 'react-icons/tb';
import { getErrorMessage, getImageURL } from '../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import badgeSlice from '../../redux/features/badge.slice';

function Badges() {
  const dispatch = useAppDispatch();
  const badgeState = useAppSelector(createSelector((state) => state.badges));

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<BadgeFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      label: '',
      body: '',
    },
    validate: {
      label: (value) =>
        value.length < 2 ? 'Label should be at least 2 characters' : null,
      body: (value) => (!value ? 'Body is required' : null),
    },
  });

  useEffect(() => {
    fetchBadgesAPI();
  }, []);

  const fetchBadgesAPI = async () => {
    try {
      await dispatch(badgeSlice.actions.fetchAll()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch(badgeSlice.actions.changePage(page));
  };

  const onEditBadgeBtnClick = (badge: Badge) => {
    dispatch(badgeSlice.slice.actions.setSelectedItem(badge));
    openEditableModal();

    form.setValues({
      label: badge.label,
      body: badge.body,
    });
  };

  const onDeleteBadgeBtnClick = (badge: Badge) => {
    dispatch(badgeSlice.slice.actions.setSelectedItem(badge));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!badgeState.selectedItem) {
      return;
    }

    try {
      await dispatch(
        badgeSlice.actions.delete({ id: badgeState.selectedItem._id }),
      ).unwrap();

      dispatch(badgeSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchBadgesAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: BadgeFormFields) => {
    const payload: BadgeEditablePayload = {
      label: values.label,
      body: values.body,
      logo: values.logo instanceof File ? values.logo : undefined,
    };

    try {
      if (badgeState.selectedItem) {
        await dispatch(
          badgeSlice.actions.update({
            id: badgeState.selectedItem._id,
            payload,
          }),
        ).unwrap();

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully update ${values.label}!`,
        });
      } else {
        await dispatch(badgeSlice.actions.create({ payload })).unwrap();

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created ${values.label}!`,
        });
      }

      onCancelBtnClick();
      fetchBadgesAPI();
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onCancelBtnClick = () => {
    dispatch(badgeSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
  };

  const onUploadInputChange = (file: null | File) => {
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        modals.openContextModal({
          modal: 'cropper',
          title: `Crop Logo`,
          innerProps: {
            image: reader.result,
            onCropComplete,
            title: 'logo',
            cropShape: 'round',
            aspect: 1,
          },
          size: 'md',
          centered: true,
        });
      };
    }
  };

  const onCropComplete = (image: File) => {
    form.setFieldValue(image.name, image);
  };

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={badgeState.selectedItem ? 'Update Badge' : 'Create Badge'}
        size='lg'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Label'
                placeholder='Dev'
                icon={<MdDriveFileRenameOutline size='1rem' />}
                {...form.getInputProps('label')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <FileInput
                label='Upload Logo'
                accept='image/*'
                icon={<IconUpload size='1rem' />}
                value={form.values.logo}
                onChange={(file) => onUploadInputChange(file)}
              />
            </Grid.Col>

            <Grid.Col sm={12}>
              <Textarea
                label='Badge body'
                placeholder='Badge body'
                icon={<TbMessage2Exclamation />}
                {...form.getInputProps('body')}
              />
            </Grid.Col>
          </Grid>

          <Group mt='xl' position='right'>
            <Button variant='default' onClick={onCancelBtnClick}>
              Cancel
            </Button>

            <Button
              type='submit'
              loading={badgeState.loading.create || badgeState.loading.update}
            >
              Save
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal
        closeOnClickOutside={false}
        opened={deleteModalOpen}
        onClose={closeDeleteModal}
        title='Confirm Delete'
      >
        This action cannot be undone, are you sure?
        <Button
          color='red'
          className='mt-3'
          loading={badgeState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={badgeState.loading.fetch} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Badges
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {badgeState.filters.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add Badge</Button>
      </Group>

      <div className='overflow-x-auto'>
        <Table
          striped
          highlightOnHover
          withColumnBorders
          className='min-w-[500px]'
        >
          <thead>
            <tr>
              <th>-</th>
              <th>Name</th>
              <th>Body</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {badgeState.items.length === 0 ? (
              <tr>
                <td colSpan={20}>
                  <div className='text-center py-3 text-gray-600'>
                    No data found
                  </div>
                </td>
              </tr>
            ) : (
              badgeState.items.map((badge, index) => (
                <tr key={badge._id}>
                  <td>{index + 1}</td>

                  <td>
                    <Group>
                      <Avatar radius='xl' src={getImageURL(badge.logo)} />

                      <div>{badge.label}</div>
                    </Group>
                  </td>

                  <td>
                    <Text className='max-w-[200px]' truncate>
                      {badge.body}
                    </Text>
                  </td>

                  <td>{dayjs(badge.createdAt).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>
                    <Group>
                      <Button
                        size='xs'
                        leftIcon={<FiEdit />}
                        onClick={() => onEditBadgeBtnClick(badge)}
                      >
                        Edit
                      </Button>

                      <Button
                        size='xs'
                        color='red'
                        leftIcon={<MdDelete />}
                        onClick={() => onDeleteBadgeBtnClick(badge)}
                      >
                        Delete
                      </Button>
                    </Group>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      <Pagination
        value={badgeState.filters.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(badgeState.filters.total / badgeState.filters.limit)}
        withEdges
      />
    </div>
  );
}

export default Badges;
