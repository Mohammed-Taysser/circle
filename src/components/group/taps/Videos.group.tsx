import { useEffect, useState } from 'react';
import Skeleton from '../../../common/Skeleton';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';
import Videos from '../../taps/Videos';

function VideosGroup() {
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
      <Videos posts={POSTS.video} />
    </Async>
  );
}

export default VideosGroup;
