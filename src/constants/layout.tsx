import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdEventNote } from 'react-icons/md';
import { TfiSave } from 'react-icons/tfi';
import { VscFeedback } from 'react-icons/vsc';

const HEADER_LINKS = [
  {
    icon: VscFeedback,
    color: 'blue',
    label: 'Feeds',
    path: '/',
  },
  {
    icon: TfiSave,
    color: 'teal',
    path: '/saved-posts',
    label: 'Saved Posts',
  },
  {
    icon: FiUsers,
    color: 'red',
    label: 'Groups',
    path: '/your-groups',
  },
  {
    icon: HiOutlineUserGroup,
    color: 'violet',
    label: 'Friend Groups',
    path: '/friends-groups',
  },
  {
    icon: MdEventNote,
    color: 'grape',
    label: 'Events',
    path: '/events',
  },
];

export { HEADER_LINKS };
