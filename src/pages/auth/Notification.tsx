import { Flex, Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import SingleNotification from '../../components/notification/SingleNotification';
import { NOTIFICATION } from '../../constants/dummy';
import Async from '../../containers/Async';
import useHelmet from '../../hooks/useHelmet';

function Notification() {
  useHelmet('notification');

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
    <Async {...state}>
      <>
        <div className='shadow-nice p-4 bg-white rounded relative'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Activity
          </h2>
        </div>

        <div className='my-5 shadow-nice p-4 bg-white rounded relative'>
          <Flex direction='column' wrap='wrap' gap={10}>
            {NOTIFICATION.map((request) => (
              <SingleNotification request={request} key={request.id} />
            ))}
          </Flex>
        </div>
        <div className='mb-10 shadow-nice p-7 bg-white rounded relative'>
          <Pagination total={3} withEdges position='center' />
        </div>
      </>
    </Async>
  );
}

export default Notification;
