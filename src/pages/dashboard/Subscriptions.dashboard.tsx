import {
  Badge,
  Button,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  Pagination,
  Switch,
  Table,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { MdDelete, MdOutlineAlternateEmail } from 'react-icons/md';
import { getErrorMessage } from '../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import subscriptionSlice from '../../redux/features/subscription.slice';

function Subscriptions() {
  const dispatch = useAppDispatch();
  const subscriptionState = useAppSelector(
    createSelector((state) => state.subscribe),
  );

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<SubscriptionFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      isVerified: false,
      email: '',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  useEffect(() => {
    fetchSubscriptionsAPI();
  }, []);

  const fetchSubscriptionsAPI = async () => {
    try {
      await dispatch(
        subscriptionSlice.actions.fetchAll({
          page: subscriptionState.pagination.page,
          limit: subscriptionState.pagination.limit,
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
    dispatch(subscriptionSlice.actions.changePage(page));
  };

  const onDeleteSubscriptionBtnClick = (subscription: Subscription) => {
    dispatch(subscriptionSlice.slice.actions.setSelectedItem(subscription));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!subscriptionState.selectedItem) {
      return;
    }

    try {
      await dispatch(
        subscriptionSlice.actions.delete(subscriptionState.selectedItem._id),
      ).unwrap();

      dispatch(subscriptionSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchSubscriptionsAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: SubscriptionFormFields) => {
    try {
      await dispatch(
        subscriptionSlice.actions.create({ email: values.email }),
      ).unwrap();

      notifications.show({
        title: 'Successfully created',
        message: `Hey there, Successfully created ${values.email}!`,
      });

      onCancelBtnClick();
      fetchSubscriptionsAPI();
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
    dispatch(subscriptionSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
  };

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={
          subscriptionState.selectedItem
            ? 'Update Subscription'
            : 'Create Subscription'
        }
        size='lg'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Email'
                placeholder='example@domain.dev'
                icon={<MdOutlineAlternateEmail size='1rem' />}
                {...form.getInputProps('email')}
              />
            </Grid.Col>

            <Grid.Col sm={12}>
              <Group>
                <Switch
                  label='Is verified'
                  checked={form.values.isVerified}
                  error={form.errors.isVerified}
                  onChange={(event) =>
                    form.setFieldValue(
                      'isVerified',
                      event.currentTarget.checked,
                    )
                  }
                />
              </Group>
            </Grid.Col>
          </Grid>

          <Group mt='xl' position='right'>
            <Button variant='default' onClick={onCancelBtnClick}>
              Cancel
            </Button>

            <Button
              type='submit'
              loading={
                subscriptionState.loading.create ||
                subscriptionState.loading.update
              }
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
          loading={subscriptionState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay
        visible={subscriptionState.loading.fetch}
        overlayBlur={2}
      />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Subscriptions
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {subscriptionState.pagination.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add Subscription</Button>
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
              <th>Email</th>
              <th>Is verified</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptionState.items.map((subscription, index) => (
              <tr key={subscription._id}>
                <td>{index + 1}</td>

                <td>{subscription.email}</td>

                <td>
                  <Badge color={subscription.isVerified ? 'green' : 'red'}>
                    {subscription.isVerified ? 'Verified' : 'Unverified'}
                  </Badge>
                </td>

                <td>
                  {dayjs(subscription.createdAt).format('YYYY-MM-DD hh:mm A')}
                </td>

                <td>
                  <Group>
                    <Button
                      size='xs'
                      color='red'
                      leftIcon={<MdDelete />}
                      onClick={() => onDeleteSubscriptionBtnClick(subscription)}
                    >
                      Delete
                    </Button>
                  </Group>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Pagination
        value={subscriptionState.pagination.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(
          subscriptionState.pagination.total /
            subscriptionState.pagination.limit,
        )}
        withEdges
      />
    </div>
  );
}

export default Subscriptions;
