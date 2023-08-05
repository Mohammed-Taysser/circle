import {
  Anchor,
  Badge,
  Center,
  Divider,
  Flex,
  Input,
  Loader,
  ScrollArea,
} from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdSearchOff } from 'react-icons/md';
import Avatar from '../common/Avatar';
import { avatar } from '../constants/default';
import { uuidv4 } from '../helpers';
import { NOTIFICATION } from '../constants/dummy';

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

  const onLinkClick = (
    evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string
  ) => {
    evt.preventDefault();
    navigateTo(url);
    props.context.closeModal(props.id);
  };

  return (
    <div>
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
          {NOTIFICATION.map((result) => (
            <Anchor
              onClick={(evt) => onLinkClick(evt, `/profile/${result.user.id}`)}
              className='flex w-full gap-5 items-center transition p-2 my-1 hover:no-underline'
              key={uuidv4()}
              sx={(theme) => ({
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Avatar
                sm
                alt={`${result.user.name} avatar`}
                src={result.user.avatar}
              />
              <Flex
                gap={15}
                className='flex-grow md:items-center'
                justify='space-between'
              >
                <div>
                  <h4 className='m-0 text-sm md:text-base'>
                    {result.user.name}
                  </h4>
                  <h5 className='text-gray-500 text-xs md:text-sm font-normal m-0'>
                    {result.user.name} {/* shout be username */}
                  </h5>
                </div>
                <Badge color='teal'>friend</Badge>
              </Flex>
            </Anchor>
          ))}
        </ScrollArea>
      )}
      <div className='text-gray-600 mt-3'>
        Looking for more Results, got to{' '}
        <Anchor onClick={(evt) => onLinkClick(evt, `/results?query=${query}`)}>
          Results
        </Anchor>
        .
      </div>
    </div>
  );
}

export default SearchModal;
