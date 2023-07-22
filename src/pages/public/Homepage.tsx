import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import CreatePost from '../../common/CreatePost';
import Post from '../../common/Post';
import Skeleton from '../../common/Skeleton';
import { POSTS } from '../../constants/dummy';
import Async from '../../containers/Async';

function Homepage() {
  useDocumentTitle('Circle | Homepage');

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
      {POSTS.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Async>
  );
}

export default Homepage;
