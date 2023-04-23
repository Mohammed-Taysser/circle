import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ReactsProvider } from '../context/Reacts';
import ErrorBoundary from './ErrorBoundary';
import router from './Routes';

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
          <ReactsProvider>
            <Suspense fallback={'loading'}>
              <Notifications position='top-right' zIndex={2077} />
              <ModalsProvider>
                <RouterProvider router={router} fallbackElement={'loading'} />
              </ModalsProvider>
            </Suspense>
          </ReactsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  );
}

export default App;
