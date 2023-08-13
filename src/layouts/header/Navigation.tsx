import {
  Group,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../../constants/layout';

function Navigation(props: HeaderNavigationProps) {
  const { setIsHeaderOpen } = props;
  const theme = useMantineTheme();

  const cls = (props: { isActive: boolean }) => {
    let initCls = `block no-underline text-base py-2 px-4 border-l-4 border-0 border-solid transition`;

    if (props.isActive) {
      return initCls + ` border-l-aurora text-aurora`;
    }

    return (
      initCls +
      ` border-l-transparent hover:text-aurora ${
        theme.colorScheme === 'dark' ? 'text-white' : 'text-gray-500'
      } hover:border-l-aurora`
    );
  };

  return (
    <>
      {HEADER_LINKS.map((link) => (
        <UnstyledButton
          className='w-full mx-2 my-1'
          key={link.path}
          sx={(theme) => ({
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <NavLink
            to={link.path}
            className={cls}
            onClick={() => setIsHeaderOpen(false)}
          >
            <Group>
              <ThemeIcon color={link.color} variant='light'>
                <link.icon />
              </ThemeIcon>
              <p className='m-0'>{link.label}</p>
            </Group>
          </NavLink>
        </UnstyledButton>
      ))}
    </>
  );
}

export default Navigation;
