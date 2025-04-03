import { BsBookmarks } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdEventNote } from 'react-icons/md';
import { PiNewspaperClippingDuotone } from 'react-icons/pi';
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

// Dashboard Header
const DASHBOARD_HEADER_LINKS = [
  {
    icon: FiUsers,
    color: 'blue',
    label: 'Users',
    path: '/dashboard/users',
  },
  {
    icon: PiNewspaperClippingDuotone,
    color: 'teal',
    label: 'Subscriptions',
    path: '/dashboard/subscriptions',
  },
];

const USER_STATUS: UserStatusConstant = {
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

export { DASHBOARD_HEADER_LINKS, HEADER_LINKS, USER_STATUS };
