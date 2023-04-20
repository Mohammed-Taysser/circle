import { Avatar, Divider } from '@mantine/core';
import { BADGES } from '../../../constants/dummy';
import { uuidv4 } from '../../../helpers';

function BadgesProfile() {
  return (
    <div className='md:grid grid-cols-3 gap-4 mb-10'>
      {BADGES.map((badge) => (
        <div className='nice-shadow p-7 text-center rounded' key={uuidv4()}>
          <Avatar src={badge.picture} size='lg' className='mx-auto' />
          <h3 className='my-4'>{badge.label}</h3>
          <p className='text-gray-400 text-sm'>{badge.msg}</p>
          <h5 className='mb-4 mt-10'>People who have earned this</h5>
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

export default BadgesProfile;
