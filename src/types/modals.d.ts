interface SearchModalInnerProps {
  navigateTo: NavigateFunction;
}

interface ReactModalInnerProps {
  postId: string;
}

interface CommentsModalInnerProps {
  postId: string;
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
