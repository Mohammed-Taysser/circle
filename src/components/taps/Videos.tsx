import { Anchor, Center, SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsColumnsGap } from 'react-icons/bs';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Post from '../../common/Post';
import PlyrViewer from '../../common/plyr';

function Videos(props: { posts: Post[] }) {
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
      <View view={view} videos={props.posts} />
    </>
  );
}

const View = (props: { videos: Post[]; view: string }) => {
  if (props.view === 'gallery') {
    return (
      <div className='md:grid grid-cols-2 gap-4'>
        {props.videos.map((post) => (
          <div key={post.id} className='flex items-center my-3 md:my-0'>
            <div className='flex-1'>
              <PlyrViewer src={post.plyrUrl} MediaType='video' />
            </div>
            <Anchor
              component={Link}
              to={`/post/${post.id}`}
              className='ml-4 text-lg'
            >
              <RiExternalLinkLine />
            </Anchor>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <>
        {props.videos.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </>
    );
  }
};

export default Videos;
