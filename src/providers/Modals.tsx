import { ModalsProvider } from '@mantine/modals';
import CropperModal from '../modal/Cropper.modal';
import SearchModal from '../modal/Search.modal';
import CreateEventModal from '../modal/events/CreateEvent.modal';
import EventModal from '../modal/events/Event.modal';
import CommentsModal from '../modal/posts/Comments.modal';
import CreatePostModal from '../modal/posts/CreatePost.modal';
import ReactsModal from '../modal/posts/Reacts.modal';

function Modals(props: { children: React.ReactElement }) {
  return (
    <ModalsProvider
      modals={{
        comments: CommentsModal,
        createEvent: CreateEventModal,
        createPost: CreatePostModal,
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
