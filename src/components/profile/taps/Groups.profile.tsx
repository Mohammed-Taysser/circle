import { Center, SegmentedControl } from '@mantine/core';
import { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsColumnsGap } from 'react-icons/bs';
import Group from '../../../common/Group';
import Skeleton from '../../../common/Skeleton';
import { GROUPS } from '../../../constants/dummy';
import Async from '../../../containers/Async';

function GroupsProfile() {
  const [view, setView] = useState('list');
  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  useEffect(() => {
    const TimerId = setTimeout(() => {
      setState({
        loading: false,
        fulfilled: true,
        error: null,
      });
    }, 2000);
    return () => {
      clearTimeout(TimerId);
    };
  }, []);

  return (
    <Async {...state} skeleton={<Skeleton.post repeat={6} />}>
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
    </Async>
  );
}

export default GroupsProfile;
