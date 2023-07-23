import {
  Anchor,
  Badge,
  Center,
  Divider,
  Input,
  Loader,
  ScrollArea,
} from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { MdSearchOff } from 'react-icons/md';
import avatar from '../assets/images/default/avatar.png';
import Avatar from '../common/Avatar';
import { uuidv4 } from '../helpers';

function SearchModal(props: ContextModalProps<SearchModalInnerProps>) {
  const { navigateTo } = props.innerProps;

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    setQuery(evt.target.value);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Input
        icon={<BiSearchAlt className='text-xl' />}
        variant='unstyled'
        placeholder='Search...'
        value={query}
        rightSection={isLoading && <Loader size='xs' />}
        onChange={onInputChange}
        data-autofocus
      />

      <Divider my='sm' />

      {false ? (
        <Center h={200}>
          <div className='text-center text-gray-400'>
            <MdSearchOff className='text-4xl' />
            <p className='m-0'>Nothing found...</p>
          </div>
        </Center>
      ) : (
        <ScrollArea h={400} offsetScrollbars>
          {Array(10)
            .fill(0)
            .map(() => (
              <Anchor
                onClick={() => navigateTo(`/profile/${1}`)}
                className='flex gap-5 items-center hover:bg-gray-100 transition p-3 cursor-pointer my-2 hover:no-underline'
                key={uuidv4()}
              >
                <Avatar sm alt='avatar' src={avatar} />
                <div className=''>
                  <h4 className='m-0'>Mohammed Taysser</h4>
                  <h5 className='text-gray-500 font-normal m-0'>
                    @mohammed-taysser
                  </h5>
                </div>
                <Badge className='mx-auto' color='teal'>
                  multi-friend
                </Badge>
                <div className='text-gray-500 ml-auto'>
                  <div className='flex items-center gap-1'>
                    <FiUsers className='text-lg' />
                    <small>123</small>
                  </div>
                </div>
              </Anchor>
            ))}
        </ScrollArea>
      )}
      <div className='text-gray-600 mt-3'>
        Looking for more Results, got to{' '}
        <Anchor onClick={() => navigateTo(`/results?query=${query}`)}>
          Results
        </Anchor>
        .
      </div>
    </>
  );
}

export default SearchModal;
