import { AiOutlineHeart, AiOutlineYoutube } from 'react-icons/ai';
import { BiLike, BiMap } from 'react-icons/bi';
import { BsPersonVideo3, BsStars } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
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
  },
  private: {
    label: 'Private',
    icon: TfiLock,
  },
  friends: {
    label: 'Friends',
    icon: FiUsers,
  },
};

const POST_VARIANT: PostVariantConstant = {
  blog: {
    label: 'Blog',
    icon: MdOutlineTipsAndUpdates,
  },
  gallery: {
    label: 'Gallery',
    icon: IoImagesOutline,
  },
  audio: {
    label: 'Audio',
    icon: MdOutlineAudiotrack,
  },
  video: {
    label: 'Video',
    icon: BsPersonVideo3,
  },
  youtube: {
    label: 'Youtube',
    icon: AiOutlineYoutube,
  },
};

export { POST_VARIANT, POST_VISIBILITY, REACT_ICONS };
