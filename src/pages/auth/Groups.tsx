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
import { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { BsColumnsGap, BsMegaphoneFill, BsSortUpAlt } from 'react-icons/bs';
import Banner from '../../common/Banner';
import Group from '../../common/Group';
import { GROUPS } from '../../constants/dummy';

function Groups() {
  useDocumentTitle('Mantine | Groups');
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

  return (
    <>
      <Banner
        title='All Groups'
        subtitle={`All Groups: ${GROUPS.length}`}
        icon={BsMegaphoneFill}
      />
      <div className='nice-shadow flex justify-between p-5'>
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
      <div
        className={`my-10 ${
          view === 'col' ? 'md:grid md:grid-cols-2 lg:grid-cols-3 gap-4' : ''
        } `}
      >
        {GROUPS.map((group) => (
          <Group colView={view === 'col'} group={group} key={group.id} />
        ))}
        <div className='nice-shadow p-5 flex justify-center my-10'>
          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </div>
    </>
  );
}

export default Groups;
