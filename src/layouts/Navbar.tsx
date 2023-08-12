import { Burger, Flex, Grid, Header, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import FriendsDropdown from './navbar/FriendsDropdown';
import Logo from './navbar/Logo';
import MessagesDropdown from './navbar/MessagesDropdown';
import NotificationDropdown from './navbar/NotificationDropdown';
import SearchInput from './navbar/SearchInput';
import UserDropdown from './navbar/UserDropdown';

function Navbar(props: NavbarProps) {
  const theme = useMantineTheme();
  const isSmallerScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Header
      height={isSmallerScreen ? 60 : 80}
      className='md:px-10 px-4 border-0 shadow-nice'
    >
      <Grid
        className={`${isSmallerScreen ? 'h-[65px]' : 'h-[80px]'}`}
        align='center'
      >
        <Grid.Col span={2}>
          <Logo />
        </Grid.Col>

        <Grid.Col lg={3} md={2} span={3}>
          <SearchInput />
        </Grid.Col>

        <Grid.Col md={4} span={4}>
          <div className='flex justify-center gap-3 md:gap-10 items-center'>
            <FriendsDropdown />
            <MessagesDropdown />
            <NotificationDropdown />
          </div>
        </Grid.Col>

        <Grid.Col lg={3} md={4} span={3}>
          <UserDropdown className='hidden md:flex' />
          <Flex justify='end' className='md:hidden'>
            <Burger
              opened={props.opened}
              onClick={() => props.setOpened((prev) => !prev)}
              color={theme.colors.gray[6]}
              title='Toggle header'
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Header>
  );
}

export default Navbar;
