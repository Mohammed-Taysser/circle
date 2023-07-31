import { ModalsProvider } from '@mantine/modals';
import CreateEventModal from '../modal/events/CreateEvent.modal';
import CropperModal from '../modal/Cropper.modal';
import SearchModal from '../modal/Search.modal';
import EventModal from '../modal/events/Event.modal';
import CommentsModal from '../modal/posts/Comments.modal';
import ReactsModal from '../modal/posts/Reacts.modal';

function Modals(props: { children: React.ReactElement }) {
  return (
    <ModalsProvider
      modals={{
        comments: CommentsModal,
        createEvent: CreateEventModal,
        cropper: CropperModal,
        event: EventModal,
        reacts: ReactsModal,
        search: SearchModal,
      }}
    >
      {props.children}
    </ModalsProvider>
  );
}

export default Modals;
