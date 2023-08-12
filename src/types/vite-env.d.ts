/// <reference types="react" />
/// <reference types="vite/client" />
/// <reference types="react-icons" />
/// <reference types="@tiptap" />
/// <reference types="@tiptap/react" />
/// <reference types="@tiptap/dropzone" />
/// <reference types="@mantine/modals" />
/// <reference types="@fullcalendar/core" />

// ErrorBoundary
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Avatar Component
interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  sm?: boolean;
  status?: DefaultMantineColor;
}

// Tiptap Editor Component
interface TiptapEditorProps {
  getText?: (content: { text: string; html: string }) => void;
  content?: Content;
  noFontSizes?: boolean;
}

// Badge component
interface Badge {
  id: string;
  label: string;
  picture: string;
  msg: string;
  earnedAt: Date;
  users: {
    avatar: string;
    name: string;
    id: string;
  }[];
}

// Banner component
interface BannerProps {
  title: string;
  subtitle: string;
  className?: string;
  icon: IconType;
}

// Info Banner component
interface InfoBannerProp {
  cover: string;
  avatar: string;
  name: string;
  username: string;
  extraInfo: ReactElement;
  verified: boolean;
  className?: string;
}

// User component
interface User {
  avatar: string;
  cover: string;
  name: string;
  username: string;
  id: string;
  joinAt: Date;
  badges: {
    id: string;
    label: string;
    picture: string;
  }[];
}

// Plyr component
interface PlyrViewerProps {
  src: string;
  MediaType: 'video' | 'audio';
  title?: string;
  id?: string;
}

// Skeleton component
type SkeletonVariant = 'friend' | 'comment' | 'post' | 'badge';

// Taps component
interface SingleTap {
  label: string;
  path: string;
  icon: IconType;
}

interface TapsProps {
  taps: SingleTap[];
  className?: string;
}

// Group component
interface GroupProps {
  colView?: boolean;
  group: Group;
  className?: string;
}

interface Group {
  id: string;
  picture: string;
  cover: string;
  visibility: 'private' | 'public';
  title: string;
  users: number;
  posts: number;
}

interface GroupContainerProps {
  title: string;
  onSearchFormSubmit: (values: { query: string }) => void;
  groups: Group[];
  icon: IconType;
}

// Async Container
interface AsyncProps {
  loading: boolean;
  fulfilled: boolean;
  error: any;
  skeleton?: ReactElement;
  children: ReactElement;
}

// Mantine provider
interface MantineProviderProps {
  children: React.ReactElement;
  colorScheme: ColorScheme;
}

// Navbar Layout
interface NavbarProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

// Header Layout
interface HeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SingleContactFriend {
  status: StatusSlug;
  name: string;
  img: string;
  id: string;
  msg: string;
}

// Notification
interface SingleNotification {
  type: string;
  id: string;
  unread: boolean;
  date: Date;
  post: {
    id: string;
  };
  user: {
    name: string;
    avatar: string;
    id: string;
  };
  msg?: string;
}

type StatusSlug = 'online' | 'away' | 'invisible' | 'offline';

interface SingleUserStatus {
  color: string;
  title: string;
}

type UserStatus = {
  [key in StatusSlug]: SingleUserStatus;
};

// Modals
interface SearchModalInnerProps {
  navigateTo: NavigateFunction;
}

interface ReactModalInnerProps {
  postId: string;
  navigateTo: NavigateFunction;
}

interface CreatePostModalInnerProps {
  navigateTo: NavigateFunction;
}

interface CommentsModalInnerProps {
  postId: string;
  navigateTo: NavigateFunction;
}

interface EventModalInnerProps {
  event: clickInfo;
}

interface CreateEventModalInnerProps {
  onEventCreated?: (event: CalenderEvent) => void;
  selectInfo: DateSelectArg;
}

interface CropModalInnerProps {
  aspect: number;
  crop: { x: number; y: number };
  image: string;
  zoom: number;
  rotation: number;
  title: string;
  flip?: {
    horizontal?: boolean;
    vertical?: boolean;
  };
  cropShape: 'rect' | 'round';
  onCropComplete: (image: file, base64: string) => void;
}

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

// Post Reacts
type PostReactsLabel = 'like' | 'love' | 'star' | 'wow';

interface SinglePostReact {
  id: string;
  avatar: string;
  username: string;
  fullName: string;
  date: string;
}

interface PostReacts {
  [key in PostReactsLabel]: SinglePostReact[];
}

// Post component
interface PostProps {
  post: Post;
  className?: string;
  full?: boolean;
  isShared?: boolean;
}

interface PostHeaderProps {
  post: Post;
  full?: boolean;
  isShared?: boolean;
}

interface PostBodyProps {
  post: Post;
  full?: boolean;
}

interface PostGallery {
  galleryId: string;
  gallery: string[];
  full?: boolean;
}

// Post core
type PostVisibility = 'public' | 'friends' | 'private';

type PostVariant =
  | 'cover'
  | 'avatar'
  | 'blog'
  | 'gallery'
  | 'video'
  | 'audio'
  | 'youtube'
  | 'group'
  | 'friend'
  | 'share';

type CreatePostVariant = 'blog' | 'gallery' | 'video' | 'audio' | 'youtube';

interface FileTapProps {
  onChange: (file: File) => void;
  icon: IconType;
  file: File | null;
  accept: string;
  label: string;
}

interface YoutubeMetaData {
  title: string;
  author_name: string;
  author_url: string;
  type: string;
  height: number;
  width: number;
  version: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
  html: string;
}

interface PostAssets {
  friend?: Friend;
  group?: Group;
  embedded?: string;
  cover?: string;
  avatar?: string;
  gallery?: string[];
  audio?: string;
  video?: string;
}

interface Post {
  id: string;
  visibility: PostVisibility;
  variant: PostVariant;
  user: {
    avatar: string;
    name: string;
    id: string;
    isVerified: boolean;
  };
  publishAt: Date;
  editAt?: Date;
  isSaved: boolean;
  assets: PostAssets;
  activity?: string;
  body: string;
  comments: {
    count: number;
  };
  share: {
    count: number;
    origin?: Post;
  };
  reacts: {
    count: number;
    labels: PostReactsLabel[];
    react?: PostReactsLabel;
  };
}

type PostReactsConstant = {
  [key in PostReactsLabel]: {
    icon: IconType;
    color: string;
  };
};

type PostVariantConstant = {
  [key in CreatePostVariant]: {
    icon: IconType;
    label: string;
  };
};

type PostVisibilityConstant = {
  [key in PostVisibility]: {
    icon: IconType;
    label: string;
  };
};

interface CreatePostModalInitialFormValue {
  visibility: string;
  variant: string;
  assets: {
    audio?: null | File;
    video?: null | File;
    gallery?: FileWithPath[];
    youtube?: string;
  };
}

interface ModalTapsProp {
  form: UseFormReturnType<CreatePostModalInitialFormValue>;
  icon: IconType;
}

interface PostDropdownProps {
  isSaved: boolean;
  body: string;
  id: string;
}

interface GalleryTapProps {
  files: FileWithPath[];
  onChange: (files: FileWithPath[]) => void;
}

interface PostViewersProps {
  post: Post;
  full?: boolean;
}

// Helmet Hook
type SEOPagesKey =
  | 'homepage'
  | '404'
  | 'bookmarks'
  | 'chat'
  | 'contactUs'
  | 'forgetPassword'
  | 'groups'
  | 'joinUs'
  | 'notification'
  | 'profile'
  | 'setting'
  | 'editorHelp'
  | 'help'
  | 'calenderHelp'
  | 'postDetails'
  | 'events'
  | 'network'
  | 'results';

type SEoPagesProps = {
  [key in SEOPagesKey]: {
    title: string;
    description: string;
    keywords: string[];
  };
};

// Contact Us Page
interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

// Event Page
interface CalenderEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  info: string;
  timeText?: string;
}

// Join Us Page
interface JoinUsProps {
  toggleTap: (value?: React.SetStateAction<string>) => void;
  onFormSubmit: (data: any) => void;
}

// Messenger Page
interface SingleMessageProps {
  me: boolean;
  msg: string;
  date: Date;
  read: boolean;
}

// Setting page
interface SettingTapProps {
  isLoading: boolean;
  onFormSubmit: (hasChanges: boolean, values: any) => void;
}

// Setting - Hobbies tap
type HobbiesMockData = 'musics' | 'tvShows' | 'books' | 'movies' | 'activities';

type HobbiesMockDataState = {
  [key in HobbiesMockData]: { value: string; label: string }[];
};

// Setting - Basic info tap
interface BasicInfoFormInitValues {
  username: string;
  avatar: File | string;
  cover: File | string;
}

// Demo
interface SitemapItem {
  img: string;
  url: string;
  label: string;
}
