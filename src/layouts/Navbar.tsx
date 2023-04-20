import { Box, Navbar, ScrollArea } from '@mantine/core';
import { MainLinks } from './_mainLinks';
import { User } from './_user';

function Nav(props: { opened: boolean }) {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
        <Box py='md'>
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
        </Box>
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
export default Nav;
