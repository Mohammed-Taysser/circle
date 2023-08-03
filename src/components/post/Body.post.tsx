import Viewers from './Viewers';
import TextContent from './body/TextContent';

function BodyPost(props: { post: Post; full?: boolean }) {
  return (
    <div className='post-body'>
      <div className='activity-inner'>
        <TextContent
          id={props.post.id}
          body={props.post.body}
          full={props.full}
        />

        {props.post.variant !== 'blog' && (
          <Viewers post={props.post} full={props.full} />
        )}
      </div>
    </div>
  );
}

BodyPost.defaultProps = {
  post: null,
  full: false,
};

export default BodyPost;
