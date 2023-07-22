import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IoImagesOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import Gallery from '../../../common/Gallery';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';

function PhotosProfile() {
  const { profileId = '' } = useParams();

  const posts =
    Math.random() < 0.5
      ? []
      : POSTS.filter((post) => post.variant === 'gallery');

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
        {posts.length ? (
          <Gallery
            full
            gallery={posts.reduce(
              (prev, current) => [
                ...prev,
                ...(current.assets.gallery ? current.assets.gallery : []),
              ],
              [] as string[]
            )}
            galleryId={profileId} // TODO: replace with userId
          />
        ) : (
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <IoImagesOutline className='text-4xl' />
              <p className='m-0'>Not images uploaded yet</p>
            </div>
          </Center>
        )}
      </div>
    </Async>
  );
}

export default PhotosProfile;
