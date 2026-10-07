import { AiOutlineHeart, AiOutlineYoutube } from 'react-icons/ai';
import { BiLike, BiMap } from 'react-icons/bi';
import { BsPersonVideo3, BsStars } from 'react-icons/bs';
import { FiShare2, FiUserPlus, FiUsers } from 'react-icons/fi';
import { IoImagesOutline } from 'react-icons/io5';
import {
  MdOutlineAudiotrack,
  MdOutlineTipsAndUpdates,
  MdOutlineWavingHand,
} from 'react-icons/md';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiLock } from 'react-icons/tfi';

const REACT_ICONS: PostReactsConstant = {
  like: {
    icon: BiLike,
    color: 'blue',
  },
  love: {
    icon: AiOutlineHeart,
    color: 'red',
  },
  wow: {
    icon: MdOutlineWavingHand,
    color: 'grape',
  },
  star: {
    icon: BsStars,
    color: 'teal',
  },
};

const POST_VISIBILITY: PostVisibilityConstant = {
  public: {
    label: 'Public',
    icon: RiGlobalLine,
    color: 'blue',
  },
  private: {
    label: 'Private',
    icon: TfiLock,
    color: 'red',
  },
  friends: {
    label: 'Friends',
    icon: FiUsers,
    color: 'green',
  },
};

const POST_VARIANT: PostVariantConstant = {
  blog: {
    label: 'Blog',
    icon: MdOutlineTipsAndUpdates,
    color: 'blue',
  },
  gallery: {
    label: 'Gallery',
    icon: IoImagesOutline,
    color: 'green',
  },
  audio: {
    label: 'Audio',
    icon: MdOutlineAudiotrack,
    color: 'yellow',
  },
  video: {
    label: 'Video',
    icon: BsPersonVideo3,
    color: 'gold',
  },
  youtube: {
    label: 'Youtube',
    icon: AiOutlineYoutube,
    color: 'red',
  },
  cover: {
    label: 'Cover',
    icon: IoImagesOutline,
    color: 'indigo',
  },
  avatar: {
    label: 'Avatar',
    icon: IoImagesOutline,
    color: 'purple',
  },
  group: {
    label: 'Group',
    icon: FiUsers,
    color: 'teal',
  },
  friend: {
    label: 'Friend',
    icon: FiUserPlus,
    color: 'cyan',
  },
  share: {
    label: 'Share',
    icon: FiShare2,
    color: 'gray',
  },
};

// Variants a user can pick when creating a post from the feed
const CREATE_POST_VARIANTS: CreatePostVariant[] = [
  'blog',
  'gallery',
  'audio',
  'video',
  'youtube',
];

export { CREATE_POST_VARIANTS, POST_VARIANT, POST_VISIBILITY, REACT_ICONS };
