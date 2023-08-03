import { Flex, Indicator, Text, Tooltip } from '@mantine/core';
import { FiUser } from 'react-icons/fi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { USER_STATUS } from '../../constants/layout';

function ContactInfo(props:any) { // TODO: fix after add dummy data
  const { user } = props;

  return (
    <Flex
      className='h-20 mb-4 bg-white shadow-nice px-4'
      justify='space-between'
      align='center'
    >
      <Flex gap={15} align='center'>
        <Link to='/message' title='back to contacts'>
          <MdOutlineArrowBackIosNew className='text-xl text-gray-400' />
        </Link>
        <Link to={`/profile/${user.id}`} className='no-underline'>
          <Flex align='center' justify='space-between' gap={15}>
            <Indicator
              color={USER_STATUS[user.status as StatusSlug].color}
              offset={7}
              processing
              withBorder
              position='bottom-end'
            >
              <Avatar src={user.user.avatar} alt={user.user.name} sm />
            </Indicator>

            <div>
              <Text size='sm' weight={500} color='dark'>
                {user.user.name}
              </Text>

              <Text color='dimmed' size='xs' weight={user.unread ? 800 : 500}>
                {user.status}
              </Text>
            </div>
          </Flex>
        </Link>
      </Flex>

      <Tooltip label='Profile'>
        <Link
          to={`/profile/${user.id}`}
          className='w-8 h-8 flex justify-center items-center bg-aurora text-white rounded-full'
        >
          <FiUser className='text-lg' />
        </Link>
      </Tooltip>
    </Flex>
  );
}

export default ContactInfo;
