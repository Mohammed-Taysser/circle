import {
  Center,
  ColorScheme,
  ColorSchemeProvider,
  Loader,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import CommentsModal from '../modal/Comments.modal';
import EventsModal from '../modal/Events.modal';
import ReactsModal from '../modal/Reacts.modal';
import SearchModal from '../modal/Search.modal';
import ErrorBoundary from './ErrorBoundary';
import routes from './Routes';

import '../assets/scss/app.scss';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ErrorBoundary>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            primaryColor: 'teal',
            colorScheme,
          }}
        >
          <>
            <Notifications position='top-right' zIndex={2077} />
            <ModalsProvider
              modals={{
                reacts: ReactsModal,
                comments: CommentsModal,
                search: SearchModal,
                events: EventsModal,
              }}
            >
              <Suspense
                fallback={
                  <Center h={200}>
                    <Loader color='teal' size='xl' variant='dots' />
                  </Center>
                }
              >
                <RouterProvider
                  router={routes}
                  fallbackElement={
                    <Center h={200}>
                      <Loader color='teal' size='xl' variant='dots' />
                    </Center>
                  }
                />
              </Suspense>
            </ModalsProvider>
          </>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  );
}

export default App;
