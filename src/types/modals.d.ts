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
  onEventCreated?: (event: UserEvent) => void;
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
