import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import NewsletterDialog from '../dialogs/Newsletter';
import MantineProvider from '../providers/Mantine';
import ModalsProvider from '../providers/Modals';
import RouterProvider from '../providers/Router';
import ErrorBoundary from './ErrorBoundary';

import { Suspense } from 'react';
import '../assets/scss/app.scss';
import SuspenseLoading from '../common/SuspenseLoading';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'circle-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ErrorBoundary>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider colorScheme={colorScheme}>
          <>
            <NewsletterDialog />
            <Notifications position='top-right' zIndex={2077} />
            <ModalsProvider>
              <Suspense fallback={<SuspenseLoading />}>
                <RouterProvider />
              </Suspense>
            </ModalsProvider>
          </>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  );
}

export default App;
