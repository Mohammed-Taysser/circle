import { Avatar, Divider } from '@mantine/core';

function Badge(props: { badge: Badge; className?: string }) {
  return (
    <div
      className={`nice-shadow p-7 text-center bg-white rounded ${props.className}`}
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

export default Badge;
