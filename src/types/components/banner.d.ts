interface BannerProps {
  title: string;
  subtitle: string;
  className?: string;
  icon: IconType;
}

interface InfoBannerProp {
  cover: string;
  avatar: string;
  name: string;
  username: string;
  extraInfo: ReactElement;
  verified: boolean;
  className?: string;
}
