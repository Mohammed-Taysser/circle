import { BsBookmarks } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdEventNote } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import avatar from '../assets/images/default/avatar.png';

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

export { HEADER_LINKS, NAVBAR_DROPDOWN_STATUS, NOTIFICATIONS };
