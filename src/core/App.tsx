import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useState } from 'react';
import MantineProvider from '../providers/Mantine';
import ModalsProvider from '../providers/Modals';
import RouterProvider from '../providers/Router';
import ErrorBoundary from './ErrorBoundary';

import '../assets/scss/app.scss';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ErrorBoundary>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider colorScheme={colorScheme}>
          <>
            <Notifications position='top-right' zIndex={2077} />
            <ModalsProvider>
              <RouterProvider />
            </ModalsProvider>
          </>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  );
}

export default App;
