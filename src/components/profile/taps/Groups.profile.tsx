import { Center, SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsColumnsGap } from 'react-icons/bs';
import Group from '../../../common/Group';
import { GROUPS } from '../../../constants/dummy';

function GroupsProfile() {
  const [view, setView] = useState('list');

  return (
    <>
      <div className='nice-shadow flex justify-end p-4'>
        <SegmentedControl
          color='teal'
          value={view}
          onChange={setView}
          data={[
            {
              value: 'col',
              label: (
                <Center>
                  <BsColumnsGap />
                </Center>
              ),
            },
            {
              value: 'list',
              label: (
                <Center>
                  <AiOutlineUnorderedList />
                </Center>
              ),
            },
          ]}
        />
      </div>
      <div
        className={`my-10 ${
          view === 'col' ? 'md:grid md:grid-cols-2 lg:grid-cols-3 gap-4' : ''
        } `}
      >
        {GROUPS.map((group) => (
          <Group colView={view === 'col'} group={group} key={group.id} />
        ))}
      </div>
    </>
  );
}

export default GroupsProfile;
