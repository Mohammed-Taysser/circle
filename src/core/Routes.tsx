import { PropsWithChildren, Suspense, lazy } from 'react';
import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import SuspenseLoading from '../common/SuspenseLoading';
import BaseLayout from '../layouts/Base';
import DashboardLayout from '../layouts/Dashboard';
import { selectAuth, useAppSelector } from '../hooks/useRedux';

function RequireAuth({ children }: PropsWithChildren) {
  const location = useLocation();

  const authState = useAppSelector(selectAuth);

  if (!authState.data) {
    return <Navigate to={`/join-us?nextUrl=${location.pathname}`} replace />;
  }

  return children;
}

function NoRequireAuth({ children }: PropsWithChildren) {
  const authState = useAppSelector(selectAuth);

  if (authState.data) {
    return <Navigate to='/' replace />;
  }

  return <Suspense fallback={<SuspenseLoading />}>{children}</Suspense>;
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
const Demo = lazy(() => import('../pages/public/Demo'));
const EditorHelp = lazy(() => import('../pages/public/help/Editor.help'));
const CalenderHelp = lazy(() => import('../pages/public/help/Calender.help'));
const Help = lazy(() => import('../pages/public/Help'));
const JoinUs = lazy(() => import('../pages/public/JoinUs'));
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
  () => import('../components/profile/taps/About.profile'),
);
const BadgesProfile = lazy(
  () => import('../components/profile/taps/Badges.profile'),
);
const FriendsProfile = lazy(
  () => import('../components/profile/taps/Friends.profile'),
);
const PhotosProfile = lazy(
  () => import('../components/profile/taps/Photos.profile'),
);
const TimelineProfile = lazy(
  () => import('../components/profile/taps/Timeline.profile'),
);
const VideosProfile = lazy(
  () => import('../components/profile/taps/Videos.profile'),
);
const AudiosProfile = lazy(
  () => import('../components/profile/taps/Audios.profile'),
);

// Group Taps
const AboutGroup = lazy(() => import('../components/group/taps/About.group'));
const BadgesGroup = lazy(() => import('../components/group/taps/Badges.group'));
const PhotosGroup = lazy(() => import('../components/group/taps/Photos.group'));
const TimelineGroup = lazy(
  () => import('../components/group/taps/Timeline.group'),
);
const VideosGroup = lazy(() => import('../components/group/taps/Videos.group'));
const AudiosGroup = lazy(() => import('../components/group/taps/Audios.group'));
const MembersGroup = lazy(
  () => import('../components/group/taps/Members.group'),
);

// Dashboard
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Users = lazy(() => import('../pages/dashboard/Users.dashboard'));
const Subscriptions = lazy(
  () => import('../pages/dashboard/Subscriptions.dashboard'),
);
const DashboardGroups = lazy(
  () => import('../pages/dashboard/Groups.dashboard'),
);

const routes = createBrowserRouter([
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
        path: '/results',
        element: (
          <RequireAuth>
            <Results />
          </RequireAuth>
        ),
      },
      {
        path: '/contact-us',
        element: (
          <RequireAuth>
            <ContactUs />
          </RequireAuth>
        ),
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
            element: (
              <RequireAuth>
                <TimelineGroup />
              </RequireAuth>
            ),
          },
          {
            path: 'about',
            element: (
              <RequireAuth>
                <AboutGroup />
              </RequireAuth>
            ),
          },
          {
            path: 'badges',
            element: (
              <RequireAuth>
                <BadgesGroup />
              </RequireAuth>
            ),
          },
          {
            path: 'members',
            element: (
              <RequireAuth>
                <MembersGroup />
              </RequireAuth>
            ),
          },
          {
            path: 'photos',
            element: (
              <RequireAuth>
                <PhotosGroup />
              </RequireAuth>
            ),
          },
          {
            path: 'videos',
            element: (
              <RequireAuth>
                <VideosGroup />
              </RequireAuth>
            ),
          },
          {
            path: 'audio',
            element: (
              <RequireAuth>
                <AudiosGroup />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: '/profile/:profileId',
        element: <Profile />,
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <TimelineProfile />
              </RequireAuth>
            ),
          },
          {
            path: 'about',
            element: (
              <RequireAuth>
                <AboutProfile />
              </RequireAuth>
            ),
          },
          {
            path: 'badges',
            element: (
              <RequireAuth>
                <BadgesProfile />
              </RequireAuth>
            ),
          },
          {
            path: 'friends',
            element: (
              <RequireAuth>
                <FriendsProfile />
              </RequireAuth>
            ),
          },
          {
            path: 'photos',
            element: (
              <RequireAuth>
                <PhotosProfile />
              </RequireAuth>
            ),
          },
          {
            path: 'videos',
            element: (
              <RequireAuth>
                <VideosProfile />
              </RequireAuth>
            ),
          },
          {
            path: 'audio',
            element: (
              <RequireAuth>
                <AudiosProfile />
              </RequireAuth>
            ),
          },
        ],
      },
      {
        path: '/post/:postId',
        element: (
          <RequireAuth>
            <PostDetails />
          </RequireAuth>
        ),
      },
      {
        path: '/help',
        children: [
          {
            index: true,
            element: (
              <RequireAuth>
                <Help />
              </RequireAuth>
            ),
          },
          {
            path: 'editor',
            element: (
              <RequireAuth>
                <EditorHelp />
              </RequireAuth>
            ),
          },
          {
            path: 'calender',
            element: (
              <RequireAuth>
                <CalenderHelp />
              </RequireAuth>
            ),
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
        element: (
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: 'users',
        element: (
          <RequireAuth>
            <Users />
          </RequireAuth>
        ),
      },
      {
        path: 'subscriptions',
        element: (
          <RequireAuth>
            <Subscriptions />
          </RequireAuth>
        ),
      },
      {
        path: 'groups',
        element: (
          <RequireAuth>
            <DashboardGroups />
          </RequireAuth>
        ),
      },
      {
        path: '*',
        element: (
          <RequireAuth>
            <NotFound />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/join-us',
    element: (
      <NoRequireAuth>
        <JoinUs />
      </NoRequireAuth>
    ),
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
  {
    path: '*',
    element: <JoinUs />,
  },
]);

export default routes;
