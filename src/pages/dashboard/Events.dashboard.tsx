import {
  Autocomplete,
  Badge,
  Button,
  Checkbox,
  ColorInput,
  ColorSwatch,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  Pagination,
  Table,
  Textarea,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import dayjs, { Dayjs } from 'dayjs';
import { LatLngLiteral } from 'leaflet';
import { ChangeEvent, useEffect } from 'react';
import { BsCalendar2Event } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { TbMessage2Bolt, TbMessage2Exclamation } from 'react-icons/tb';
import EventEditableMap from '../../components/event/EventEditableMap';
import EventLocationPreview from '../../components/event/EventLocationPreview';
import { getErrorMessage } from '../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import eventSlice from '../../redux/features/event.slice';
import userSlice from '../../redux/features/user.slice';

function Events() {
  const dispatch = useAppDispatch();
  const eventState = useAppSelector(createSelector((state) => state.events));
  const userState = useAppSelector(createSelector((state) => state.users));

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<UserEventFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      title: '',
      body: '',
      startDate: '',
      endDate: '',
      allDay: false,
      price: 0,
      color: '#000',
      coordinates: {
        lat: 0,
        lng: 0,
      },
      user: '',
    },
    validate: {
      title: (value) =>
        value.length < 2 ? 'First name should be at least 2 characters' : null,
      startDate: (value: Dayjs | string) =>
        !value ? 'Start date is required' : null,
      endDate: (value: Dayjs | string) =>
        !value ? 'End date is required' : null,
      price: (value) => (value < 0 ? 'Price should be at least 0' : null),
      color: (value) =>
        value.length < 2 ? 'Last name should be at least 2 characters' : null,
      coordinates: (value: LatLngLiteral) =>
        !value ? 'Coordinates is required' : null,
      user: (value) => (!value ? 'User is required' : null),
    },
  });

  useEffect(() => {
    fetchEventsAPI();
  }, []);

  useEffect(() => {
    fetchUsersAPI();
  }, []);

  const fetchUsersAPI = async () => {
    try {
      await dispatch(userSlice.actions.fetchSimpleList()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const fetchEventsAPI = async () => {
    try {
      await dispatch(eventSlice.actions.fetchAll()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch(eventSlice.actions.changePage(page));
  };

  const onEditEventBtnClick = (event: UserEvent) => {
    dispatch(eventSlice.slice.actions.setSelectedItem(event));
    openEditableModal();

    const eventPayload = {
      title: event.title,
      body: event.body,
      startDate: dayjs(event.startDate),
      endDate: dayjs(event.endDate),
      allDay: event.allDay,
      price: event.price,
      color: event.color,
      coordinates: {
        lat: event.location.coordinates[0],
        lng: event.location.coordinates[1],
      },
      user: event.user._id,
    };
    form.setValues(eventPayload);
  };

  const onDeleteEventBtnClick = (event: UserEvent) => {
    dispatch(eventSlice.slice.actions.setSelectedItem(event));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!eventState.selectedItem) {
      return;
    }

    try {
      await dispatch(
        eventSlice.actions.delete({ id: eventState.selectedItem._id }),
      ).unwrap();

      dispatch(eventSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchEventsAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: UserEventFormFields) => {
    const payload: UserEventEditablePayload = {
      title: values.title,
      body: values.body,
      startDate: values.startDate,
      endDate: values.endDate,
      allDay: values.allDay,
      price: values.price,
      color: values.color,
      location: {
        type: 'Point',
        coordinates: [values.coordinates.lat, values.coordinates.lng],
      },
      user: values.user,
    };

    try {
      if (eventState.selectedItem) {
        await dispatch(
          eventSlice.actions.update({
            id: eventState.selectedItem._id,
            payload,
          }),
        ).unwrap();

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully update ${values.title}!`,
        });
      } else {
        await dispatch(eventSlice.actions.create({ payload })).unwrap();

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created ${values.title}!`,
        });
      }

      onCancelBtnClick();
      fetchEventsAPI();
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
    dispatch(eventSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
  };

  const onLatLngInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const latLang = isValidLatLng(evt.target.value);

    if (latLang) {
      form.setFieldValue('coordinates', latLang);
    }
  };

  function isValidLatLng(latLng: string) {
    if (!latLng) {
      return null;
    }

    // Split the input string by comma
    const parts = latLng.split(',');

    // Check if there are exactly two parts
    if (parts.length !== 2) {
      return null;
    }

    // Parse the parts into numbers
    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);

    // Check if both parts are valid numbers
    if (isNaN(lat) || isNaN(lng)) {
      return null;
    }

    // Check if the latitude is in the range -90 to 90 and longitude is in the range -180 to 180
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      return false;
    }

    return {
      lat,
      lng,
    };
  }

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={eventState.selectedItem ? 'Update Event' : 'Create Event'}
        size='lg'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Event title'
                placeholder='Event title'
                icon={<TbMessage2Bolt />}
                {...form.getInputProps('title')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Autocomplete
                label='User'
                placeholder='Choose user'
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
              <DateTimePicker
                label='Start Date'
                valueFormat='DD-MM-YYYY hh:mm A'
                placeholder='Start Date'
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                icon={<BsCalendar2Event />}
                {...form.getInputProps('startDate')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <DateTimePicker
                label='End Date'
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                valueFormat='DD-MM-YYYY hh:mm A'
                placeholder='End Date'
                icon={<BsCalendar2Event />}
                {...form.getInputProps('endDate')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <ColorInput
                placeholder='Pick color'
                label='Your favorite color'
                {...form.getInputProps('color')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Checkbox label='All Day' {...form.getInputProps('allDay')} />
            </Grid.Col>

            <Grid.Col sm={12}>
              <Textarea
                label='Event body'
                placeholder='Event body'
                icon={<TbMessage2Exclamation />}
                {...form.getInputProps('body')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Latitude and longitude'
                placeholder='Latitude and longitude'
                onChange={onLatLngInputChange}
                value={`${form.values.coordinates.lat},${form.values.coordinates.lng}`}
              />
            </Grid.Col>

            <Grid.Col sm={12}>
              <EventEditableMap form={form} />
            </Grid.Col>
          </Grid>

          <Group mt='xl' position='right'>
            <Button variant='default' onClick={onCancelBtnClick}>
              Cancel
            </Button>

            <Button
              type='submit'
              loading={eventState.loading.create || eventState.loading.update}
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
          loading={eventState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={eventState.loading.fetch} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Events
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {eventState.filters.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add Event</Button>
      </Group>

      <div className='overflow-x-auto'>
        <Table
          striped
          highlightOnHover
          withColumnBorders
          className='min-w-[1200px]'
        >
          <thead>
            <tr>
              <th>-</th>
              <th>Title</th>
              <th>Price</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>All Day</th>
              <th>Color</th>
              <th>Rate</th>
              <th>Attendees</th>
              <th>Location</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventState.items.length === 0 ? (
              <tr>
                <td colSpan={20}>
                  <div className='text-center py-3 text-gray-600'>
                    No data found
                  </div>
                </td>
              </tr>
            ) : (
              eventState.items.map((event, index) => (
                <tr key={event._id}>
                  <td>{index + 1}</td>

                  <td>{event.title}</td>

                  <td>{event.price}</td>

                  <td>{dayjs(event.startDate).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>{dayjs(event.endDate).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>
                    {event.allDay ? (
                      <IoMdCheckmark size={20} color='green' />
                    ) : (
                      <IoMdClose size={20} color='red' />
                    )}
                  </td>

                  <td>
                    <ColorSwatch color={event.color} />
                  </td>

                  <td>
                    <Tooltip label='Rate/Rate Count'>
                      <Badge color={event.rate >= 3 ? 'green' : 'red'}>
                        {event.rate}/{event.rateCount}
                      </Badge>
                    </Tooltip>
                  </td>

                  <td>{event.attendees.length}</td>

                  <td>
                    <EventLocationPreview event={event} />
                  </td>

                  <td>{dayjs(event.createdAt).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>
                    <Group>
                      <Button
                        size='xs'
                        leftIcon={<FiEdit />}
                        onClick={() => onEditEventBtnClick(event)}
                      >
                        Edit
                      </Button>

                      <Button
                        size='xs'
                        color='red'
                        leftIcon={<MdDelete />}
                        onClick={() => onDeleteEventBtnClick(event)}
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
        value={eventState.filters.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(eventState.filters.total / eventState.filters.limit)}
        withEdges
      />
    </div>
  );
}

export default Events;
