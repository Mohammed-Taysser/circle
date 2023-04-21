import { Avatar, Divider } from '@mantine/core';
import { uuidv4 } from '../../helpers';

function Badges(props: { badges: Badge[]; msg?: string }) {
  return (
    <div className='lg:grid grid-cols-3 gap-4'>
      {props.badges.map((badge) => (
        <div
          className='nice-shadow p-7 text-center bg-white rounded'
          key={uuidv4()}
        >
          <Avatar src={badge.picture} size='lg' className='mx-auto' />
          <h3 className='my-4'>{badge.label}</h3>
          <p className='text-gray-400 text-sm'>{badge.msg}</p>
          <h5 className='mb-4 mt-10'>{props.msg}</h5>
          <Divider
            my='xs'
            labelPosition='center'
            label={
              <>
                <Avatar.Group spacing='sm'>
                  {badge.users.slice(0, 5).map((user) => (
                    <Avatar
                      key={user.id}
                      radius='xl'
                      src={user.avatar}
                      alt={user.name + ' avatar'}
                    />
                  ))}

                  <Avatar color='' radius='xl'>
                    +{badge.users.length}
                  </Avatar>
                </Avatar.Group>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}

Badges.defaultProp = {
  badges: [],
  msg: 'People who have earned this',
};

export default Badges;
