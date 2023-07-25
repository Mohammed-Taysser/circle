import { ContextModalProps } from '@mantine/modals';

function EventModal(props: ContextModalProps<EventModalInnerProps>) {
  return <div>{JSON.stringify(props.innerProps.event)}</div>;
}

export default EventModal;
