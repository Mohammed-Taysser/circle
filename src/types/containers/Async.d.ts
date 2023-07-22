interface AsyncProps {
  loading: boolean;
  fulfilled: boolean;
  error: any;
  skeleton?: ReactElement;
  children: ReactElement;
}
