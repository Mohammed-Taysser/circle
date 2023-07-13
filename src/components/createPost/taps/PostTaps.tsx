import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { BsPersonVideo3 } from 'react-icons/bs';
import { IoImageOutline, IoImagesOutline } from 'react-icons/io5';
import { MdOutlineAudiotrack } from 'react-icons/md';
import Dropzone from '../../../common/Dropzone';

const DropzoneCreatePostViewer = (props: CreatePostDropzoneProps) => {
  return <Dropzone {...props} />;
};

const UpdatePost = (props: CreatePostDropzoneTapProps) => {
  const setup = {
    title: 'Drag single image here or click to select image',
    subtitle: 'Attach single image as you like, but file should not exceed 5mb',
    accept: IMAGE_MIME_TYPE,
    maxFiles: 1,
    preview: true,
    icon: IoImageOutline,
    multiple: false,
  };

  return <DropzoneCreatePostViewer {...props} {...setup} />;
};

const PostGallery = (props: CreatePostDropzoneTapProps) => {
  const setup = {
    icon: IoImagesOutline,
    label: 'Gallery',
    msg: 'A post with optional body text and a lot of picture.',
    title: 'Drag images here or click to select images',
    subtitle:
      'Attach as many files as you like, each file should not exceed 5mb',
    accept: IMAGE_MIME_TYPE,
    maxFiles: 0,
    preview: true,
    multiple: true,
  };

  return <DropzoneCreatePostViewer {...props} {...setup} />;
};

const PostVideo = (props: CreatePostDropzoneTapProps) => {
  const setup = {
    icon: BsPersonVideo3,
    label: 'Video',
    msg: 'A post with optional body text and single video.',
    title: 'Drag single video here or click to select video',
    subtitle: 'Attach single video as you like',
    accept: ['video/*'],
    maxFiles: 1,
    preview: true,
    multiple: false,
  };

  return <DropzoneCreatePostViewer {...props} {...setup} />;
};

const PostAudio = (props: CreatePostDropzoneTapProps) => {
  const setup = {
    label: 'Audio',
    msg: 'A post with optional body text and a single audio.',
    title: 'Drag single audio here or click to select audio',
    subtitle: 'Attach single audio as you like',
    accept: ['audio/*'],
    maxFiles: 1,
    preview: true,
    icon: MdOutlineAudiotrack,
    multiple: false,
  };

  return <DropzoneCreatePostViewer {...props} {...setup} />;
};

export { PostAudio, PostGallery, PostVideo, UpdatePost };
