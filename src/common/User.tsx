import { Avatar, Badge, Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AvatarA from './Avatar';

/**
 * User component
 * @usage

- use `className` string that represents the CSS class name for the component.
- use `user` object that contains information about the user, such as their name, username, avatar, cover image, and badges.

 */
function User(props: { user: User; className: string }) {
  return (
    <div className={`user ${props.className}`}>
      <img
        src={props.user.cover}
        alt={`Cover of ${props.user.name}`}
        className='cover'
      />

      <div className='flex items-center relative'>
        <Link to={`/profile/${props.user.id}`}>
          <AvatarA
            src={props.user.avatar}
            alt={`Avatar of ${props.user.name}`}
          />
        </Link>

        <div className='mx-12'>
          <Link
            to={`/profile/${props.user.id}`}
            className='text-black text-base md:text-xl no-underline transition hover:text-aurora'
          >
            {props.user.name}
          </Link>

          <div className='text-gray-400 mb-3 text-xs md:text-sm'>
            @{props.user.username}
          </div>

          <Avatar.Group spacing='sm' mb={10}>
            {props.user.badges.map((badge) => (
              <Avatar
                key={badge.id}
                radius='xl'
                src={badge.picture}
                alt={badge.label}
              />
            ))}
          </Avatar.Group>

          <AddFriendBtn />
        </div>
      </div>
    </div>
  );
}

const AddFriendBtn = () => {
  const isFriend = Math.random() > 0.5;
  const isPendingRequest = Math.random() > 0.5;
  const [isLoading, setIsLoading] = useState(false);

  const onAddFriendBtnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully Friend request send',
        message: 'Hey there, an request had been send to mohammed!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  const onUnfriendBtnClick = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size='sm'>
          This action is so important that you are required to confirm it. Are
          you sure to remove friend request for{' '}
          <strong>Mohammed Taysser</strong>
        </Text>
      ),
      labels: { confirm: 'Yes, Leave', cancel: 'Cancel' },
      onConfirm: onUnfriendConfirmBtnClick,
    });
  };

  const onUnfriendConfirmBtnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully remove friend request',
        message:
          'Hey there, you successfully remove friend request for mohammed',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  if (isFriend) {
    return <Badge color='teal'>friend</Badge>;
  } else {
    if (isPendingRequest) {
      return (
        <Button
          variant='light'
          compact
          loading={isLoading}
          onClick={onUnfriendBtnClick}
          leftIcon={<FiUserCheck className='text-lg' />}
        >
          Pending
        </Button>
      );
    }

    return (
      <Button
        variant='default'
        compact
        loading={isLoading}
        onClick={onAddFriendBtnClick}
        leftIcon={<FiUserPlus className='text-lg' />}
      >
        Add Friend
      </Button>
    );
  }
};

User.defaultProps = {
  user: null,
  className: '',
};

export default User;
