import { AspectRatio } from '@mantine/core';
import plyr from 'plyr';
import { useEffect } from 'react';
import Friend from '../common/Friend';
import Group from '../common/Group';
import {
  Gallery as LightGallery,
  vimeoUrlParser,
  youtubeUrlParser,
} from '../helpers';

const PlyrVideo = (props: { post: Post }) => {
  useEffect(() => {
    const player = new plyr('.js-plyr');
    let provider: 'youtube' | 'vimeo' | undefined = undefined;
    let src = props.post.plyrUrl;

    if (props.post.plyrUrl.includes('youtube')) {
      provider = 'youtube';
      src = youtubeUrlParser(props.post.plyrUrl);
    } else if (props.post.plyrUrl.includes('vimeo')) {
      provider = 'vimeo';
      src = vimeoUrlParser(props.post.plyrUrl);
    }

    player.source = {
      type: 'video',
      title: 'Audio',
      sources: [
        {
          src,
          provider,
        },
      ],
    };

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <AspectRatio ratio={16 / 9}>
      <video className='js-plyr plyr'></video>
    </AspectRatio>
  );
};

const PlyrAudio = (props: { post: Post }) => {
  useEffect(() => {
    const player = new plyr('.js-plyr');

    player.source = {
      type: 'audio',
      title: 'Audio',
      sources: [
        {
          src: props.post.plyrUrl,
        },
      ],
    };

    return () => {
      player.destroy();
    };
  }, []);

  return <audio className='js-plyr plyr'></audio>;
};

const MapViewer = (props: { post: Post }) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe src={props.post.mapUrl} title='Map' />
    </AspectRatio>
  );
};

const Gallery = (props: { post: Post }) => {
  return (
    <div className='post-thumbs'>
      <LightGallery galleryId={props.post.id} gallery={props.post.gallery} />
    </div>
  );
};

const SoloPicture = (props: { post: Post }) => {
  return (
    <div className='post-thumbs'>
      <img
        src={props.post.picture}
        alt='post-cover'
        className='w-full h-96 rounded-lg object-cover'
      />
    </div>
  );
};

const AvatarViewer = (props: { post: Post }) => {
  return (
    <div className='post-thumbs'>
      <img
        src={props.post.picture}
        alt='user-cover'
        className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] mx-auto block object-cover rounded-full'
      />
    </div>
  );
};

const JoinGroup = (props: { post: Post }) => {
  if (!props.post.group) {
    return <></>;
  }
  return <Group group={props.post.group} />;
};

const NewFriend = (props: { post: Post }) => {
  if (!props.post.friend) {
    return <></>;
  }
  return (
    <div className='flex justify-center'>
      <Friend user={props.post.friend} />
    </div>
  );
};

const POST_TYPES = {
  UPDATE_COVER: {
    msg: 'Updated his cover photo.',
    component: SoloPicture,
  },
  UPDATE_AVATAR: {
    msg: 'Updated his profile picture.',
    component: AvatarViewer,
  },
  POST_UPDATE: {
    msg: 'Posted an update',
    component: SoloPicture,
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
    msg: 'Posted an map',
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

export { POST_TYPES, PlyrAudio, PlyrVideo };
