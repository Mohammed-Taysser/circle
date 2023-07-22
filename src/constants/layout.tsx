import { BsBookmarks } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdEventNote } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';

const HEADER_LINKS = [
  {
    icon: VscFeedback,
    color: 'blue',
    label: 'Feeds',
    path: '/',
  },
  {
    icon: BsBookmarks,
    color: 'teal',
    path: '/bookmarks',
    label: 'Bookmarks',
  },
  {
    icon: FiUsers,
    color: 'red',
    label: 'Groups',
    path: '/groups',
  },
  {
    icon: MdEventNote,
    color: 'grape',
    label: 'Events',
    path: '/events',
  },
];

const NAVBAR_DROPDOWN_STATUS = [
  {
    color: '#20c997',
    title: 'Online',
  },
  {
    color: '#fcc419',
    title: 'Away',
  },
  {
    color: '#dee2e6',
    title: 'Invisible',
  },
  {
    color: '#f03e3e',
    title: 'Offline',
  },
];

export { NAVBAR_DROPDOWN_STATUS, HEADER_LINKS };
