import { lazy } from 'react';
import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import BaseLayout from '../layouts/Base';
import MinimalLayout from '../layouts/Minimal';

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();

  if (!localStorage.getItem('isLogin')) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ next: location }} replace />;
  }

  return children;
}

const NotFound = lazy(() => import('../pages/public/404'));
const Login = lazy(() => import('../pages/public/Login'));

const Homepage = lazy(() => import('../pages/auth/Homepage'));
const Profile = lazy(() => import('../pages/auth/Profile'));
const Groups = lazy(() => import('../pages/auth/Groups'));
const SingleGroup = lazy(() => import('../pages/auth/SingleGroup'));

// profile taps
const AboutProfile = lazy(
  () => import('../components/profile/taps/About.profile')
);
const BadgesProfile = lazy(
  () => import('../components/profile/taps/Badges.profile')
);
const FriendsProfile = lazy(
  () => import('../components/profile/taps/Friends.profile')
);
const GroupsProfile = lazy(
  () => import('../components/profile/taps/Groups.profile')
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: (
          <RequireAuth>
            <Homepage />
          </RequireAuth>
        ),
      },
      {
        path: '/groups',
        element: (
          <RequireAuth>
            <Groups />
          </RequireAuth>
        ),
      },
      {
        path: '/group/groupId',
        element: (
          <RequireAuth>
            <SingleGroup />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/profile/:profileId',
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <TimelineProfile />,
          },
          {
            path: 'timeline',
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
            path: 'groups',
            element: <GroupsProfile />,
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
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
