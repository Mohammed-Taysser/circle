import {
  Center,
  ColorScheme,
  ColorSchemeProvider,
  Loader,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ReactsProvider } from '../context/Reacts';
import ErrorBoundary from './ErrorBoundary';
import router from './Routes';

import '../assets/scss/app.scss';
import ReactsModal from '../components/ReactsModal';

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
          <ReactsProvider>
            <>
              <Notifications position='top-right' zIndex={2077} />
              <ModalsProvider modals={{ reacts: ReactsModal }}>
                <RouterProvider
                  router={router}
                  fallbackElement={
                    <Center h={200}>
                      <Loader color='teal' size='xl' variant='dots' />
                    </Center>
                  }
                />
              </ModalsProvider>
            </>
          </ReactsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  );
}

export default App;
