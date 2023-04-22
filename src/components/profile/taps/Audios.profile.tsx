import { useEffect, useState } from 'react';
import Skeleton from '../../../common/Skeleton';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';
import Audios from '../../taps/Audios';

function AudiosProfile() {
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
      <Audios audios={POSTS.audio} />
    </Async>
  );
}

export default AudiosProfile;
