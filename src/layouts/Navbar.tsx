import {
  Burger,
  Header,
  Input,
  Kbd,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { BiSearchAlt } from 'react-icons/bi';
import useSearchInput from '../hooks/useSearchInput';
import Logo from './navbar/Logo';
import UserDropdown from './navbar/UserDropdown';
import { useHotkeys } from '@mantine/hooks';

function Navbar(props: NavbarProps) {
  const theme = useMantineTheme();
  const { onSearchInputClick } = useSearchInput();

  useHotkeys([
    ['/', onSearchInputClick],
    ['ctrl+K', onSearchInputClick],
    ['ctrl+F', onSearchInputClick],
    ['ctrl+P', onSearchInputClick],
  ]);

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
