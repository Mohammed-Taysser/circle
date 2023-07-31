import { Center, Pagination, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { BsBookmarks, BsSortUpAlt } from 'react-icons/bs';
import { TbTimelineEventText } from 'react-icons/tb';
import Banner from '../../common/Banner';
import Post from '../../common/Post';
import Skeleton from '../../common/Skeleton';
import { POSTS } from '../../constants/dummy';
import Async from '../../containers/Async';
import useHelmet from '../../hooks/useHelmet';

function Bookmarks() {
  useHelmet('bookmarks');
  const posts = Math.random() < 0.5 ? [] : POSTS.filter((post) => post.isSaved);

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
        title='Bookmarks'
        subtitle={`Bookmarks: ${posts.length}`}
        icon={BsBookmarks}
      />
      <Async {...state} skeleton={<Skeleton variant='post' repeat={6} />}>
        {posts.length ? (
          <>
            <div className='shadow-nice flex justify-between mb-10 p-5 bg-white'>
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
                      filter: value ?? 'updates',
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
            <div className={`my-10 `}>
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </div>
            <div className='shadow-nice p-5 flex justify-center my-10 bg-white'>
              <Pagination value={activePage} onChange={setPage} total={10} />
            </div>
          </>
        ) : (
          <div className='shadow-nice p-4 bg-white rounded'>
            <Center h={200}>
              <div className='text-center text-gray-400'>
                <TbTimelineEventText className='text-4xl' />
                <p className='m-0'>Not Bookmarks yet</p>
              </div>
            </Center>
          </div>
        )}
      </Async>
    </>
  );
}

export default Bookmarks;
