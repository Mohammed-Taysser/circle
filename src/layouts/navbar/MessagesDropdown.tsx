import {
  Avatar,
  Button,
  Flex,
  Indicator,
  Popover,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';

import { TbMessage2Bolt } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/default/avatar.png';
import { timeToX } from '../../helpers';

const NOTIFICATION = [
  {
    unread: true,
    id: 1,
    date: new Date(),
    user: {
      name: 'Mohammed Taysser',
      avatar,
      id: 1,
    },
    msg: `Hi James! It's Diana, I just wanted to let you know that we have to reschedule`,
  },
  {
    unread: true,
    id: 2,
    date: new Date(),
    user: {
      name: 'Tony Stevens',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar56-sm.webp',
      id: 1,
    },
    msg: `Great, I'll see you tomorrow!.`,
  },
  {
    unread: false,
    id: 3,
    date: new Date(),
    user: {
      name: 'Tamara Romanoff',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar55-sm.webp',
      id: 1,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
  {
    unread: true,
    id: 4,
    date: new Date(),
    user: {
      name: 'Mary Jane Stark',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar57-sm.webp',
      id: 1,
    },
    msg: 'Yeah! Seems fine by me!',
  },
  {
    unread: false,
    id: 5,
    date: new Date(),
    user: {
      name: 'Stagg Clothing',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar58-sm.webp',
      id: 1,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
  {
    unread: false,
    id: 6,
    date: new Date(),
    user: {
      name: 'Jake Parker',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
      id: 1,
    },
    msg: `Hi James! It's Diana, I just wanted to let you know that we have to reschedule`,
  },
  {
    unread: true,
    id: 7,
    date: new Date(),
    user: {
      name: 'Elaine Dreyfuss',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar61-sm.webp',
      id: 1,
    },
    msg: '4 Friends in Common',
  },
  {
    unread: false,
    id: 8,
    date: new Date(),
    user: {
      name: 'Aalaa Kamal',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar59-sm.webp',
      id: 1,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
];

function MessagesDropdown() {
  return (
    <Popover width={500} position='bottom' withArrow>
      <Popover.Target>
        <UnstyledButton>
          <Indicator color='grape' label={71} size={16}>
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              size='xl'
              color='grape'
              radius='lg'
            >
              <TbMessage2Bolt className='text-2xl' />
            </ThemeIcon>
          </Indicator>
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown className='shadow-nice border-0'>
        <Text color='dimmed' size='xs' mb={10} weight={500}>
          Messenger
        </Text>

        <ScrollArea.Autosize mah={300} type='auto' offsetScrollbars>
          <Flex direction='column' wrap='wrap' gap={20}>
            {NOTIFICATION.map((request) => (
              <Link
                to={`/message/${request.user.id}`}
                key={request.id}
                className='no-underline'
              >
                <Flex
                  align='center'
                  justify='space-between'
                  gap={10}
                  className='hover:bg-gray-50 p-4 duration-200 rounded'
                >
                  <Avatar
                    src={request.user.avatar}
                    radius='xl'
                    alt={request.user.name}
                  />

                  <Flex
                    align='center'
                    justify='space-between'
                    gap={10}
                    className='flex-1'
                  >
                    <div
                      className={`flex-1 ${request.unread ? '' : 'opacity-50'}`}
                    >
                      <Text size='sm' weight={500} color='dark'>
                        {request.user.name}
                      </Text>

                      <Text
                        color='dimmed'
                        size='xs'
                        weight={request.unread ? 800 : 500}
                      >
                        {request.msg.length > 80
                          ? request.msg.slice(0, 80) + ' ...'
                          : request.msg}
                      </Text>

                      <Text
                        color='dimmed'
                        size='xs'
                        mt={5}
                        weight={request.unread ? 800 : 500}
                      >
                        {timeToX(request.date)}
                      </Text>
                    </div>
                    {request.unread && (
                      <Indicator color='grape' size={10} processing>
                        <></>
                      </Indicator>
                    )}
                  </Flex>
                </Flex>
              </Link>
            ))}
          </Flex>
        </ScrollArea.Autosize>

        <Button
          component={Link}
          to='/messenger'
          variant='light'
          color='grape'
          fullWidth
          uppercase
        >
          Check all your messages
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}

export default MessagesDropdown;
