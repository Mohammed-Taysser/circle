import { AiOutlineHeart } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';
import { MdOutlineWavingHand } from 'react-icons/md';

const REACT_ICONS: {
  [key in PostReactsLabel]: {
    icon: IconType;
    color: string;
  };
} = {
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


export { REACT_ICONS };
