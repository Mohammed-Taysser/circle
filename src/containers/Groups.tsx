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
import { BsColumnsGap, BsSortUpAlt } from 'react-icons/bs';
import Banner from '../common/Banner';
import Group from '../common/Group';

function Groups(props: GroupContainerProps) {
  useDocumentTitle(`Mantine | Groups | ${props.title}`);
  const [view, setView] = useState('list');
  const [activePage, setPage] = useState(1);

  const searchForm = useForm({
    initialValues: {
      query: '',
      sort: 'alphabetical',
    },
  });

  return (
    <>
      <Banner
        title={props.title}
        subtitle={`${props.title}: ${props.groups.length}`}
        icon={props.icon}
      />
      <div className='nice-shadow flex justify-between p-5 bg-white'>
        <form
          className='flex items-center flex-1'
          onSubmit={searchForm.onSubmit(props.onSearchFormSubmit)}
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
        {props.groups.map((group) => (
          <Group colView={view === 'col'} group={group} key={group.id} />
        ))}
        <div className='nice-shadow p-5 flex justify-center my-10 bg-white'>
          <Pagination
            value={activePage}
            onChange={setPage}
            total={props.groups.length}
          />
        </div>
      </div>
    </>
  );
}

export default Groups;
