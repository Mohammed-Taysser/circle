import { AspectRatio } from '@mantine/core';
import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { BsPersonVideo3 } from 'react-icons/bs';
import { IoImageOutline, IoImagesOutline } from 'react-icons/io5';
import { MdOutlineAudiotrack, MdOutlineFormatShapes } from 'react-icons/md';
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

const POST_TYPES = {
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

const CREATE_POST_TYPES = [
  {
    value: 'POST_UPDATE',
    icon: MdOutlineFormatShapes,
    label: 'Update',
    msg: 'This just the normal post that have optional body text and also optional single picture.',
    dropzone: {
      title: 'Drag single image here or click to select image',
      subtitle:
        'Attach single image as you like, but file should not exceed 5mb',
      accept: IMAGE_MIME_TYPE,
      maxFiles: 1,
      preview: true,
      icon: IoImageOutline,
      multiple: false,
      maxSize: undefined,
    },
  },
  {
    value: 'POST_GALLERY',
    icon: IoImagesOutline,
    label: 'Gallery',
    msg: 'A post with optional body text and a lot of picture.',
    dropzone: {
      title: 'Drag images here or click to select images',
      subtitle:
        'Attach as many files as you like, each file should not exceed 5mb',
      accept: IMAGE_MIME_TYPE,
      maxFiles: 0,
      preview: true,
      icon: IoImagesOutline,
      multiple: true,
      maxSize: undefined,
    },
  },
  {
    value: 'POST_VIDEO',
    icon: BsPersonVideo3,
    label: 'Video',
    msg: 'A post with optional body text and single video.',
    dropzone: {
      title: 'Drag single video here or click to select video',
      subtitle: 'Attach single video as you like',
      accept: ['video/*'],
      maxFiles: 1,
      preview: true,
      icon: BsPersonVideo3,
      multiple: false,
      maxSize: undefined,
    },
  },
  {
    value: 'POST_AUDIO',
    icon: MdOutlineAudiotrack,
    label: 'Audio',
    msg: 'A post with optional body text and a single audio.',
    dropzone: {
      title: 'Drag single audio here or click to select audio',
      subtitle: 'Attach single audio as you like',
      accept: ['audio/*'],
      maxFiles: 1,
      preview: true,
      icon: MdOutlineAudiotrack,
      multiple: false,
      maxSize: undefined,
    },
  },
];

export { POST_TYPES, CREATE_POST_TYPES };
