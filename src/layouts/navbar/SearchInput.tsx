import { Flex, Input, Kbd, ThemeIcon } from '@mantine/core';
import { useHotkeys, useMediaQuery } from '@mantine/hooks';
import { BiSearchAlt } from 'react-icons/bi';
import useSearchInput from '../../hooks/useSearchInput';

function SearchInput() {
  const { onSearchInputClick } = useSearchInput();
  const isSmallerThanMd = useMediaQuery('(min-width: 56.25em)');

  useHotkeys([
    ['/', onSearchInputClick],
    ['ctrl+K', onSearchInputClick],
    ['ctrl+F', onSearchInputClick],
    ['ctrl+P', onSearchInputClick],
  ]);

  return (
    <>
      <Input
        className='flex-grow hidden lg:block'
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

      <Flex justify='center' className='lg:hidden'>
        <ThemeIcon
          className='cursor-pointer'
          variant='light'
          onClick={onSearchInputClick}
          size={isSmallerThanMd ? 'xl' : 'lg'}
          color='indigo'
          radius='lg'
        >
          <BiSearchAlt className='text-lg md:text-2xl' />
        </ThemeIcon>
      </Flex>
    </>
  );
}

export default SearchInput;
