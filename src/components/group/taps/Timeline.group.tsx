import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { TbTimelineEventText } from 'react-icons/tb';
import CreatePost from '../../../common/CreatePost';
import Post from '../../../common/Post';
import Skeleton from '../../../common/Skeleton';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';

function TimelineGroup() {
  const posts = Math.random() < 0.5 ? [] : POSTS;

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
    <Async {...state} skeleton={<Skeleton variant='post' repeat={6} />}>
      <CreatePost />

      {posts.length ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <div className='shadow-nice p-4 bg-white rounded'>
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <TbTimelineEventText className='text-4xl' />
              <p className='m-0'>Not posts uploaded yet</p>
            </div>
          </Center>
        </div>
      )}
    </Async>
  );
}

export default TimelineGroup;
