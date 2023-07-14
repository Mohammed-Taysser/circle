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
  user: {
    avatar: string;
    name: string;
    id: string;
  };
  body: string;
  publishAt: Date;
}

interface Post {
  id: string;
  variant: PostVariant;
  gallery: string[];
  user: {
    avatar: string;
    name: string;
    id: string;
  };
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

type ReactModalProps = ContextModalProps<{ reacts: PostReacts }>;
