import { BiMessageDetail } from 'react-icons/bi';
import { BsBookmarks } from 'react-icons/bs';
import { FiUser, FiUsers } from 'react-icons/fi';
import { IoHelpSharp, IoSettingsOutline } from 'react-icons/io5';
import { MdEventNote } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import avatar from '../assets/images/default/avatar.png';

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

const MESSAGES = [
  {
    unread: true,
    status: 'online',
    id: 1,
    date: new Date(),
    user: {
      name: 'Mohammed Taysser',
      avatar,
      id: 1,
    },
    msg: `Hi James! It's Diana, I just wanted to let you know that we have to reschedule`,
  },
  {
    unread: true,
    status: 'online',
    id: 2,
    date: new Date(),
    user: {
      name: 'Tony Stevens',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar56-sm.webp',
      id: 2,
    },
    msg: `Great, I'll see you tomorrow!.`,
  },
  {
    unread: false,
    status: 'away',
    id: 3,
    date: new Date(),
    user: {
      name: 'Tamara Romanoff',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar55-sm.webp',
      id: 3,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
  {
    unread: true,
    status: 'offline',
    id: 4,
    date: new Date(),
    user: {
      name: 'Mary Jane Stark',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar57-sm.webp',
      id: 4,
    },
    msg: 'Yeah! Seems fine by me!',
  },
  {
    unread: false,
    id: 5,
    date: new Date(),
    status: 'away',
    user: {
      name: 'Stagg Clothing',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar58-sm.webp',
      id: 5,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
  {
    unread: false,
    id: 6,
    date: new Date(),
    status: 'offline',
    user: {
      name: 'Jake Parker',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
      id: 6,
    },
    msg: `Hi James! It's Diana, I just wanted to let you know that we have to reschedule`,
  },
  {
    unread: true,
    id: 7,
    date: new Date(),
    status: 'online',
    user: {
      name: 'Elaine Dreyfuss',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar61-sm.webp',
      id: 7,
    },
    msg: '4 Friends in Common',
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

const NOTIFICATIONS: SingleNotification[] = [
  {
    type: 'comment',
    id: '1',
    unread: true,
    date: new Date(),
    user: {
      name: 'Mohammed Taysser',
      avatar,
      id: '1',
    },
    post: {
      id: '1',
    },
    msg: `commented on your profile avatar`,
  },
  {
    type: 'replay',
    id: '2',
    unread: true,
    date: new Date(),
    user: {
      name: 'Tony Stevens',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar56-sm.webp',
      id: '1',
    },
    post: {
      id: '1',
    },
    msg: `replay on your comment`,
  },
  {
    type: 'share',
    id: '3',
    unread: false,
    date: new Date(),
    post: {
      id: '1',
    },
    user: {
      name: 'Tamara Romanoff',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar55-sm.webp',
      id: '1',
    },
    msg: `share a new status`,
  },
  {
    type: 'replay',
    post: {
      id: '1',
    },
    id: '4',
    unread: true,
    date: new Date(),
    user: {
      name: 'Mary Jane Stark',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar57-sm.webp',
      id: '1',
    },
    msg: `replay on your comment`,
  },
  {
    type: 'comment',
    id: '5',
    unread: false,
    date: new Date(),
    post: {
      id: '1',
    },
    user: {
      name: 'Stagg Clothing',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar58-sm.webp',
      id: '1',
    },
    msg: `commented on your profile cover`,
  },
  {
    type: 'share',
    id: '6',
    unread: false,
    date: new Date(),
    post: {
      id: '1',
    },
    user: {
      name: 'Jake Parker',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
      id: '1',
    },
    msg: `share a new image`,
  },
  {
    type: 'replay',
    id: '7',
    unread: true,
    date: new Date(),
    post: {
      id: '1',
    },
    user: {
      name: 'Elaine Dreyfuss',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar61-sm.webp',
      id: '1',
    },
    msg: `replay on your comment`,
  },
  {
    type: 'share',
    id: '8',
    unread: false,
    date: new Date(),
    post: {
      id: '1',
    },
    user: {
      name: 'Aalaa Kamal',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar65-sm.webp',
      id: '1',
    },
    msg: `share a new status`,
  },
];

export {
  HEADER_LINKS,
  USER_STATUS,
  USER_DROPDOWN_LINKS,
  NOTIFICATIONS,
  MESSAGES,
};
