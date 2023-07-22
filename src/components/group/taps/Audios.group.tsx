import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MdOutlineAudiotrack } from 'react-icons/md';
import PlyrViewer from '../../../common/plyr';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';
import { uuidv4 } from '../../../helpers';

function AudiosGroup() {
  const audios =
    Math.random() < 0.5
      ? []
      : POSTS.filter((post) => post.variant === 'audio').reduce(
          (prev, current) => [
            ...prev,
            ...(current.assets.audios ? current.assets.audios : []),
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
        {audios.length ? (
          <div className='md:grid grid-cols-2 gap-4'>
            {audios.map((audio) => (
              <div
                key={uuidv4()}
                className='flex items-center my-3 md:my-0 shadow-nice'
              >
                <div className='flex-1'>
                  <PlyrViewer src={audio} MediaType='audio' />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <MdOutlineAudiotrack className='text-4xl' />
              <p className='m-0'>No audios uploaded yet</p>
            </div>
          </Center>
        )}
      </div>
    </Async>
  );
}

export default AudiosGroup;
