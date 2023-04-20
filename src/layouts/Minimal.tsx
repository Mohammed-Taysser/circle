import { AppShell, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Head from './Header';
import Nav from './Navbar';

export default function AppShellDemo() {
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
      navbarOffsetBreakpoint='sm'
      navbar={<Nav opened={opened} />}
      header={<Head opened={opened} setOpened={setOpened} />}
    >
      <Outlet />
    </AppShell>
  );
}
