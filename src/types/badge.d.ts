interface Badge {
  _id: string;
  picture: string;
  label: string;
  msg: string;
  earnedAt: Date;
  users: {
    avatar: string;
    name: string;
    _id: string;
  }[];
}
