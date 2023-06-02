import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../common/Post';
import Skeleton from '../../common/Skeleton';
import { POSTS } from '../../constants/dummy';
import Async from '../../containers/Async';

function PostDetails() {
  useDocumentTitle('Circle | Post Details');
  const { postId = '' } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  useEffect(() => {
    setPost(POSTS.find((post) => post.id === postId) || null);

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
  }, [postId]);

  return (
    <Async {...state} skeleton={<Skeleton.post />}>
      {post && <Post post={post} full />}
    </Async>
  );
}

export default PostDetails;
