import { useEffect, useState } from 'react';
import Skeleton from '../../../common/Skeleton';
import { FRIENDS } from '../../../constants/dummy';
import Async from '../../../containers/Async';
import Members from '../../taps/Members';

function FriendsProfile() {
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
    <Async {...state} skeleton={<Skeleton.friend repeat={6} />}>
      <Members members={FRIENDS} />
    </Async>
  );
}

export default FriendsProfile;
