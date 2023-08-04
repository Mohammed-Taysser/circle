import { Link } from 'react-router-dom';
import Avatar from './Avatar';

/**
 * Group component
 * @usage

- use `className` allows adding additional classes to the group card.
- use `colView`  determines whether the group card should be displayed in a column view or not.
- use `group` object field that contains the group information
 */
function Group(props: GroupProps) {
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
          <Avatar
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

      <ul className='statistics'>
        <li>
          <span className='statistics-number'>{props.group.posts}</span>
          <span className='statistics-text'>Posts</span>
        </li>
        <li>
          <span className='statistics-number'>{props.group.users}</span>
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
