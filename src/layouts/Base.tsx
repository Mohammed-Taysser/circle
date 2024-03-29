import { AppShell, useMantineTheme } from '@mantine/core';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SuspenseLoading from '../common/SuspenseLoading';
import Aside from './Aside';
import Header from './Header';
import Navbar from './Navbar';

/**
 * Base Layout
 * @usage

- use `minimal` to hide sidebar
 */
function Base(props: { minimal?: boolean }) {
  const theme = useMantineTheme();
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint='md'
      asideOffsetBreakpoint='lg'
      navbar={
        <Header isHeaderOpen={isHeaderOpen} setIsHeaderOpen={setIsHeaderOpen} />
      } // Props conflict names from mantine itself
      aside={props.minimal ? undefined : <Aside />}
      header={
        <Navbar isHeaderOpen={isHeaderOpen} setIsHeaderOpen={setIsHeaderOpen} />
      } // Props conflict names from mantine itself
    >
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}

export default Base;
