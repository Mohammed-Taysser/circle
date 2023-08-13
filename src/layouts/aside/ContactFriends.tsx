import { Flex, ScrollArea, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { MESSAGES } from '../../constants/dummy';
import { USER_STATUS } from '../../constants/layout';

function ContactFriends(props: AsideContactsProps) {
  const { setIsAsideOpen } = props;

  return (
    <>
      <ScrollArea.Autosize type='auto' offsetScrollbars>
        <Flex direction='column' wrap='wrap' gap={0}>
          {MESSAGES.map((request) => (
            <Link
              to={`/message/${request.user.id}`}
              key={request.id}
              className='no-underline'
              onClick={() => setIsAsideOpen(false)}
            >
              <Flex
                align='center'
                justify='space-between'
                gap={10}
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
                  alt={request.user.name}
                  status={USER_STATUS[request.status as StatusSlug].color}
                  sm
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
                  </div>
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
      </ScrollArea.Autosize>
    </>
  );
}

export default ContactFriends;
