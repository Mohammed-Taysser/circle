import { useEffect, useState } from 'react';
import Post from '../../../common/Post';
import Skeleton from '../../../common/Skeleton';
import { POSTS } from '../../../constants/dummy';
import Async from '../../../containers/Async';
import { Gallery, uuidv4 } from '../../../helpers';
import Photos from '../../taps/Photos';

function PhotosProfile() {
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
      <Photos posts={POSTS.gallery} />
    </Async>
  );
}

const View = (props: { gallery: Post[]; view: string }) => {
  if (props.view === 'gallery') {
    return (
      <Gallery
        gallery={props.gallery.reduce(
          (prev, current) => [...prev, ...current.gallery],
          [] as string[]
        )}
        galleryId={uuidv4()} // TODO: replace with userId
      />
    );
  } else {
    return (
      <>
        {props.gallery.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </>
    );
  }
};

export default PhotosProfile;
