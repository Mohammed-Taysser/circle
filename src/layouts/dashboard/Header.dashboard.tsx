import { Navbar, useMantineTheme } from '@mantine/core';
import DashboardNavigation from './Navigation.dashboard';

function DashboardHeader(props: HeaderProps) {
  const theme = useMantineTheme();

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='md'
      width={{ base: 300, [theme.breakpoints.xxl]: 400 }}
      className={`border-0 shadow-nice z-[100] duration-500 ${
        props.isHeaderOpen ? '' : 'left-[-100%] md:left-0'
      }`}
    >
      <Navbar.Section mx='-xs' className='mb-3'>
        <DashboardNavigation setIsHeaderOpen={props.setIsHeaderOpen} />
      </Navbar.Section>
    </Navbar>
  );
}

export default DashboardHeader;
