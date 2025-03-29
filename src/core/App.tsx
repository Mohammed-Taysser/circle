import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { Suspense, useState } from 'react';
import SuspenseLoading from '../common/SuspenseLoading';
import NewsletterDialog from '../dialogs/Newsletter';
import MantineProvider from '../providers/Mantine';
import ModalsProvider from '../providers/Modals';
import RouterProvider from '../providers/Router';
import { ReduxProvider } from '../redux/store';
import ErrorBoundary from './ErrorBoundary';
import LocalStorage from './localStorage';

import './i18n';

import '../assets/scss/app.scss';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    LocalStorage.get<ColorScheme>('theme') ?? 'light'
  );

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ErrorBoundary>
      <ReduxProvider>
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
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;
