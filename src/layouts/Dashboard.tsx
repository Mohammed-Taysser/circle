import { AppShell, useMantineTheme } from '@mantine/core';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SuspenseLoading from '../common/SuspenseLoading';
import DashboardHeader from './dashboard/Header.dashboard';
import DashboardNavbar from './dashboard/Navbar.dashboard';

function Dashboard() {
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
        <DashboardHeader
          isHeaderOpen={isHeaderOpen}
          setIsHeaderOpen={setIsHeaderOpen}
        />
      } // Props conflict names from mantine itself
      header={
        <DashboardNavbar
          isHeaderOpen={isHeaderOpen}
          setIsHeaderOpen={setIsHeaderOpen}
        />
      } // Props conflict names from mantine itself
    >
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}

export default Dashboard;
