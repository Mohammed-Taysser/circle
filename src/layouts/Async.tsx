import { Alert, Center, Loader } from '@mantine/core';
import { MdErrorOutline } from 'react-icons/md';

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

Async.defaultValue = {
  loading: true,
  fulfilled: false,
  error: null,
  children: (
    <Center h={200}>
      <Loader color='teal' size='xl' variant='dots' />
    </Center>
  ),
  skeleton: null,
};

export default Async;
