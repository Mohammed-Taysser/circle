import { BsCardImage, BsPersonBadge, BsPersonVideo3 } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdGroups2, MdOutlineAudiotrack } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { TbTimelineEventText } from 'react-icons/tb';

const TAPS = [
  {
    label: 'Timeline',
    path: '',
    icon: TbTimelineEventText,
  },
  {
    label: 'About',
    path: 'about',
    icon: RiQuillPenLine,
  },
  {
    label: 'Friends',
    path: 'friends',
    icon: FiUsers,
  },
  {
    label: 'Photos',
    path: 'photos',
    icon: BsCardImage,
  },
  {
    label: 'Audio',
    path: 'audio',
    icon: MdOutlineAudiotrack,
  },
  {
    label: 'Videos',
    path: 'videos',
    icon: BsPersonVideo3,
  },
  {
    label: 'Groups',
    path: 'groups',
    icon: MdGroups2,
  },
  {
    label: 'Badges',
    path: 'badges',
    icon: BsPersonBadge,
  },
];

export { TAPS };
