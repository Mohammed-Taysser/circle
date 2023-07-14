interface SingleTap {
  label: string;
  path: string;
  icon: IconType;
}

interface TapsProps {
  taps: SingleTap[];
  className?: string;
}
