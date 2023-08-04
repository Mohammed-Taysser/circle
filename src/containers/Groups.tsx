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
import { BiSearchAlt, BiUserVoice } from 'react-icons/bi';
import { BsColumnsGap, BsSortUpAlt } from 'react-icons/bs';
import Banner from '../common/Banner';
import Group from '../common/Group';
import { formateNumber } from '../helpers/millify';

function Groups(props: GroupContainerProps) {
  useDocumentTitle(`Circle | Groups | ${props.title}`);
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
        subtitle={`${props.title}: ${formateNumber(props.groups.length)}`}
        icon={props.icon}
      />

      <div className='shadow-nice md:flex justify-between p-5 bg-white'>
        <form
          className='flex md:items-center flex-1 gap-5 flex-col md:flex-row'
          onSubmit={searchForm.onSubmit(props.onSearchFormSubmit)}
        >
          <Input
            icon={<BiSearchAlt />}
            name='search'
            placeholder='Search Groups'
            {...searchForm.getInputProps('query')}
          />

          <Select
            icon={<BsSortUpAlt />}
            placeholder='Order By'
            clearable
            {...searchForm.getInputProps('sort')}
            onChange={(value) => {
              searchForm.setValues({
                sort: value ?? 'alphabetical',
              });
            }}
            data={[
              { value: 'alphabetical', label: 'Alphabetical' },
              { value: 'new', label: 'Newly Created' },
              { value: 'member', label: 'Most Members' },
            ]}
          />

          <Button type='submit'>Search</Button>
        </form>

        <div className='hidden md:block justify-end md:ml-3'>
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
      </div>
      {props.groups.length ? (
        <div
          className={`my-10 ${
            view === 'col' ? 'md:grid md:grid-cols-2 lg:grid-cols-3 gap-4' : ''
          } `}
        >
          {props.groups.map((group) => (
            <Group colView={view === 'col'} group={group} key={group.id} />
          ))}
        </div>
      ) : (
        <div className='shadow-nice p-4 bg-white rounded my-10'>
          <Center h={200}>
            <div className='text-center text-gray-400'>
              <BiUserVoice className='text-4xl' />
              <p className='m-0'>No groups uploaded yet</p>
            </div>
          </Center>
        </div>
      )}

      {props.groups.length > 0 && (
        <div className='shadow-nice p-5 flex justify-center my-10 bg-white'>
          <Pagination
            value={activePage}
            onChange={setPage}
            total={props.groups.length}
          />
        </div>
      )}
    </>
  );
}

export default Groups;
