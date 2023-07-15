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

import { notifications } from '@mantine/notifications';
import { FiUserCheck, FiUserMinus, FiUserPlus, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/default/avatar.png';
import { uuidv4 } from '../../helpers';

const NOTIFICATION = [
  {
    type: 'request',
    id: 1,
    user: {
      name: 'Mohammed Taysser',
      avatar,
      id: 1,
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'request',
    id: 2,
    user: {
      name: 'Tony Stevens',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar56-sm.webp',
      id: 1,
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'accepted',
    id: 3,
    user: {
      name: 'Tamara Romanoff',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar55-sm.webp',
      id: 1,
    },
  },
  {
    type: 'request',
    id: 4,
    user: {
      name: 'Mary Jane Stark',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar57-sm.webp',
      id: 1,
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'accepted',
    id: 5,
    user: {
      name: 'Stagg Clothing',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar58-sm.webp',
      id: 1,
    },
  },
  {
    type: 'accepted',
    id: 6,
    user: {
      name: 'Jake Parker',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
      id: 1,
    },
  },
  {
    type: 'request',
    id: 7,
    user: {
      name: 'Elaine Dreyfuss',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar61-sm.webp',
      id: 1,
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'accepted',
    id: 8,
    user: {
      name: 'Aalaa Kamal',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar59-sm.webp',
      id: 1,
    },
  },
];

function FriendsDropdown() {
  const onRequestBtnClick = (requestName: string) => {
    const notificationId = uuidv4();

    notifications.show({
      id: notificationId,
      title: `${requestName}ing mohammed taysser request...`,
      message: `Hey there, ${requestName}ing mohammed taysser request in progress`,
      loading: true,
      withCloseButton: false,
      color: '',
      autoClose: false,
    });

    setTimeout(() => {
      notifications.update({
        id: notificationId,
        title: `Successfully saved`,
        message: `Hey there, successfully ${requestName}ing mohammed taysser request!`,
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  return (
    <Popover width={500} position='bottom' withArrow>
      <Popover.Target>
        <UnstyledButton>
          <Indicator color='orange' label={12} size={16}>
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              size='xl'
              radius='lg'
              color='orange'
            >
              <FiUsers className='text-2xl' />
            </ThemeIcon>
          </Indicator>
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown className='shadow-nice border-0'>
        <Text color='dimmed' size='xs' mb={10} weight={500}>
          Friends Requests
        </Text>

        <ScrollArea.Autosize mah={300} type='auto' offsetScrollbars>
          <Flex direction='column' wrap='wrap' gap={20}>
            {NOTIFICATION.map((request) => (
              <Flex
                align='center'
                justify='space-between'
                gap={10}
                key={request.id}
                className='hover:bg-gray-50 p-4 duration-200 rounded'
              >
                <Link to={`/profile/${request.user.id}`}>
                  <Avatar
                    src={request.user.avatar}
                    radius='xl'
                    alt={request.user.name}
                  />
                </Link>

                <Flex
                  align='center'
                  justify='space-between'
                  className='flex-1'
                  gap={10}
                >
                  <Link
                    to={`/profile/${request.user.id}`}
                    className='flex-1 no-underline text-black'
                  >
                    <Text size='sm' weight={500}>
                      {request.user.name}
                    </Text>

                    <Text color='dimmed' size='xs'>
                      {request.type === 'request'
                        ? request?.msg
                        : `You and ${request.user.name} just became friends. Write on it's wall.`}
                    </Text>
                  </Link>
                  {request.type === 'request' ? (
                    <Flex gap={10}>
                      <ThemeIcon
                        className='cursor-pointer'
                        onClick={() => onRequestBtnClick('Accept')}
                        variant='light'
                        size='lg'
                        color='grape'
                      >
                        <FiUserPlus className='text-lg' />
                      </ThemeIcon>
                      <ThemeIcon
                        className='cursor-pointer'
                        onClick={() => onRequestBtnClick('Dismiss')}
                        variant='light'
                        size='lg'
                        color='red'
                      >
                        <FiUserMinus className='text-lg' />
                      </ThemeIcon>
                    </Flex>
                  ) : (
                    <ThemeIcon
                      className='cursor-pointer'
                      variant='light'
                      size='lg'
                      color=''
                    >
                      <FiUserCheck className='text-lg' />
                    </ThemeIcon>
                  )}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </ScrollArea.Autosize>

        <Button
          component={Link}
          to='/network'
          variant='light'
          color='orange'
          fullWidth
          uppercase
        >
          Check all your network
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}

export default FriendsDropdown;
