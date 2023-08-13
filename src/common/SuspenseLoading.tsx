import { Center, Loader } from '@mantine/core';

/**
 * display a loading state while waiting for data to load.
 */
function SuspenseLoading() {
  return (
    <Center h={200}>
      <Loader size='xl' variant='dots' />
    </Center>
  );
}

export default SuspenseLoading;
