import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BsPersonVideo3 } from 'react-icons/bs';
import PlyrViewer from '../../../common/plyr';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';
import { uuidv4 } from '../../../helpers';

function VideosGroup() {
  const videos =
    Math.random() < 0.5
      ? []
      : POSTS.filter((post) => post.variant === 'video').reduce(
          (prev, current) => [
            ...prev,
            ...(current.assets.videos ? current.assets.videos : []),
          ],
          [] as string[]
        );

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
      <div className='shadow-nice p-4 bg-white rounded'>
        {videos.length ? (
          <div className='md:grid grid-cols-2 gap-4'>
            {videos.map((video) => (
              <div key={uuidv4()} className='my-3 md:my-0'>
                <PlyrViewer src={video} MediaType='video' />
              </div>
            ))}
          </div>
        ) : (
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <BsPersonVideo3 className='text-4xl' />
              <p className='m-0'>No videos uploaded yet</p>
            </div>
          </Center>
        )}
      </div>
    </Async>
  );
}

export default VideosGroup;
