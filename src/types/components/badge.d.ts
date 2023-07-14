interface Badge {
  id: string;
  label: string;
  picture: string;
  msg: string;
  earnedAt: Date;
  users: {
    avatar: string;
    name: string;
    id: string;
  }[];
}

interface BadgeProps {
  badges: Badge[];
  msg?: string;
}
