interface Post extends BaseEntity {
  visibility: PostVisibility;
  variant: PostVariant;
  user: {
    avatar: string;
    firstName: string;
    lastName: string;
    _id: string;
    isVerified: boolean;
  };
  publishAt: Date;
  editAt?: Date;
  isSaved: boolean;
  assets: PostAssets[];
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

interface PostFormFields {
  user: string;
  variant: PostVariant;
  body: string;
  visibility: PostVisibility;
}

interface PostEditablePayload {
  user: string;
  visibility: PostVisibility;
  variant: PostVariant;
  body: string;
}

// Post Reacts
type PostReactsLabel = 'like' | 'love' | 'star' | 'wow';

interface SinglePostReact {
  _id: string;
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
  type:
    | 'friend'
    | 'group'
    | 'cover'
    | 'avatar'
    | 'gallery'
    | 'video'
    | 'audio'
    | 'youtube';
  url?: string; // Used for media assets (cover, avatar, gallery, video, audio, youtube)
  refId?: string | User | Group; // Used for relational assets (friend, group), populated by the API
  refModel?: 'User' | 'Group'; // Specifies the referenced model (if applicable)
  metadata?: {
    width?: number;
    height?: number;
    format?: string;
    size?: number;
    duration?: number; // Only for audio/video assets
  };
}

type PostReactsConstant = {
  [key in PostReactsLabel]: {
    icon: IconType;
    color: string;
  };
};

type PostVariantConstant = {
  [key in PostVariant]: {
    icon: IconType;
    color: string;
    label: string;
  };
};

type PostVisibilityConstant = {
  [key in PostVisibility]: {
    icon: IconType;
    label: string;
    color: string;
  };
};
