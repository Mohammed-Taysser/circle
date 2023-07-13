import { AspectRatio } from '@mantine/core';
import Group from '../common/Group';
import Friend from '../common/Member';
import PlyrViewer from '../common/plyr';
import GalleryViewer from '../components/Gallery';

const PlyrVideo = (props: PostBodyProps) => {
  return <PlyrViewer src={props.post.utilsUrl} MediaType='video' />;
};

const PlyrAudio = (props: PostBodyProps) => {
  return <PlyrViewer src={props.post.utilsUrl} MediaType='audio' />;
};

const MapViewer = (props: PostBodyProps) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src={props.post.utilsUrl} title='Map' className='border-0' />
    </AspectRatio>
  );
};

const Gallery = (props: PostBodyProps) => {
  return (
    <div className='post-thumbs'>
      <GalleryViewer
        galleryId={props.post.id}
        gallery={props.post.gallery}
        full={props.full}
      />
    </div>
  );
};

const AvatarViewer = (props: PostBodyProps) => {
  return (
    <div className='post-thumbs'>
      <img
        src={props.post.gallery[0]}
        alt='user-cover'
        className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] mx-auto block object-cover rounded-full'
      />
    </div>
  );
};

const JoinGroup = (props: PostBodyProps) => {
  if (!props.post.utils) {
    return <></>;
  }
  return <Group group={props.post.utils} />;
};

const NewFriend = (props: PostBodyProps) => {
  if (!props.post.utils) {
    return <></>;
  }
  return (
    <div className='flex justify-center'>
      <Friend user={props.post.utils} />
    </div>
  );
};

const POST_TYPES: PostViewerObject = {
  UPDATE_COVER: {
    msg: 'Updated his cover photo.',
    component: Gallery,
  },
  UPDATE_AVATAR: {
    msg: 'Updated his profile picture.',
    component: AvatarViewer,
  },
  POST_UPDATE: {
    msg: 'Posted an update',
    component: Gallery,
  },
  POST_GALLERY: {
    msg: 'Published an gallery',
    component: Gallery,
  },
  POST_VIDEO: {
    msg: 'Posted an video',
    component: PlyrVideo,
  },
  POST_AUDIO: {
    msg: 'Posted an audio',
    component: PlyrAudio,
  },
  POST_MAP: {
    msg: 'Posted an Location',
    component: MapViewer,
  },
  JOIN_GROUP: {
    msg: 'Joined group',
    component: JoinGroup,
  },
  NEW_FRIEND: {
    msg: 'New friend',
    component: NewFriend,
  },
};

export { POST_TYPES };
