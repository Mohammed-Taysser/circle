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
import { TbMessage2Bolt } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { MESSAGES } from '../../constants/dummy';
import { timeToX } from '../../helpers';
import { formateNumber } from '../../helpers/millify';

function MessagesDropdown() {
  const theme = useMantineTheme();
  const isSmallerThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const isSmallerScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
            label={<span className='text-[10px]'>{formateNumber(71)}</span>}
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

        <ScrollArea.Autosize
          mah={300}
          type='auto'
          offsetScrollbars
          placeholder=''
        >
          <Flex direction='column' wrap='wrap' gap={5}>
            {MESSAGES.map((request) => (
              <Link
                to={`/message/${request.user.id}`}
                key={request.id}
                className='no-underline'
              >
                <Flex
                  align='center'
                  justify='space-between'
                  gap={15}
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
                  <Avatar
                    src={request.user.avatar}
                    sm
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
                      <Text
                        size='sm'
                        weight={500}
                        className='text-black dark:text-white'
                      >
                        {request.user.name}
                      </Text>

                      <Text
                        color='dimmed'
                        size='xs'
                        lineClamp={1}
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
