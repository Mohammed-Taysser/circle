import { Anchor, Badge } from '@mantine/core';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import Group from '../../common/Group';
import { GROUPS } from '../../constants/dummy';
import { uuidv4 } from '../../helpers';

import avatar from '../../assets/images/default/avatar.png';

function Results() {
  return (
    <>
      <div className='p-4 shadow-nice bg-white'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Users
        </h2>
        {Array(10)
          .fill(0)
          .map(() => (
            <Anchor
              key={uuidv4()}
              to={`/profile/${1}`}
              component={Link}
              className='flex gap-5 items-center hover:bg-gray-100 transition p-3 cursor-pointer my-2 hover:no-underline rounded-sm'
            >
              <Avatar sm alt='avatar' src={avatar} />
              <div>
                <h4 className='m-0'>Mohammed Taysser</h4>
                <h5 className='text-gray-500 font-normal m-0'>
                  @mohammed-taysser
                </h5>
              </div>
              <Badge className='mx-auto' color='teal'>
                multi-friend
              </Badge>
              <div className='text-gray-500 ml-auto'>
                <div className='flex items-center gap-1'>
                  <FiUsers className='text-lg' />
                  <small>123</small>
                </div>
              </div>
            </Anchor>
          ))}
      </div>

      <div className='p-4 shadow-nice bg-white my-5'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold'>
          Group
        </h2>

        {GROUPS.map((group) => (
          <Group group={group} key={group.id} />
        ))}
      </div>
    </>
  );
}

export default Results;
