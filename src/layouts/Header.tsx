import { Group, Navbar, ScrollArea, ThemeIcon } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../constants/layout';

function Header(props: { opened: boolean }) {
  const cls = (props: { isActive: boolean }) =>
    `my-1 block text-gray-500 no-underline text-base py-2 px-4 mx-2 border-r-4 border-0 border-solid transition ${
      props.isActive
        ? 'border-r-aurora'
        : 'border-r-transparent hover:border-r-aurora'
    }`;

  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
      zIndex={101}
    >
      <Navbar.Section grow component={ScrollArea} mx='-xs'>
        {HEADER_LINKS.map((link) => (
          <NavLink to={link.path} key={link.path} className={cls}>
            <Group>
              <ThemeIcon color={link.color} variant='light'>
                <link.icon />
              </ThemeIcon>
              <p className='m-0'>{link.label}</p>
            </Group>
          </NavLink>
        ))}
      </Navbar.Section>
    </Navbar>
  );
}

export default Header;
