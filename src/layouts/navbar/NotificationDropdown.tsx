import {
  Button,
  Flex,
  Indicator,
  Popover,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SingleNotification from '../../components/notification/SingleNotification';
import { NOTIFICATIONS } from '../../constants/layout';

function NotificationDropdown() {
  const isSmallerThanMd = useMediaQuery('(min-width: 56.25em)');
  const isSmallerScreen = useMediaQuery('(max-width: 36.125em)');

  return (
    <Popover
      width={isSmallerScreen ? '100vw' : 500}
      position='bottom'
      withArrow
    >
      <Popover.Target>
        <UnstyledButton>
          <Indicator
            color='teal'
            label={<span className='text-[10px]'>101</span>}
            size={16}
          >
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              size={isSmallerThanMd ? 'xl' : 'lg'}
              color='teal'
              radius='lg'
            >
              <MdOutlineNotificationsActive className='text-lg md:text-2xl' />
            </ThemeIcon>
          </Indicator>
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown className='shadow-nice border-0'>
        <Text color='dimmed' size='xs' mb={10} weight={500}>
          Notification
        </Text>

        <ScrollArea.Autosize mah={300} type='auto' offsetScrollbars>
          <Flex direction='column' wrap='wrap' gap={10}>
            {NOTIFICATIONS.map((request) => (
              <SingleNotification request={request} key={request.id} />
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
