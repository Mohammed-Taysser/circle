import { Center, Loader } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import routes from '../core/Routes';

function Router() {
  return (
    <RouterProvider
      router={routes}
      fallbackElement={
        <Center h={200}>
          <Loader color='teal' size='xl' variant='dots' />
        </Center>
      }
    />
  );
}

export default Router;
