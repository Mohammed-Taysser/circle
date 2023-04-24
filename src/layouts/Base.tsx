import { AppShell, useMantineTheme } from '@mantine/core';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Skeleton from '../common/Skeleton';
import Aside from './Aside';
import BackToTop from './BackToTop';
import Header from './Header';
import Navbar from './Navbar';

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
      navbar={<Header opened={opened} />} // Props conflict names from mantine itself
      aside={props.minimal ? undefined : <Aside />}
      header={<Navbar opened={opened} setOpened={setOpened} />} // Props conflict names from mantine itself
    >
      <Suspense fallback={<Skeleton.post repeat={10} />}>
        <Outlet />
        <BackToTop />
      </Suspense>
    </AppShell>
  );
}

export default Base;
