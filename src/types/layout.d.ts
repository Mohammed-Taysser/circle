interface NavbarProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeaderProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  msg: string;
}
