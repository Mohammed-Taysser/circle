import { Avatar, Divider } from '@mantine/core';

/**
 * Badge component
 *
 * Renders a badge component with an avatar, label, message, and a list of users who have earned the badge.
 *
 * @usage
 * - use `badge` The badge object with properties for picture, label, message, and users.
 * - use `className` An optional string for customizing the CSS class of the component.
 */
function Badge(props: { badge: Badge; className?: string }) {
  return (
    <div
      className={`shadow-nice p-7 text-center bg-white rounded ${props.className}`}
    >
      <Avatar src={props.badge.picture} size='lg' className='mx-auto' />
      <h3 className='my-4'>{props.badge.label}</h3>
      <p className='text-gray-400 text-sm'>{props.badge.msg}</p>
      <h5 className='mb-4 text-gray-400 mt-10'>People who have earned this</h5>
      <Divider
        my='xs'
        labelPosition='center'
        label={
          <>
            <Avatar.Group spacing='sm'>
              {props.badge.users.slice(0, 5).map((user) => (
                <Avatar
                  key={user.id}
                  radius='xl'
                  src={user.avatar}
                  alt={user.name + ' avatar'}
                />
              ))}

              <Avatar color='' radius='xl'>
                +{props.badge.users.length}
              </Avatar>
            </Avatar.Group>
          </>
        }
      />
    </div>
  );
}

Badge.defaultProps = {
  className: '',
  badge: null,
};

export default Badge;
