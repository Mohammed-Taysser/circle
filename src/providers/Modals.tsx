import { ModalsProvider } from '@mantine/modals';
import React from 'react';
import CommentsModal from '../modal/Comments.modal';
import CreatePostModal from '../modal/CreatePost.modal';
import EventsModal from '../modal/Events.modal';
import ReactsModal from '../modal/Reacts.modal';
import SearchModal from '../modal/Search.modal';

function Modals(props: { children: React.ReactElement }) {
  return (
    <ModalsProvider
      modals={{
        reacts: ReactsModal,
        comments: CommentsModal,
        search: SearchModal,
        events: EventsModal,
        createPost: CreatePostModal,
      }}
    >
      {props.children}
    </ModalsProvider>
  );
}

export default Modals;
