import { Avatar, Tooltip } from '@mantine/core';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import AvatarA from './Avatar';

/**
 * Group component
 * @usage

- use `className` to add classes to Group wrapper
- use `colView` to change view to column
- use `group` to pass group info

 * @returns {ReactElement}
 */
function Group(props: GroupProps): ReactElement {
  if (!props.group) {
    return <></>;
  }

  return (
    <div
      className={`group ${props.colView ? 'col-view' : ''} ${props.className}`}
    >
      <img
        src={props.group.cover}
        alt={`Group Cover of ${props.group.title}`}
        className='cover'
      />
      <div className='group-info-wrapper items-center relative'>
        <Link to={`/group/${props.group.id}`}>
          <AvatarA
            src={props.group.picture}
            alt={`Group logo of ${props.group.title}`}
          />
        </Link>

        <div className='group-info'>
          <Link
            to={`/group/${props.group.id}`}
            className='text-black text-xl no-underline transition hover:text-aurora'
          >
            {props.group.title}
          </Link>
          <div className='text-gray-400 text-sm'>
            <span className='capitalize'>{props.group.visibility}</span> Group
          </div>
        </div>
      </div>
      <div className='group-avatar flex justify-center my-5'>
        <Avatar.Group spacing='sm'>
          {props.group.users.slice(0, 4).map((user) => (
            <Tooltip label={user.name} key={user.id}>
              <Avatar
                component={Link}
                to={`/profile/${user.id}`}
                src={user.avatar}
                alt={user.name + ' avatar'}
                radius='xl'
              />
            </Tooltip>
          ))}

          {props.group.users.length > 5 && (
            <Avatar color='' radius='xl'>
              +
            </Avatar>
          )}
        </Avatar.Group>
      </div>

      <ul className='statistics'>
        <li>
          <span className='statistics-number'>{props.group.posts}</span>
          <span className='statistics-text'>Posts</span>
        </li>
        <li>
          <span className='statistics-number'>{props.group.users.length}</span>
          <span className='statistics-text'>Member</span>
        </li>
      </ul>
    </div>
  );
}

Group.defaultProps = {
  colView: false,
  className: '',
  group: null,
};

export default Group;
