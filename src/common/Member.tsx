import { Avatar } from '@mantine/core';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { timeToX } from '../helpers';
import AvatarA from './Avatar';

/**
 * Member component
 * @usage

- use `className` to add classes to Member wrapper
- use `user` to pass Member info

 * @returns {React.ReactElement}
 */
function Friend(props: { user: Member; className: string }): ReactElement {
  if (!props.user) {
    return <></>;
  }

  return (
    <div className={`friend ${props.className}`}>
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
            className='text-black text-xl no-underline transition hover:text-aurora'
          >
            {props.user.name}
          </Link>
          <div className='text-gray-400 mb-1 text-sm'>
            @{props.user.username}
          </div>
          <div className='text-gray-500 text-sm mb-4'>
            Since: {timeToX(props.user.joinAt)}
          </div>
          <Avatar.Group spacing='sm'>
            {props.user.badges.map((badge) => (
              <Avatar
                key={badge.id}
                radius='xl'
                src={badge.picture}
                alt={badge.label}
              />
            ))}
          </Avatar.Group>
        </div>
      </div>
    </div>
  );
}

Friend.defaultProps = {
  user: null,
  className: '',
};

export default Friend;
