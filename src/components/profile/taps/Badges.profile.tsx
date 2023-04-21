import { useEffect, useState } from 'react';
import Skeleton from '../../../common/Skeleton';
import { BADGES } from '../../../constants/dummy';
import Async from '../../../layouts/Async';
import Badges from '../../taps/Badges';

function BadgesProfile() {
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
    <Async {...state} skeleton={<Skeleton.badge repeat={6} />}>
      <Badges badges={BADGES} />;
    </Async>
  );
}

export default BadgesProfile;
