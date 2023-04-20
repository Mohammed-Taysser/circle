import {
  Affix,
  AppShell,
  Aside,
  Button,
  MediaQuery,
  Text,
  Transition,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';
import { TfiAngleDoubleUp } from 'react-icons/tfi';
import Head from './Header';
import Nav from './Navbar';
import Side from './Aside';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

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
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={<Nav opened={opened} />}
      aside={<Side />}
      header={<Head opened={opened} setOpened={setOpened} />}
    >
      <Suspense fallback={`layout-loading`}>
      <Outlet />
      </Suspense>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition='slide-up' mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<TfiAngleDoubleUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            ></Button>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
}
