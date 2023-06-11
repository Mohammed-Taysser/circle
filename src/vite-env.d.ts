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

// Avatar component
interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  sm?: boolean;
}

// Group component
interface GroupProps {
  colView?: boolean;
  group: Group;
  className?: string;
}

// Post Component
interface PostProps {
  post: Post;
  className?: string;
  full?: boolean;
}

// Post Body
interface PostBodyProps {
  post: Post;
  full?: boolean;
}

// Post Gallery
interface PostGallery {
  galleryId: string;
  gallery: string[];
  full?: boolean;
}

// Avatar returned by API
interface AvatarDB {
  avatar: string;
  name: string;
  id: string;
}

// Post
type PostVariant =
  | 'UPDATE_COVER'
  | 'UPDATE_AVATAR'
  | 'POST_UPDATE'
  | 'POST_GALLERY'
  | 'POST_VIDEO'
  | 'POST_AUDIO'
  | 'POST_MAP'
  | 'JOIN_GROUP'
  | 'NEW_FRIEND';

interface PostComment {
  id: string;
  user: AvatarDB;
  body: string;
  publishAt: Date;
}

interface Post {
  id: string;
  variant: PostVariant;
  gallery: string[];
  user: AvatarDB;
  publishAt: Date;
  body: string;
  utilsUrl?: string;
  isSaved?: boolean;
  comments: number;
  reacts: {
    count: number;
    reacts: PostReacts; // TODO: remove reacts as it get by API
  };
  utils?: Group | Friend;
}

interface PostViewerObject {
  [key in PostVariant]: {
    msg: string;
    component: (props: PostBodyProps) => JSX.Element;
  };
}

// Group
type GroupVisibility = 'private' | 'public';

interface Group {
  id: string;
  picture: string;
  cover: string;
  visibility: GroupVisibility;
  title: string;
  users: AvatarDB[];
  posts: number;
}

// Badge
interface Badge {
  id: string;
  label: string;
  picture: string;
  msg: string;
  earnedAt: Date;
  users: AvatarDB[];
}

// Member
interface Member {
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

// Banner
interface BannerProps {
  title: string;
  subtitle: string;
  className?: string;
  icon: IconType;
}

// InfoBanner
interface InfoBannerProp {
  cover: string;
  avatar: string;
  name: string;
  username: string;
  extraInfo: ReactElement;
  verified: boolean;
}

// Taps Props
interface SingleTap {
  label: string;
  path: string;
  icon: IconType;
}

interface TapsProps {
  taps: SingleTap[];
  className?: string;
}

// Async
interface AsyncProps {
  loading: boolean;
  fulfilled: boolean;
  error: any;
  skeleton: ReactElement;
  children: ReactElement;
}

// Editor
interface EditorProps {
  editor?: Editor;
  dev?: boolean;
  className?: string;
}

// Dropzone
interface DropzoneProps {
  onDrop: (files: FileWithPath[]) => void;
  files: FileWithPath[];
  onError?: ReactEventHandler<HTMLDivElement> | undefined;
  accept?: string[] | Accept;
  icon?: IconType;
  title?: string;
  subtitle?: string;
  className?: string;
  preview?: boolean;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
}

// PlyrViewer
interface PlyrViewerProps {
  src: string;
  MediaType: 'video' | 'audio';
  title?: string;
}

type PlyrViewerProvider = 'youtube' | 'vimeo' | undefined;

// Create post
interface CreatePostTaps {
  activeStep: number;
  postVariant: string;
  setPostVariant: Dispatch<SetStateAction<string>>;
  editor: Editor | null;
  postAssets: {
    files?: FileWithPath[];
  };
  setPostAssets: React.Dispatch<React.SetStateAction>;
}

interface CreatePostVariantProps {
  postVariant: string;
  setPostVariant: Dispatch<SetStateAction<string>>;
  postTypeInstance: Post;
}

interface CreatePostDropzoneProps {
  files: FileWithPath[];
  onDrop: (files: FileWithPath[]) => void;
  maxSize?: number;
  accept: string[];
  maxFiles: number;
  onError: Dispatch<SetStateAction<null>>;
  icon: IconType;
  title: string;
  subtitle: string;
  preview: boolean;
  multiple: boolean;
}

interface CreatePostDropzoneTapProps {
  files: FileWithPath[];
  onDrop: (files: FileWithPath[]) => void;
  onError: Dispatch<SetStateAction<null>>;
}

// Navbar
interface NavbarProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

// React Modal Props
type ReactModalProps = ContextModalProps<{ reacts: PostReacts }>;

// Event Modal Props
type EventModalProps = ContextModalProps<{ event: EventImpl }>;

// Group container props
interface GroupContainerProps {
  title: string;
  onSearchFormSubmit: (values: { query: string }) => void;
  groups: Group[];
  icon: IconType;
}

// Search modal props
type SearchModalProps = ContextModalProps<{ navigateTo: NavigateFunction }>;

// Register
interface JoinUsProps {
  toggleTap: (value?: React.SetStateAction<string>) => void;
  onFormSubmit: (data: any) => void;
}

// Contact us
interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}
