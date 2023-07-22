import { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import Skeleton from '../../common/Skeleton';
import { GROUPS } from '../../constants/dummy';
import Async from '../../containers/Async';
import GroupsContainer from '../../containers/Groups';

function FriendsGroups() {
  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  const onSearchFormSubmit = (values: { query: string }) => {
    console.log(values);
  };

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
      <GroupsContainer
        onSearchFormSubmit={onSearchFormSubmit}
        title='Friends Groups'
        groups={GROUPS}
        icon={FiUsers}
      />
    </Async>
  );
}

export default FriendsGroups;
