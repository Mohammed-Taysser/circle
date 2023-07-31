import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BsPersonBadge } from 'react-icons/bs';
import Badge from '../../../common/Badge';
import Skeleton from '../../../common/Skeleton';
import { BADGES } from '../../../constants/dummy';
import Async from '../../../containers/Async';

function BadgesGroup() {
  const badges = Math.random() < 0.5 ? [] : BADGES;
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
    <Async {...state} skeleton={<Skeleton variant='badge' repeat={6} />}>
      {badges.length ? (
        <div className='lg:grid grid-cols-3 gap-4'>
          {badges.map((badge) => (
            <Badge key={badge.id} badge={badge} className='my-3 md:my-0' />
          ))}
        </div>
      ) : (
        <div className='shadow-nice p-4 bg-white rounded'>
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <BsPersonBadge className='text-4xl' />
              <p className='m-0'>Not badges earned yet</p>
            </div>
          </Center>
        </div>
      )}
    </Async>
  );
}

export default BadgesGroup;
