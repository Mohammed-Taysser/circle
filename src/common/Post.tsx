import PostBody from '../components/post/Body.post';
import PostFooter from '../components/post/Footer.post';
import PostHeader from '../components/post/Header.post';

/**
 * Post component
 * @usage

- use `className` A string field that allows for additional CSS classes to be added to the post card wrapper.
- use `post` The main field of the class, which is an object containing information about the post, including the user who posted, the post content, and the number of likes, comments, and shares.
- use `isShared` A boolean field that specifies whether the post is a shared post or not. If true, the post footer is not displayed.
 */
function Post(props: PostProps) {
  return (
    <div className={`post-card ${props.className}`}>
      <PostHeader
        full={props.full}
        isShared={props.isShared}
        post={props.post}
      />
      <PostBody full={props.full} post={props.post} />
      {!props.isShared && <PostFooter post={props.post} />}
    </div>
  );
}

Post.defaultProps = {
  post: null,
  className: '',
  isShared: false,
};

export default Post;
