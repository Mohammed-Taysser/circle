import {
  Burger,
  Header,
  Input,
  Kbd,
  MediaQuery,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { BiSearchAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Logo from './navbar/Logo';
import UserDropdown from './navbar/UserDropdown';

function Navbar(props: NavbarProps) {
  const theme = useMantineTheme();
  const navigateTo = useNavigate();

  const onSearchInputClick = () =>
    modals.openContextModal({
      modal: 'search',
      title: '',
      innerProps: {
        navigateTo,
      },
      size: 'lg',
      centered: true,
      withCloseButton: false,
      scrollAreaComponent: ScrollArea.Autosize,
      overlayProps: {
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      },
    });

  return (
    <Header height={{ base: 50, md: 70 }} className='px-10'>
      <div className='h-full grid grid-cols-5 items-center'>
        <div className='col-span-1'>
          <Logo />
        </div>

        <div className='col-span-1'>
          <Input
            className='flex-grow'
            icon={<BiSearchAlt />}
            radius='md'
            onClick={onSearchInputClick}
            component='button'
            styles={(theme) => ({
              input: {
                cursor: 'pointer',
                '&:focus-within': {
                  borderColor: theme.colors.gray[4],
                },
              },
            })}
          >
            <div className='text-gray-400 flex justify-between items-center relative top-[-1px]'>
              <>Search</>
              <Kbd className='text-gray-300 text-xs'>/</Kbd>
            </div>
          </Input>
        </div>

        <div className='col-span-2'>
          <div className='flex justify-around items-center'>
            <span>dropdowns</span>
            <span>dropdowns</span>
            <span>dropdowns</span>
          </div>
        </div>
        <div className='col-span-1'>
          <UserDropdown />
        </div>

        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
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
