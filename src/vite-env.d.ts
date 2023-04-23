/// <reference types="react" />
/// <reference types="vite/client" />
/// <reference types="react-icons" />
/// <reference types="@tiptap" />
/// <reference types="@tiptap/react" />
/// <reference types="@tiptap/dropzone" />

// ErrorBoundary
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Post Reacts
type ReactsLabel = 'like' | 'love' | 'star' | 'wow';

interface SingleReact {
  id: string;
  avatar: string;
  username: string;
  fullName: string;
  date: string;
}

interface Reacts {
  [key in ReactsLabel]: SingleReact[];
}

interface ReactContextDefaultProps {
  reacts: Reacts;
  setReacts: (reacts: Reacts) => void;
  modal: {
    opened: boolean;
    open: () => void;
    close: () => void;
  };
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

// Avatar returned by API
interface AvatarDB {
  avatar: string;
  name: string;
  id: string;
}

// Post
type PostType =
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
  type: PostType;
  gallery: string[];
  user: AvatarDB;
  publishAt: Date;
  body: string;
  picture: string;
  plyrUrl: string;
  mapUrl: string;
  comments: PostComment[];
  reacts: {
    count: number;
    reacts: Reacts;
  };
  group: Group | null;
  friend: Friend | null;
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

// Comment
interface CommentProps {
  comments: PostComment[];
  className?: string;
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
