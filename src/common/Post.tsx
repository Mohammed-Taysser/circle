import PostBody from '../components/post/Body.post';
import PostFooter from '../components/post/Footer.post';
import PostHeader from '../components/post/Header.post';

/**
 * Post component
 * @usage

- use `className` to add classes to Post wrapper
- use `post` to pass post info
 */
function Post(props: PostProps) {
  const { post } = props;

  return (
    <div className={`post-card ${props.className}`}>
      <PostHeader full={props.full} post={post} />
      <PostBody full={props.full} post={post} />
      <PostFooter full={props.full} post={post} />
    </div>
  );
}

Post.defaultProps = {
  post: null,
  className: '',
};

export default Post;
