import { Avatar } from '@mantine/core';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BsStars } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';
import { MdOutlineWavingHand } from 'react-icons/md';

const REACT_ICONS: {
  [key in ReactsLabel]: {
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

const getReactIcon = (type: ReactsLabel) => {
  let info = REACT_ICONS[type];

  if (!info) {
    return <>No Icon</>;
  }

  return (
    <Avatar color={info.color} radius='sm'>
      <info.icon className='text-lg' />
    </Avatar>
  );
};

export { REACT_ICONS, getReactIcon };
