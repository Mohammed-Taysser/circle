import Post from '../../common/Post';

function Timeline(props: { posts: Post[] }) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Timeline;
