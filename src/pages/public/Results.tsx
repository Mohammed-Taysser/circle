import { Button, Input, Select, Tabs } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import noResults from '../../assets/images/background/search/no-results.svg';
import Banner from '../../common/Banner';
import Groups from '../../components/search/Groups.results';
import Users from '../../components/search/Users.results';
import { FRIENDS, GROUPS } from '../../constants/dummy';
import Async from '../../containers/Async';
import useHelmet from '../../hooks/useHelmet';

function Results() {
  useHelmet('results');
  const [searchParams, setSearchParams] = useSearchParams();
  const results = {
    users: Math.random() > 0.5 ? FRIENDS : [],
    groups: Math.random() < 0.5 ? GROUPS : [],
  };

  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  const searchForm = useForm({
    initialValues: {
      query: searchParams.get('query') ?? '',
      filter: searchParams.get('filter') ?? 'all',
    },
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

  const onSearchFormSubmit = (values: { query: string; filter: string }) => {
    console.log(values);
    setSearchParams({ query: values.query ?? '', filter: values.filter });
  };

  return (
    <Async {...state}>
      <Banner
        title='Results'
        subtitle={`Results: ${Object.keys(results).length}`}
        icon={AiOutlineFileSearch}
      />

      <div className='shadow-nice p-5 bg-white'>
        <form
          className='flex md:items-center gap-5 flex-col md:flex-row'
          onSubmit={searchForm.onSubmit(onSearchFormSubmit)}
        >
          <Input
            icon={<BiSearchAlt />}
            name='search'
            placeholder={`Search ${searchForm.values.filter}`}
            {...searchForm.getInputProps('query')}
          />

          <Select
            icon={<BsFilter />}
            placeholder='Filter By'
            clearable
            {...searchForm.getInputProps('filter')}
            onChange={(value) => {
              searchForm.setValues({
                filter: value ?? 'all',
              });
            }}
            data={[
              { value: 'all', label: 'All' },
              { value: 'users', label: 'Users' },
              { value: 'groups', label: 'Groups' },
            ]}
          />

          <Button type='submit'>Search</Button>
        </form>
      </div>

      {results.groups.length & results.users.length ? (
        <Tabs value={searchForm.values.filter}>
          <Tabs.Panel value='all'>
            <Users users={results.users} />
            <Groups groups={results.groups} />
          </Tabs.Panel>

          <Tabs.Panel value='users'>
            <Users users={results.users} />
          </Tabs.Panel>

          <Tabs.Panel value='groups'>
            <Groups groups={results.groups} />
          </Tabs.Panel>
        </Tabs>
      ) : (
        <div className='p-32 shadow-nice bg-white my-5 text-center'>
          <img
            src={noResults}
            alt='no result found'
            className='max-w-full md:w-96'
          />
          <div className='text-gray-500'>No results found</div>
        </div>
      )}
    </Async>
  );
}

export default Results;
