import { Alert } from '@mantine/core';
import { MdErrorOutline } from 'react-icons/md';
import Skeleton from '../common/Skeleton';

/**
 * Async container
 * @usage

- use `loading` show skeleton loading
- use `fulfilled` to show children instead of loading skeleton
- use `error` to show error alert
- use `skeleton` to change skeleton loading
 */
function Async(props: AsyncProps) {
  if (props.loading) {
    return props.skeleton;
  } else if (props.error) {
    return (
      <Alert
        icon={<MdErrorOutline className='text-lg' />}
        title='Bummer!'
        color='red'
      >
        {JSON.stringify(props.error, null, 2)}
      </Alert>
    );
  } else if (props.fulfilled) {
    return props.children;
  } else {
    return (
      <Alert
        icon={<MdErrorOutline className='text-lg' />}
        title='Unknown Error!'
        color='red'
      >
        Something terrible happened!
      </Alert>
    );
  }
}

Async.defaultProps = {
  loading: true,
  fulfilled: false,
  error: null,
  children: <>Async data</>,
  skeleton: <Skeleton />,
};

export default Async;
