import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import CreatePost from '../../common/CreatePost';
import Skeleton from '../../common/Skeleton';
import Timeline from '../../components/taps/Timeline';
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
    <Async {...state} skeleton={<Skeleton.post repeat={6} />}>
      <CreatePost />
      <Timeline posts={POSTS} />
    </Async>
  );
}

export default Homepage;
