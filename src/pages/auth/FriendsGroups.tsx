import {
  Button,
  Center,
  Input,
  Pagination,
  SegmentedControl,
  Select,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { BsColumnsGap, BsSortUpAlt } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import Banner from '../../common/Banner';
import Group from '../../common/Group';
import Skeleton from '../../common/Skeleton';
import { GROUPS } from '../../constants/dummy';
import Async from '../../containers/Async';

function FriendsGroups() {
  useDocumentTitle('Mantine | Friends Groups');
  const [view, setView] = useState('list');
  const [activePage, setPage] = useState(1);

  const searchForm = useForm({
    initialValues: {
      query: '',
      sort: 'alphabetical',
    },
  });

  const onFSearchFormSubmit = (values: { query: string }) => {
    console.log(values);
  };
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
    <>
      <Banner
        title='Friends Groups'
        subtitle={`Friends Groups: ${GROUPS.length}`}
        icon={FiUsers}
      />
      <div className='nice-shadow flex justify-between mb-10 p-5 bg-white'>
        <form
          className='flex items-center flex-1'
          onSubmit={searchForm.onSubmit(onFSearchFormSubmit)}
        >
          <Input
            icon={<BiSearchAlt />}
            placeholder='Search Groups'
            {...searchForm.getInputProps('query')}
          />
          <Button variant='light' color='teal' className='mx-3' type='submit'>
            Search
          </Button>
          <Select
            className='ml-auto inline-block'
            icon={<BsSortUpAlt />}
            placeholder='Order By'
            clearable
            {...searchForm.getInputProps('sort')}
            onChange={(value) => {
              searchForm.setValues({
                sort: value || 'alphabetical',
              });
            }}
            data={[
              { value: 'alphabetical', label: 'Alphabetical' },
              { value: 'new', label: 'Newly Created' },
              { value: 'member', label: 'Most Members' },
            ]}
          />
        </form>
        <SegmentedControl
          className='ml-5'
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
      <Async {...state} skeleton={<Skeleton.post repeat={6} />}>
        <div
          className={`my-10 ${
            view === 'col' ? 'md:grid md:grid-cols-2 lg:grid-cols-3 gap-4' : ''
          } `}
        >
          {GROUPS.map((group) => (
            <Group colView={view === 'col'} group={group} key={group.id} />
          ))}
        </div>
        <div className='nice-shadow p-5 flex justify-center my-10 bg-white'>
          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </Async>
    </>
  );
}

export default FriendsGroups;
