import {
  Autocomplete,
  Avatar,
  Button,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  NumberInput,
  Pagination,
  Table,
  Text,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { TbMessage2Exclamation, TbStar } from 'react-icons/tb';
import { getErrorMessage, getImageURL } from '../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import eventSlice from '../../redux/features/event.slice';
import reviewsSlice from '../../redux/features/review.slice';
import userSlice from '../../redux/features/user.slice';

function Reviews() {
  const dispatch = useAppDispatch();
  const reviewsState = useAppSelector(createSelector((state) => state.reviews));
  const userState = useAppSelector(createSelector((state) => state.users));
  const eventState = useAppSelector(createSelector((state) => state.events));

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<ReviewFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      body: '',
      event: '',
      user: '',
      rate: 0,
    },
    validate: {
      body: (value) => (!value ? 'Body is required' : null),
      rate: (value) =>
        value < 0 || value > 5 ? 'Rate must be between 1 and 5' : null,
    },
  });

  const filterForm = useForm<ReviewFilterParams>({
    validateInputOnChange: true,
    validateInputOnBlur: true,

    validate: {
      event: (value) => (!value ? 'Event is required' : null),
    },
  });

  useEffect(() => {
    fetchNeededDataAPI();
  }, []);

  const fetchNeededDataAPI = async () => {
    try {
      await dispatch(userSlice.actions.fetchSimpleList()).unwrap();
      await dispatch(eventSlice.actions.fetchSimpleList()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const fetchReviewAPI = async () => {
    try {
      await dispatch(reviewsSlice.actions.fetchAll()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch(reviewsSlice.actions.changePage(page));
  };

  const onEditReviewBtnClick = (review: Review) => {
    dispatch(reviewsSlice.slice.actions.setSelectedItem(review));
    openEditableModal();

    const reviewPayload = {
      body: review.body,
      rate: review.rate,
      event: review.event,
      user: review.user._id,
    };
    form.setValues(reviewPayload);
  };

  const onDeleteReviewBtnClick = (review: Review) => {
    dispatch(reviewsSlice.slice.actions.setSelectedItem(review));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!reviewsState.selectedItem) {
      return;
    }

    const params: Partial<ReviewFilterParams> = {
      event: reviewsState.selectedItem.event,
    };

    try {
      await dispatch(
        reviewsSlice.actions.delete({
          id: reviewsState.selectedItem._id,
          params,
        }),
      ).unwrap();

      dispatch(reviewsSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchReviewAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: ReviewFormFields) => {
    const params: Partial<ReviewFilterParams> = {
      event: values.event,
    };

    try {
      if (reviewsState.selectedItem) {
        const payload: ReviewUpdatePayload = {
          rate: values.rate,
          body: values.body,
        };

        await dispatch(
          reviewsSlice.actions.update({
            id: reviewsState.selectedItem._id,
            payload,
            params,
          }),
        ).unwrap();

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully update Review!`,
        });
      } else {
        const payload: ReviewCreatePayload = {
          rate: values.rate,
          body: values.body,
          user: values.user,
          event: values.event,
        };
        await dispatch(
          reviewsSlice.actions.create({ payload, params }),
        ).unwrap();

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created Review!`,
        });
      }

      onCancelBtnClick();
      fetchReviewAPI();
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFilterFormSubmit = async (values: ReviewFilterParams) => {
    try {
      dispatch(reviewsSlice.slice.actions.setFilter(values));
      await dispatch(reviewsSlice.actions.fetchAll()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onCancelBtnClick = () => {
    dispatch(reviewsSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
  };

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={reviewsState.selectedItem ? 'Update Review' : 'Create Review'}
        size='lg'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <Autocomplete
                label='User'
                placeholder='Choose user'
                disabled={Boolean(reviewsState.selectedItem)}
                filter={(value, item) =>
                  item.label.toLowerCase().includes(value.toLowerCase())
                }
                data={userState.simpleItems.map((user) => ({
                  value: user._id,
                  label: user.name,
                }))}
                {...form.getInputProps('user')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Autocomplete
                label='Event'
                disabled={Boolean(reviewsState.selectedItem)}
                placeholder='Choose Event'
                filter={(value, item) =>
                  item.label.toLowerCase().includes(value.toLowerCase())
                }
                data={eventState.simpleItems.map((event) => ({
                  value: event._id,
                  label: event.name,
                }))}
                {...form.getInputProps('event')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <NumberInput
                label='Rate'
                placeholder='Rate'
                min={0}
                max={5}
                icon={<TbStar />}
                {...form.getInputProps('rate')}
              />
            </Grid.Col>

            <Grid.Col sm={12}>
              <Textarea
                label='Body'
                placeholder='Body'
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
              loading={
                reviewsState.loading.create || reviewsState.loading.update
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
          loading={reviewsState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={reviewsState.loading.fetch} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Reviews
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {reviewsState.filters.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add Review</Button>
      </Group>

      <form onSubmit={filterForm.onSubmit(onFilterFormSubmit)} className='my-4'>
        <Grid>
          <Grid.Col sm={12} lg={4}>
            <Autocomplete
              label='Event'
              placeholder='Choose Event'
              filter={(value, item) =>
                item.label.toLowerCase().includes(value.toLowerCase())
              }
              data={eventState.simpleItems.map((event) => ({
                value: event._id,
                label: event.name,
              }))}
              {...filterForm.getInputProps('event')}
            />
          </Grid.Col>

          <Grid.Col>
            <Button type='submit' loading={reviewsState.loading.fetch}>
              Filter
            </Button>
          </Grid.Col>
        </Grid>
      </form>

      <div className='overflow-x-auto'>
        <Table
          striped
          highlightOnHover
          withColumnBorders
          className='min-w-[1000px]'
        >
          <thead>
            <tr>
              <th>-</th>
              <th>Event</th>
              <th>Rate</th>
              <th>User</th>
              <th>Body</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviewsState.items.length === 0 ? (
              <tr>
                <td colSpan={20}>
                  <div className='text-center py-3 text-gray-600'>
                    No data found
                  </div>
                </td>
              </tr>
            ) : (
              reviewsState.items.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>

                  <td>{review.event}</td>

                  <td>{review.rate}</td>

                  <td>
                    <Group>
                      <Avatar
                        radius='xl'
                        src={getImageURL(review.user.avatar)}
                      />

                      <div>
                        {review.user.firstName} {review.user.lastName}
                      </div>
                    </Group>
                  </td>

                  <td>
                    <Text className='max-w-[200px]' truncate>
                      {review.body}
                    </Text>
                  </td>

                  <td>
                    {dayjs(review.createdAt).format('YYYY-MM-DD hh:mm A')}
                  </td>

                  <td>
                    <Group>
                      <Button
                        size='xs'
                        leftIcon={<FiEdit />}
                        onClick={() => onEditReviewBtnClick(review)}
                      >
                        Edit
                      </Button>

                      <Button
                        size='xs'
                        color='red'
                        leftIcon={<MdDelete />}
                        onClick={() => onDeleteReviewBtnClick(review)}
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
        value={reviewsState.filters.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(
          reviewsState.filters.total / reviewsState.filters.limit,
        )}
        withEdges
      />
    </div>
  );
}

export default Reviews;
