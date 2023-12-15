import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import User from '../../../common/User';
import Skeleton from '../../../common/Skeleton';
import { FRIENDS } from '../../../constants/dummy';
import Async from '../../../containers/Async';

function MembersGroup() {
  const members = FRIENDS;
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
    <Async {...state} skeleton={<Skeleton variant='friend' repeat={6} />}>
      {members.length ? (
        <div className='md:grid grid-cols-2 gap-4'>
          {members.map((friend) => (
            <User key={friend.id} user={friend} />
          ))}
        </div>
      ) : (
        <div className='shadow-nice p-4 bg-white rounded'>
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <FiUsers className='text-4xl' />
              <p className='m-0'>Not members yet</p>
            </div>
          </Center>
        </div>
      )}
    </Async>
  );
}

export default MembersGroup;
