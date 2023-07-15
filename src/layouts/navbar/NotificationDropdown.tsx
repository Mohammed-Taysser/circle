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
import { LiaShareSolid } from 'react-icons/lia';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { TbMessage2Bolt } from 'react-icons/tb';
import { TfiShare } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/default/avatar.png';
import { timeToX } from '../../helpers';

const NOTIFICATION = [
  {
    type: 'comment',
    id: 1,
    unread: true,
    date: new Date(),
    user: {
      name: 'Mohammed Taysser',
      avatar,
      id: 1,
    },
    msg: `commented on your profile avatar`,
  },
  {
    type: 'replay',
    id: 2,
    unread: true,
    date: new Date(),
    user: {
      name: 'Tony Stevens',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar56-sm.webp',
      id: 1,
    },
    msg: `replay on your comment`,
  },
  {
    type: 'share',
    id: 3,
    unread: false,
    date: new Date(),
    user: {
      name: 'Tamara Romanoff',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar55-sm.webp',
      id: 1,
    },
    msg: `share a new status`,
  },
  {
    type: 'replay',
    id: 4,
    unread: true,
    date: new Date(),
    user: {
      name: 'Mary Jane Stark',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar57-sm.webp',
      id: 1,
    },
    msg: `replay on your comment`,
  },
  {
    type: 'comment',
    id: 5,
    unread: false,
    date: new Date(),
    user: {
      name: 'Stagg Clothing',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar58-sm.webp',
      id: 1,
    },
    msg: `commented on your profile cover`,
  },
  {
    type: 'share',
    id: 6,
    unread: false,
    date: new Date(),
    user: {
      name: 'Jake Parker',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar60-sm.webp',
      id: 1,
    },
    msg: `share a new image`,
  },
  {
    type: 'replay',
    id: 7,
    unread: true,
    date: new Date(),
    user: {
      name: 'Elaine Dreyfuss',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar61-sm.webp',
      id: 1,
    },
    msg: `replay on your comment`,
  },
  {
    type: 'share',
    id: 8,
    unread: false,
    date: new Date(),
    user: {
      name: 'Aalaa Kamal',
      avatar: 'https://html.crumina.net/html-olympus/img/avatar65-sm.webp',
      id: 1,
    },
    msg: `share a new status`,
  },
];

const RequestIcon = (props: { type: string }) => {
  switch (props.type) {
    case 'share':
      return <TfiShare />;
    case 'replay':
      return <LiaShareSolid />;
    case 'comment':
      return <TbMessage2Bolt />;

    default:
      return <MdOutlineNotificationsActive />;
  }
};

const getIconColor = (type: string) => {
  switch (type) {
    case 'share':
      return 'pink';
    case 'replay':
      return 'violet';
    case 'comment':
      return 'orange';

    default:
      return 'teal';
  }
};

function NotificationDropdown() {
  return (
    <Popover width={500} position='bottom' withArrow>
      <Popover.Target>
        <UnstyledButton>
          <Indicator color='teal' label={101} size={16}>
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              size='xl'
              color='teal'
              radius='lg'
            >
              <MdOutlineNotificationsActive className='text-2xl' />
            </ThemeIcon>
          </Indicator>
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown className='shadow-nice border-0'>
        <Text color='dimmed' size='xs' mb={10} weight={500}>
          Notification
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
                    className={`flex-1 ${request.unread ? '' : 'opacity-50'}`}
                  >
                    <div className={`flex-1 `}>
                      <Text
                        size='sm'
                        weight={500}
                        color='dark'
                        display='inline-block'
                      >
                        {request.user.name}
                      </Text>{' '}
                      <Text
                        color='dimmed'
                        size='xs'
                        display='inline-block'
                        weight={request.unread ? 800 : 500}
                      >
                        {request.msg}
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
                    <ThemeIcon
                      variant='light'
                      size='lg'
                      color={getIconColor(request.type)}
                      radius='lg'
                    >
                      <RequestIcon type={request.type} />
                    </ThemeIcon>
                  </Flex>
                </Flex>
              </Link>
            ))}
          </Flex>
        </ScrollArea.Autosize>

        <Button
          component={Link}
          to='/notifications'
          variant='light'
          color='teal'
          fullWidth
          uppercase
        >
          Check all your Notification
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}

export default NotificationDropdown;
