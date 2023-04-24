import {
  Pagination,
  Select
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { BsSortUpAlt } from 'react-icons/bs';
import { VscFeedback } from 'react-icons/vsc';
import Banner from '../../common/Banner';
import Post from '../../common/Post';
import Skeleton from '../../common/Skeleton';
import { POSTS } from '../../constants/dummy';
import Async from '../../containers/Async';

function YourGroups() {
  useDocumentTitle('Mantine | Saved Posts');
  const [activePage, setPage] = useState(1);

  const searchForm = useForm({
    initialValues: {
      filter: 'updates',
    },
  });

  const onFormSearchFormSubmit = (values: { filter: string }) => {
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
        title='Saved Posts'
        subtitle={`Saved Posts: ${POSTS.timeline.length}`}
        icon={VscFeedback}
      />
      <div className='nice-shadow flex justify-between mb-10 p-5 bg-white'>
        <form
          className='flex items-center flex-1'
          onSubmit={searchForm.onSubmit(onFormSearchFormSubmit)}
        >
          <Select
            className='ml-auto inline-block'
            icon={<BsSortUpAlt />}
            placeholder='Filter By'
            clearable
            {...searchForm.getInputProps('sort')}
            onChange={(value) => {
              searchForm.setValues({
                filter: value || 'updates',
              });
            }}
            data={[
              { value: 'updates', label: 'Updates' },
              { value: 'photos', label: 'Photos' },
              { value: 'videos', label: 'Videos' },
              { value: 'audios', label: 'Audios' },
            ]}
          />
        </form>
      </div>
      <Async {...state} skeleton={<Skeleton.post repeat={6} />}>
        <div className={`my-10 `}>
          {POSTS.timeline.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
        <div className='nice-shadow p-5 flex justify-center my-10 bg-white'>
          <Pagination value={activePage} onChange={setPage} total={10} />
        </div>
      </Async>
    </>
  );
}

export default YourGroups;
