import { Flex, Indicator, ScrollArea, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { MESSAGES, USER_STATUS } from '../../constants/layout';

function ContactFriends() {
  return (
    <>
      <ScrollArea.Autosize type='auto' offsetScrollbars>
        <Flex direction='column' wrap='wrap' gap={0}>
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
                className='hover:bg-gray-50 p-3 duration-200 rounded'
              >
                <Indicator
                  color={USER_STATUS[request.status as StatusSlug].color}
                  offset={7}
                  processing
                  withBorder
                  position='bottom-end'
                >
                  <Avatar
                    src={request.user.avatar}
                    alt={request.user.name}
                    sm
                  />
                </Indicator>

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
                      {request.msg.length > 30
                        ? request.msg.slice(0, 30) + ' ...'
                        : request.msg}
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
