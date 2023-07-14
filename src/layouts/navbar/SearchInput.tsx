import { Input, Kbd } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { BiSearchAlt } from 'react-icons/bi';
import useSearchInput from '../../hooks/useSearchInput';

function SearchInput() {
  const { onSearchInputClick } = useSearchInput();

  useHotkeys([
    ['/', onSearchInputClick],
    ['ctrl+K', onSearchInputClick],
    ['ctrl+F', onSearchInputClick],
    ['ctrl+P', onSearchInputClick],
  ]);

  return (
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
  );
}

export default SearchInput;
