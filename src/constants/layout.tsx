import { BiMessageDetail } from 'react-icons/bi';
import { BsBookmarks } from 'react-icons/bs';
import { FiUser, FiUsers } from 'react-icons/fi';
import { IoHelpSharp, IoSettingsOutline } from 'react-icons/io5';
import { MdEventNote } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';

// Header
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

// Navbar
const USER_DROPDOWN_LINKS = [
  {
    icon: FiUser,
    label: 'Profile',
    path: `/profile/1`, // TODO: replace with redux
  },
  {
    icon: BiMessageDetail,
    path: '/message',
    label: 'Messenger',
  },
  {
    icon: IoSettingsOutline,
    label: 'Setting',
    path: '/setting',
  },
  {
    icon: IoHelpSharp,
    label: 'Help',
    path: '/help',
  },
];

const USER_STATUS: UserStatus = {
  online: {
    color: '#20c997',
    title: 'Online',
  },
  away: {
    color: '#fcc419',
    title: 'Away',
  },
  invisible: {
    color: '#dee2e6',
    title: 'Invisible',
  },
  offline: {
    color: '#f03e3e',
    title: 'Offline',
  },
};

export { HEADER_LINKS, USER_DROPDOWN_LINKS, USER_STATUS };
