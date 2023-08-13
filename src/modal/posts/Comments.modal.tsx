import { Center, Timeline } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { MdSearchOff } from 'react-icons/md';
import Avatar from '../../common/Avatar';
import Skeleton from '../../common/Skeleton';
import WriteComment from '../../components/comments/WriteComment';
import { POST_COMMENTS } from '../../constants/dummy';
import Async from '../../containers/Async';
import { timeToX } from '../../helpers';

function CommentsModal(props: ContextModalProps<CommentsModalInnerProps>) {
  const comments = POST_COMMENTS;

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
    <Async {...state} skeleton={<Skeleton variant='comment' repeat={3} />}>
      {comments.length > 0 ? (
        <Timeline
          color='teal'
          className='md:px-10 pl-5 py-5'
          lineWidth={3}
          bulletSize={25}
        >
          {comments.map((comment) => (
            <Timeline.Item
              bullet={
                <Avatar
                  sm
                  alt={comment.user.name + ' avatar'}
                  src={comment.user.avatar}
                />
              }
              className='mb-10'
              lineVariant='dashed'
              key={comment.id}
            >
              <div className='mx-5 relative -top-4'>
                <div>{comment.user.name}</div>
                <div className=' text-gray-400 text-sm'>
                  {timeToX(comment.publishAt)}
                </div>
                <div className='mt-2 text-gray-600'>{comment.body}</div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      ) : (
        <Center h={200}>
          <div className='text-center text-gray-400'>
            <MdSearchOff className='text-4xl' />
            <p className='m-0'>No Comments Yet...</p>
          </div>
        </Center>
      )}

      <WriteComment />
    </Async>
  );
}

export default CommentsModal;
