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

type StatusSlug = 'online' | 'away' | 'invisible' | 'offline';

interface SingleUserStatus {
  color: string;
  title: string;
}

type UserStatus = {
  [key in StatusSlug]: SingleUserStatus;
};

interface SingleContactFriend {
  status: StatusSlug;
  name: string;
  img: string;
  id: string;
  msg:string
}
