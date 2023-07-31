import { Button, Center, Flex, Text } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { timeToX } from '../../helpers';

function EventModal(props: ContextModalProps<EventModalInnerProps>) {
  const { event } = props.innerProps;
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteEventClick = () => {
    event.remove();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully delete event',
        message: 'Hey there, your event is successfully deleted!',
        withCloseButton: true,
        autoClose: true,
      });

      props.context.closeModal(props.id);
    }, 2000);
  };

  return (
    <div>
      <Flex align='center' gap={10}>
        <Text size='lg' weight={500} color='dark'>
          {event.title}
        </Text>
        <Text size='sm' weight={500} color='dimmed'>
          {timeToX(event.end)}
        </Text>
      </Flex>

      {event.extendedProps.info ? (
        <Text color='dimmed' size='xs' weight={800}>
          {event.extendedProps.info}
        </Text>
      ) : (
        <Center h={200}>
          <div className='text-center text-gray-400'>
            <BsInfoCircle className='text-4xl' />
            <p className='m-0'>Not info for this event</p>
          </div>
        </Center>
      )}

      <Flex justify='end' mt={20}>
        <Button
          variant='outline'
          color='red'
          onClick={onDeleteEventClick}
          loading={isLoading}
        >
          Delete
        </Button>
      </Flex>
    </div>
  );
}

export default EventModal;
