import { Group, ThemeIcon } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../../constants/layout';

function Navigation() {
  const cls = (props: { isActive: boolean }) =>
    `my-1 block text-gray-500 no-underline text-base py-2 px-4 mx-2 border-l-4 border-0 border-solid transition rounded ${
      props.isActive
        ? 'border-l-aurora bg-slate-50'
        : 'border-l-transparent hover:border-l-aurora hover:bg-slate-50'
    }`;

  return (
    <>
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
    </>
  );
}

export default Navigation;
