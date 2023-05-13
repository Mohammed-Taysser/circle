import { Alert, Button, Center, Textarea, Timeline } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ReactElement, useEffect, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { MdSearchOff } from 'react-icons/md';
import Avatar from '../common/Avatar';
import Skeleton from '../common/Skeleton';
import { COMMENTS } from '../constants/dummy';
import Async from '../containers/Async';
import { timeToX, uuidv4 } from '../helpers';

function CommentsModal(): ReactElement {
  const isLoggedIn = localStorage.getItem('isLogin'); // TODO: replace with redux

  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  useEffect(() => {
    const TimerId = setTimeout(() => {
      setState({
        loading: false,
        fulfilled: true,
        error: null,
      });
    }, 2000);

    return () => {
      clearTimeout(TimerId);
    };
  }, []);

  return (
    <Async {...state} skeleton={<Skeleton.comment repeat={3} />}>
      {COMMENTS.length > 0 ? (
        <>
          <Timeline
            color='teal'
            className='px-10 py-5 '
            lineWidth={3}
            bulletSize={25}
          >
            {COMMENTS.map((comment) => (
              <Timeline.Item
                bullet={<Avatar sm alt='avatar' src={comment.user.avatar} />}
                className='mb-10'
                lineVariant='dashed'
                key={comment.id}
              >
                <div className='mx-5 relative -top-4'>
                  <div>{comment.user.name}</div>
                  <div className=' text-gray-400 text-sm'>
                    {timeToX(comment.publishAt)}
                  </div>
                  <div className='mt-4 text-gray-600'>{comment.body} </div>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
          {isLoggedIn ? (
            <WriteComment />
          ) : (
            <Alert icon={<BsInfoCircle />} title='Hi there!' color='teal'>
              To level a comment you must be login first!
            </Alert>
          )}
        </>
      ) : (
        <Center h={200}>
          <div className='text-center text-gray-400'>
            <MdSearchOff className='text-4xl' />
            <p className='m-0'>Nothing Comments Yet...</p>
          </div>
        </Center>
      )}
    </Async>
  );
}

function WriteComment(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      comment: '',
    },
  });

  const onFormSubmit = (values: { comment: string }) => {
    console.log(values);
    const notificationId = uuidv4();

    if (values.comment) {
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

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <Textarea
        minRows={2}
        maxRows={4}
        {...form.getInputProps('comment')}
        autosize
        placeholder='Your comment!'
        className='mb-3'
      />
      <Button
        size='md'
        type='submit'
        title='publish comment'
        leftIcon={<BiSend />}
        loading={isLoading}
      >
        SEND
      </Button>
    </form>
  );
}

export default CommentsModal;
