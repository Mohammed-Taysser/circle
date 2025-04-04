import {
  Avatar,
  Badge,
  Button,
  FileInput,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  Pagination,
  Popover,
  Select,
  Table,
  Text,
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
import { getErrorMessage, getImageURL } from '../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import groupSlice from '../../redux/features/group.slice';

function Groups() {
  const dispatch = useAppDispatch();
  const groupState = useAppSelector(createSelector((state) => state.group));

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<GroupFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      visibility: 'public',
    },
    validate: {
      name: (value) =>
        value.length < 2 ? 'First name should be at least 2 characters' : null,
    },
  });

  useEffect(() => {
    fetchGroupsAPI();
  }, []);

  const fetchGroupsAPI = async () => {
    try {
      await dispatch(
        groupSlice.actions.fetchAll({
          page: groupState.pagination.page,
          limit: groupState.pagination.limit,
        }),
      ).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch(groupSlice.actions.changePage(page));
  };

  const onEditGroupBtnClick = (group: Group) => {
    dispatch(groupSlice.slice.actions.setSelectedItem(group));
    openEditableModal();

    form.setValues({
      name: group.name,
      visibility: group.visibility,
    });
  };

  const onDeleteGroupBtnClick = (group: Group) => {
    dispatch(groupSlice.slice.actions.setSelectedItem(group));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!groupState.selectedItem) {
      return;
    }

    try {
      await dispatch(
        groupSlice.actions.delete(groupState.selectedItem._id),
      ).unwrap();

      dispatch(groupSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchGroupsAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: GroupFormFields) => {
    const payload: GroupEditablePayload = {
      name: values.name,
      visibility: values.visibility,
      avatar: values.avatar instanceof File ? values.avatar : undefined,
      cover: values.cover instanceof File ? values.cover : undefined,
    };

    try {
      if (groupState.selectedItem) {
        await dispatch(
          groupSlice.actions.update({
            id: groupState.selectedItem._id,
            payload,
          }),
        ).unwrap();

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully update ${values.name}!`,
        });
      } else {
        await dispatch(groupSlice.actions.create(payload)).unwrap();

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created ${values.name}!`,
        });
      }

      onCancelBtnClick();
      fetchGroupsAPI();
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
    dispatch(groupSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
  };

  const onUploadInputChange = (
    fieldName: 'avatar' | 'cover',
    file: null | File,
  ) => {
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const avatarConfig = {
          cropShape: 'round',
          aspect: 1,
        };

        const coverConfig = {
          aspect: 5 / 3,
        };

        modals.openContextModal({
          modal: 'cropper',
          title: `Crop ${fieldName}`,
          innerProps: {
            image: reader.result,
            onCropComplete,
            title: fieldName,
            ...(fieldName === 'avatar' && avatarConfig),
            ...(fieldName === 'cover' && coverConfig),
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
        title={groupState.selectedItem ? 'Update Group' : 'Create Group'}
        size='lg'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Name'
                placeholder='Dev'
                icon={<MdDriveFileRenameOutline size='1rem' />}
                {...form.getInputProps('name')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Select
                label='Visibility'
                placeholder='Pick one'
                data={[
                  { value: 'public', label: 'Public' },
                  { value: 'private', label: 'Private' },
                  { value: 'friends', label: 'Friends' },
                ]}
                {...form.getInputProps('visibility')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <FileInput
                label='Upload Avatar'
                accept='image/*'
                icon={<IconUpload size='1rem' />}
                value={form.values.avatar}
                onChange={(file) => onUploadInputChange('avatar', file)}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <FileInput
                label='Upload Cover'
                accept='image/*'
                icon={<IconUpload size='1rem' />}
                value={form.values.cover}
                onChange={(file) => onUploadInputChange('cover', file)}
              />
            </Grid.Col>
          </Grid>

          <Group mt='xl' position='right'>
            <Button variant='default' onClick={onCancelBtnClick}>
              Cancel
            </Button>

            <Button
              type='submit'
              loading={groupState.loading.create || groupState.loading.update}
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
          loading={groupState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={groupState.loading.fetch} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Groups
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {groupState.pagination.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add Group</Button>
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
              <th>Badges</th>
              <th>Visibility</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groupState.items.map((group, index) => {
              let visibilityColor;

              switch (group.visibility) {
                case 'private':
                  visibilityColor = 'red';
                  break;
                case 'friends':
                  visibilityColor = 'blue';
                  break;

                default:
                  visibilityColor = 'green';
                  break;
              }
              return (
                <tr key={group._id}>
                  <td>{index + 1}</td>

                  <td>
                    <Group>
                      <Avatar radius='xl' src={getImageURL(group.avatar)} />

                      <div>{group.name}</div>
                    </Group>
                  </td>

                  <td>
                    <Popover
                      width={300}
                      position='bottom'
                      withArrow
                      shadow='md'
                    >
                      <Popover.Target>
                        <Button
                          variant='light'
                          disabled={group.badges.length === 0}
                          size='xs'
                          compact
                        >
                          Tap to preview
                        </Button>
                      </Popover.Target>

                      <Popover.Dropdown>
                        {group.badges.map((badge) => (
                          <Group key={badge._id}>
                            <Avatar
                              src={getImageURL(badge.badge.logo)}
                              radius='xl'
                              alt={group.name}
                            />

                            <Group position='apart' mt='md' mb='xs'>
                              <Text weight={500}>{badge.badge.label}</Text>
                              <Badge color='pink' variant='light'>
                                {dayjs(badge.earnAt).format('YYYY-MM-DD')}
                              </Badge>
                            </Group>
                          </Group>
                        ))}
                      </Popover.Dropdown>
                    </Popover>
                  </td>

                  <td>
                    <Badge color={visibilityColor}>{group.visibility}</Badge>
                  </td>

                  <td>{dayjs(group.createdAt).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>
                    <Group>
                      <Button
                        size='xs'
                        leftIcon={<FiEdit />}
                        onClick={() => onEditGroupBtnClick(group)}
                      >
                        Edit
                      </Button>

                      <Button
                        size='xs'
                        color='red'
                        leftIcon={<MdDelete />}
                        onClick={() => onDeleteGroupBtnClick(group)}
                      >
                        Delete
                      </Button>
                    </Group>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <Pagination
        value={groupState.pagination.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(
          groupState.pagination.total / groupState.pagination.limit,
        )}
        withEdges
      />
    </div>
  );
}

export default Groups;
