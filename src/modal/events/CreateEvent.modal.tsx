import {
  Button,
  Checkbox,
  SimpleGrid,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { ContextModalProps } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { BsCalendar2Event } from 'react-icons/bs';
import { TbMessage2Bolt, TbMessage2Exclamation } from 'react-icons/tb';

function CreateEventModal(
  props: ContextModalProps<CreateEventModalInnerProps>
) {
  const { innerProps } = props;
  const [isLoading, setIsLoading] = useState(false);

  const endDateValidate = (endDate: Date, values: { start: Date }) => {
    if (endDate) {
      if (values.start.getTime() > endDate.getTime()) {
        return 'End time should be greater than Start Time';
      } else {
        return null;
      }
    } else {
      return 'End date is required';
    }
  };

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      title: '',
      info: '',
      start: innerProps.selectInfo.start,
      end: innerProps.selectInfo.end,
      allDay: true,
    },
    validate: {
      title: isNotEmpty('Event title is required'),
      start: isNotEmpty('Start date is required'),
      end: endDateValidate,
    },
  });

  const onFormSubmit = (values: any) => {
    const calendarApi = innerProps.selectInfo.view.calendar;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully create event',
        message: 'Hey there, your event is successfully created!',
        withCloseButton: true,
        autoClose: true,
      });

      calendarApi.addEvent(values);
      props.context.closeModal(props.id);
    }, 2000);
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <TextInput
        label='Event title'
        name='title'
        placeholder='Event title'
        icon={<TbMessage2Bolt />}
        {...form.getInputProps('title')}
      />

      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]} my={10}>
        <DateTimePicker
          withSeconds
          label='Start Date'
          valueFormat='DD/MM/YYYY hh:mm A'
          placeholder='Start Date'
          icon={<BsCalendar2Event />}
          {...form.getInputProps('start')}
        />

        <DateTimePicker
          withSeconds
          label='End Date'
          valueFormat='DD/MM/YYYY hh:mm A'
          placeholder='End Date'
          icon={<BsCalendar2Event />}
          {...form.getInputProps('end')}
        />
      </SimpleGrid>

      <Textarea
        label='Event info'
        name='info'
        placeholder='Event title'
        icon={<TbMessage2Exclamation />}
        {...form.getInputProps('info')}
        mb={10}
      />

      <Checkbox
        label='All Day'
        mb={20}
        defaultChecked
        {...form.getInputProps('allDay')}
      />

      <Button type='submit' loading={isLoading} radius='xl'>
        Save Changes
      </Button>
    </form>
  );
}

export default CreateEventModal;
