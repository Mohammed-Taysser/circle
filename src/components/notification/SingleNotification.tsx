import { Avatar, Flex, Text, ThemeIcon } from '@mantine/core';
import { LiaShareSolid } from 'react-icons/lia';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { TbMessage2Bolt } from 'react-icons/tb';
import { TfiShare } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { timeToX } from '../../helpers';

function SingleNotification(props: { request: SingleNotification }) {
  const { request } = props;

  return (
    <Link to={`/post/${request.post.id}`} className='no-underline'>
      <Flex
        align='center'
        justify='space-between'
        gap={10}
        className={`p-4 duration-200 rounded ${
          request.unread ? 'bg-gray-100' : 'hover:bg-gray-100'
        } `}
      >
        <Avatar src={request.user.avatar} radius='xl' alt={request.user.name} />

        <Flex
          align='center'
          justify='space-between'
          gap={10}
          className={`flex-1 ${request.unread ? '' : 'opacity-50'}`}
        >
          <div className={`flex-1 `}>
            <Text size='sm' weight={500} color='dark' display='inline-block'>
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
            color={getNotificationIconColor(request.type)}
            radius='lg'
          >
            <NotificationRequestIcon type={request.type} />
          </ThemeIcon>
        </Flex>
      </Flex>
    </Link>
  );
}

const getNotificationIconColor = (type: string) => {
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

const NotificationRequestIcon = (props: { type: string }) => {
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

export default SingleNotification;
