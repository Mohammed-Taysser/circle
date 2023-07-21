import { Alert, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import TiptapEditor from '../../common/TiptapEditor';
import { uuidv4 } from '../../helpers';

function WriteComment() {
  const isLoggedIn = localStorage.getItem('isLogin'); // TODO: replace with redux
  const [editorContent, setEditorContent] = useState({ text: '', html: '' });
  const [isLoading, setIsLoading] = useState(false);

  const onCommentSubmit = () => {
    console.log(editorContent);
    const notificationId = uuidv4();

    if (editorContent.text) {
      notifications.show({
        id: notificationId,
        title: 'Publishing comment...',
        message: 'Hey there, your comment is being publish!',
        loading: true,
        withCloseButton: false,
        color: '',
        autoClose: false,
      });

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);

        notifications.update({
          id: notificationId,
          title: 'Successfully publish',
          message: 'Hey there, your comment is successfully publish!',
          loading: false,
          withCloseButton: true,
          autoClose: true,
        });
      }, 2000);
    } else {
      notifications.show({
        title: 'Empty Comment',
        message:
          'Hey there, your comment is empty. please write something to publish',
        loading: false,
        withCloseButton: true,
        color: '',
        autoClose: true,
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <Alert icon={<BsInfoCircle />} color='red'>
        To level a comment you must be login first!
      </Alert>
    );
  }

  return (
    <>
      <TiptapEditor
        noFontSizes
        getText={(content) => {
          setEditorContent(content);
        }}
      />

      <Button
        mt={20}
        size='md'
        type='submit'
        title='publish comment'
        leftIcon={<BiSend />}
        loading={isLoading}
        onClick={onCommentSubmit}
      >
        SEND
      </Button>
    </>
  );
}

export default WriteComment;
