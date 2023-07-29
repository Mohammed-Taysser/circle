import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { TbTimelineEventText } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import Post from '../../common/Post';
import Skeleton from '../../common/Skeleton';
import { POSTS } from '../../constants/dummy';
import Async from '../../containers/Async';
import useHelmet from '../../hooks/useHelmet';

function PostDetails() {
  useHelmet('postDetails');
  const { postId = '' } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  useEffect(() => {
    setPost(POSTS.find((post) => post.id === postId) || null);

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
  }, [postId]);

  return (
    <Async {...state} skeleton={<Skeleton variant='post' />}>
      {post ? (
        <Post post={post} full />
      ) : (
        <div className='shadow-nice p-4 bg-white rounded'>
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <TbTimelineEventText className='text-4xl' />
              <p className='m-0'>No post found, make sure the url is correct</p>
            </div>
          </Center>
        </div>
      )}
    </Async>
  );
}

export default PostDetails;
