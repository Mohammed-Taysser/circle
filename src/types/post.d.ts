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

type ReactModalProps = ContextModalProps<{ postId: string }>;

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
  | 'update'
  | 'gallery'
  | 'video'
  | 'audio'
  | 'embedded'
  | 'group'
  | 'friend'
  | 'pdf'
  | 'share';

interface PostComment {
  id: string;
  user: {
    avatar: string;
    name: string;
    id: string;
  };
  body: string;
  publishAt: Date;
}

type CommentsModalProps = ContextModalProps<{ postId: string }>;

interface PostAssets {
  friend?: Friend;
  group?: Group;
  embedded?: string;
  cover?: string;
  avatar?: string;
  gallery?: string[];
  audios?: string[];
  videos?: string[];
  pdf?: string;
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

interface PostDropdownProps {
  isSaved: boolean;
  body: string;
  id: string;
}

interface PostViewersProps {
  post: Post;
  full?: boolean;
}
