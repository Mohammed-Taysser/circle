import { useEffect, useState } from 'react';
import Skeleton from '../../../common/Skeleton';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../layouts/Async';
import Timeline from '../../taps/Timeline';

function TimelineProfile() {
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
      <Timeline posts={POSTS.timeline} />
    </Async>
  );
}

export default TimelineProfile;
