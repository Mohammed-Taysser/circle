import { ReactElement } from 'react';
import PostBody from '../components/post/Body.post';
import PostFooter from '../components/post/Footer.post';
import PostHeader from '../components/post/Header.post';

/**
 * Post component
 * @usage

- use `className` to add classes to Post wrapper
- use `post` to pass post info

 * @returns {ReactElement}
 */
function Post(props: PostProps): ReactElement {
  const { post } = props;

  if (!post) {
    return <></>;
  }

  return (
    <div className={`post-card ${props.className}`}>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </div>
  );
}

Post.defaultProps = {
  post: null,
  className: '',
};

export default Post;
