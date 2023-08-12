import pageNotFound from '../assets/images/demo/pages/404.png';
import bookmarks from '../assets/images/demo/pages/bookmarks.png';
import chat from '../assets/images/demo/pages/chat.png';
import contactUs from '../assets/images/demo/pages/contact-us.png';
import events from '../assets/images/demo/pages/events.png';
import forgetPassword from '../assets/images/demo/pages/forget-password.png';
import groups from '../assets/images/demo/pages/groups.png';
import help from '../assets/images/demo/pages/help.png';
import homepage from '../assets/images/demo/pages/homepage.png';
import joinUs from '../assets/images/demo/pages/join-us.png';
import networks from '../assets/images/demo/pages/networks.png';
import notifications from '../assets/images/demo/pages/notifications.png';
import profile from '../assets/images/demo/pages/profile.png';
import results from '../assets/images/demo/pages/results.png';
import setting from '../assets/images/demo/pages/setting.png';
import singleGroup from '../assets/images/demo/pages/single-group.png';
import singlePost from '../assets/images/demo/pages/single-post.png';

import createEventModal from '../assets/images/demo/modals/create-event.png';
import postCommentsModal from '../assets/images/demo/modals/post-comments.png';
import imageCropperModal from '../assets/images/demo/modals/image-cropper.png';
import createPostModal from '../assets/images/demo/modals/create-post.png';
import searchModal from '../assets/images/demo/modals/search.png';
import singleEventModal from '../assets/images/demo/modals/single-event.png';

const SITEMAP: SitemapItem[] = [
  {
    img: pageNotFound,
    url: '/404',
    label: '404',
  },
  {
    img: bookmarks,
    url: '/bookmarks',
    label: 'bookmarks',
  },
  {
    img: chat,
    url: '/message',
    label: 'message',
  },
  {
    img: contactUs,
    url: '/contact-us',
    label: 'contact us',
  },
  {
    img: joinUs,
    url: '/join-us',
    label: 'join us',
  },
  {
    img: events,
    url: '/events',
    label: 'events',
  },
  {
    img: forgetPassword,
    url: '/forget-password',
    label: 'forget password',
  },
  {
    img: groups,
    url: '/groups',
    label: 'groups',
  },
  {
    img: help,
    url: '/help',
    label: 'help',
  },
  {
    img: homepage,
    url: '/homepage',
    label: 'homepage',
  },
  {
    img: networks,
    url: '/network',
    label: 'networks',
  },
  {
    img: notifications,
    url: '/notifications',
    label: 'notifications',
  },
  {
    img: profile,
    url: '/profile/101',
    label: 'profile',
  },
  {
    img: results,
    url: '/results',
    label: 'results',
  },
  {
    img: setting,
    url: '/setting',
    label: 'setting',
  },
  {
    img: singleGroup,
    url: '/singleGroup/101',
    label: 'Group details',
  },
  {
    img: singlePost,
    url: '/post/101',
    label: 'Post details',
  },
];

const MODALS: SitemapItem[] = [
  {
    img: createEventModal,
    url: '',
    label: 'create Event',
  },
  {
    img: postCommentsModal,
    url: '',
    label: 'post Comments',
  },
  {
    img: imageCropperModal,
    url: '',
    label: 'image Cropper',
  },
  {
    img: createPostModal,
    url: '',
    label: 'create Post',
  },
  {
    img: searchModal,
    url: '',
    label: 'search',
  },
  {
    img: singleEventModal,
    url: '',
    label: 'single Event',
  },
];

export { SITEMAP, MODALS };
