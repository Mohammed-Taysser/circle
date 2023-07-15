import { Burger, Header, MediaQuery, useMantineTheme } from '@mantine/core';
import FriendsDropdown from './navbar/FriendsDropdown';
import Logo from './navbar/Logo';
import MessagesDropdown from './navbar/MessagesDropdown';
import NotificationDropdown from './navbar/NotificationDropdown';
import SearchInput from './navbar/SearchInput';
import UserDropdown from './navbar/UserDropdown';

function Navbar(props: NavbarProps) {
  const theme = useMantineTheme();

  return (
    <Header height={{ base: 50, md: 70 }} className='px-10'>
      <div className='h-full grid grid-cols-5 items-center'>
        <div className='col-span-1'>
          <Logo />
        </div>

        <div className='col-span-1'>
          <SearchInput />
        </div>

        <div className='col-span-2'>
          <div className='flex justify-center gap-10 items-center'>
            <FriendsDropdown />
            <MessagesDropdown />
            <NotificationDropdown />
          </div>
        </div>

        <div className='col-span-1'>
          <UserDropdown />
        </div>

        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((prev) => !prev)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>
      </div>
    </Header>
  );
}

export default Navbar;
