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
  users: {
    avatar: string;
    name: string;
    id: string;
  }[];
  posts: number;
}

interface GroupContainerProps {
  title: string;
  onSearchFormSubmit: (values: { query: string }) => void;
  groups: Group[];
  icon: IconType;
}
