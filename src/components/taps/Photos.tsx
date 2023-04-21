import { Center, SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsColumnsGap } from 'react-icons/bs';
import Post from '../../common/Post';
import { Gallery, uuidv4 } from '../../helpers';

function Photos(props: { posts: Post[] }) {
  const [view, setView] = useState('post');

  return (
    <>
      <div className='nice-shadow flex justify-end p-4 mb-10'>
        <SegmentedControl
          color='teal'
          value={view}
          onChange={setView}
          data={[
            {
              value: 'gallery',
              label: (
                <Center>
                  <AiOutlineUnorderedList />
                </Center>
              ),
            },
            {
              value: 'post',
              label: (
                <Center>
                  <BsColumnsGap />
                </Center>
              ),
            },
          ]}
        />
      </div>
      <View view={view} gallery={props.posts} />
    </>
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

export default Photos;
