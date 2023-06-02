import { Anchor, Badge, Input, Loader } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { Link, useSearchParams } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import Group from '../../common/Group';
import Skeleton from '../../common/Skeleton';
import { GROUPS } from '../../constants/dummy';
import Async from '../../containers/Async';
import { uuidv4 } from '../../helpers';

import search from '../../assets/images/background/search.svg';
import avatar from '../../assets/images/default/avatar.png';

function Results() {
  useDocumentTitle('Circle | Search Results');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);

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

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);

    setSearchParams({ query: evt.target.value });

    setTimeout(() => {
      setIsSearching(false);
    }, 3000);
  };

  return (
    <Async {...state} skeleton={<Skeleton.post repeat={6} />}>
      <div className='p-4 shadow-nice bg-white mb-5'>
        <Input
          icon={<BiSearchAlt className='text-xl' />}
          placeholder='Search...'
          value={searchParams.get('query') ?? ''}
          rightSection={isSearching && <Loader size='xs' />}
          onChange={onInputChange}
          data-autofocus
        />
      </div>

      <div className='p-32 shadow-nice bg-white mb-5 text-center'>
        <img src={search} alt='no result found' className='max-w-full' />
        <div className='text-gray-500'>No results found</div>
      </div>

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
    </Async>
  );
}

export default Results;
