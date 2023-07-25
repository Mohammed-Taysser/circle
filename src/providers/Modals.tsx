import { ModalsProvider } from '@mantine/modals';
import CommentsModal from '../modal/Comments.modal';
import CreateEventModal from '../modal/CreateEvent.modal';
import CropperModal from '../modal/Cropper.modal';
import EventModal from '../modal/Event.modal';
import ReactsModal from '../modal/Reacts.modal';
import SearchModal from '../modal/Search.modal';

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
