import {
  Button,
  Flex,
  Indicator,
  Popover,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { FiUserCheck, FiUserMinus, FiUserPlus, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { NOTIFICATION } from '../../constants/dummy';
import { uuidv4 } from '../../helpers';
import { formateNumber } from '../../helpers/millify';

function FriendsDropdown() {
  const theme = useMantineTheme();
  const isSmallerThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const isSmallerScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
    <Popover
      width={isSmallerScreen ? '100vw' : 500}
      position='bottom'
      withArrow
    >
      <Popover.Target>
        <UnstyledButton>
          <Indicator
            color='orange'
            label={<span className='text-[10px]'>{formateNumber(12)}</span>}
            size={16}
          >
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              size={isSmallerThanMd ? 'xl' : 'lg'}
              radius='lg'
              color='orange'
            >
              <FiUsers className='text-lg md:text-2xl' />
            </ThemeIcon>
          </Indicator>
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown className='shadow-nice border-0'>
        <Text color='dimmed' size='xs' mb={10} weight={500}>
          Friends Requests
        </Text>

        <ScrollArea.Autosize mah={300} type='auto' offsetScrollbars>
          <Flex direction='column' wrap='wrap' gap={5}>
            {NOTIFICATION.map((request) => (
              <Flex
                align='center'
                justify='space-between'
                gap={10}
                key={request.id}
                className='p-3 duration-200 rounded'
                sx={(theme) => ({
                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <Link to={`/profile/${request.user.id}`}>
                  <Avatar
                    src={request.user.avatar}
                    sm
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
                    className='flex-1 no-underline text-black dark:text-white'
                  >
                    <Text size='sm' weight={500}>
                      {request.user.name}
                    </Text>

                    <Text color='dimmed' size='xs' lineClamp={1}>
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
