import { lazy } from 'react';
import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import BaseLayout from '../layouts/Base';

function RequireAuth({ children }: { children: React.ReactElement }) {
  let location = useLocation();

  if (!localStorage.getItem('isLogin')) {
    // TODO: replace with redux
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/join-us' state={{ next: location }} replace />;
  }

  return children;
}

function NoRequireAuth({ children }: { children: React.ReactElement }) {
  if (localStorage.getItem('isLogin')) {
    return <Navigate to='/' replace />;
  }

  return children;
}

// Auth
const Setting = lazy(() => import('../pages/auth/Setting'));
const YourGroups = lazy(() => import('../pages/auth/YourGroups'));
const FriendsGroups = lazy(() => import('../pages/auth/FriendsGroups'));
const RecommendedGroups = lazy(() => import('../pages/auth/RecommendedGroups'));
const Bookmarks = lazy(() => import('../pages/auth/Bookmarks'));
const Events = lazy(() => import('../pages/auth/Events'));
const Notification = lazy(() => import('../pages/auth/Notification'));
const Networks = lazy(() => import('../pages/auth/Networks'));
const Massager = lazy(() => import('../pages/auth/Massager'));

// Public
const NotFound = lazy(() => import('../pages/public/404'));
const EditorHelp = lazy(() => import('../pages/public/help/Editor.help'));
const CalenderHelp = lazy(() => import('../pages/public/help/Calender.help'));
const Help = lazy(() => import('../pages/public/Help'));
const Registration = lazy(() => import('../pages/public/Registration'));
const Results = lazy(() => import('../pages/public/Results'));
const Homepage = lazy(() => import('../pages/public/Homepage'));
const Profile = lazy(() => import('../pages/public/Profile'));
const ContactUs = lazy(() => import('../pages/public/ContactUs'));
const Groups = lazy(() => import('../pages/public/Groups'));
const DiscoverGroups = lazy(() => import('../pages/public/DiscoverGroups'));
const SingleGroup = lazy(() => import('../pages/public/SingleGroup'));
const PostDetails = lazy(() => import('../pages/public/PostDetails'));
const ForgetPassword = lazy(() => import('../pages/public/ForgetPassword'));

// Profile Taps
const AboutProfile = lazy(
  () => import('../components/profile/taps/About.profile')
);
const BadgesProfile = lazy(
  () => import('../components/profile/taps/Badges.profile')
);
const FriendsProfile = lazy(
  () => import('../components/profile/taps/Friends.profile')
);
const PhotosProfile = lazy(
  () => import('../components/profile/taps/Photos.profile')
);
const TimelineProfile = lazy(
  () => import('../components/profile/taps/Timeline.profile')
);
const VideosProfile = lazy(
  () => import('../components/profile/taps/Videos.profile')
);
const AudiosProfile = lazy(
  () => import('../components/profile/taps/Audios.profile')
);

// Group Taps
const AboutGroup = lazy(() => import('../components/group/taps/About.group'));
const BadgesGroup = lazy(() => import('../components/group/taps/Badges.group'));
const PhotosGroup = lazy(() => import('../components/group/taps/Photos.group'));
const TimelineGroup = lazy(
  () => import('../components/group/taps/Timeline.group')
);
const VideosGroup = lazy(() => import('../components/group/taps/Videos.group'));
const AudiosGroup = lazy(() => import('../components/group/taps/Audios.group'));
const MembersGroup = lazy(
  () => import('../components/group/taps/Members.group')
);

const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/results',
        element: <Results />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/groups',
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <Groups />
              </RequireAuth>
            ),
          },
          {
            path: 'friends',
            element: (
              <RequireAuth>
                <FriendsGroups />
              </RequireAuth>
            ),
          },
          {
            path: 'discover',
            element: (
              <RequireAuth>
                <DiscoverGroups />
              </RequireAuth>
            ),
          },
          {
            path: 'your',
            element: (
              <RequireAuth>
                <YourGroups />
              </RequireAuth>
            ),
          },
          {
            path: 'recommended',
            element: (
              <RequireAuth>
                <RecommendedGroups />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: '/bookmarks',
        element: (
          <RequireAuth>
            <Bookmarks />
          </RequireAuth>
        ),
      },
      {
        path: '/group/:groupId',
        element: <SingleGroup />,
        children: [
          {
            index: true,
            element: <TimelineGroup />,
          },
          {
            path: 'about',
            element: <AboutGroup />,
          },
          {
            path: 'badges',
            element: <BadgesGroup />,
          },
          {
            path: 'members',
            element: <MembersGroup />,
          },
          {
            path: 'photos',
            element: <PhotosGroup />,
          },
          {
            path: 'videos',
            element: <VideosGroup />,
          },
          {
            path: 'audio',
            element: <AudiosGroup />,
          },
        ],
      },
      {
        path: '/profile/:profileId',
        element: <Profile />,
        children: [
          {
            index: true,
            element: <TimelineProfile />,
          },
          {
            path: 'about',
            element: <AboutProfile />,
          },
          {
            path: 'badges',
            element: <BadgesProfile />,
          },
          {
            path: 'friends',
            element: <FriendsProfile />,
          },
          {
            path: 'photos',
            element: <PhotosProfile />,
          },
          {
            path: 'videos',
            element: <VideosProfile />,
          },
          {
            path: 'audio',
            element: <AudiosProfile />,
          },
        ],
      },
      {
        path: '/post/:postId',
        element: <PostDetails />,
      },
      {
        path: '/help',
        children: [
          {
            index: true,
            element: <Help />,
          },
          {
            path: 'editor',
            element: <EditorHelp />,
          },
          {
            path: 'calender',
            element: <CalenderHelp />,
          },
        ],
      },
      {
        path: '/events',
        element: (
          <RequireAuth>
            <Events />
          </RequireAuth>
        ),
      },
      {
        path: '/setting',
        element: (
          <RequireAuth>
            <Setting />
          </RequireAuth>
        ),
      },
      {
        path: '/notifications',
        element: (
          <RequireAuth>
            <Notification />
          </RequireAuth>
        ),
      },
      {
        path: '/network',
        element: (
          <RequireAuth>
            <Networks />
          </RequireAuth>
        ),
      },
      {
        path: '/message',

        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <Massager />
              </RequireAuth>
            ),
          },
          {
            path: ':userId',
            element: (
              <RequireAuth>
                <Massager />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/join-us',
    element: (
      <NoRequireAuth>
        <Registration />
      </NoRequireAuth>
    ),
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
]);

export default routes;
