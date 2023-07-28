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
import { useMediaQuery } from '@mantine/hooks';
import { TbMessage2Bolt } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { MESSAGES } from '../../constants/layout';
import { timeToX } from '../../helpers';

function MessagesDropdown() {
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
            color='grape'
            label={<span className='text-[10px]'>71</span>}
            size={16}
          >
            <ThemeIcon
              className='cursor-pointer'
              variant='light'
              size={isSmallerThanMd ? 'xl' : 'lg'}
              color='grape'
              radius='lg'
            >
              <TbMessage2Bolt className='text-lg md:text-2xl' />
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
            {MESSAGES.map((request) => (
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
          to='/message'
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
