import { AppShell, Center, Loader, useMantineTheme } from '@mantine/core';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
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
  const [opened, setOpened] = useState(false);

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
      navbar={<Header opened={opened} setOpened={setOpened} />} // Props conflict names from mantine itself
      aside={props.minimal ? undefined : <Aside />}
      header={<Navbar opened={opened} setOpened={setOpened} />} // Props conflict names from mantine itself
    >
      <Suspense
        fallback={
          <Center h={200}>
            <Loader color='teal' size='xl' variant='dots' />
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </AppShell>
  );
}

export default Base;
