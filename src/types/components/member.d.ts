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
