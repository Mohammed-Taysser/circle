import { Anchor } from '@mantine/core';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { POST_TYPES } from '../../helpers';

function BodyPost(props: { post: Post; full?: boolean }) {
  const Body = POST_TYPES[props.post.variant].component;

  return (
    <div className='post-body'>
      <div className='activity-inner'>
        <p className='widget-box-status-text'>
          {props.full ? (
            parse(props.post.body)
          ) : (
            <>
              {parse(props.post.body.substring(0, 1000))}
              {props.post.body.length >= 1000 ? (
                <>
                  <span className='mx-1'>.....</span>
                  <Anchor
                    component={Link}
                    to={`/post/${props.post.id}`}
                    className='mb-3 inline-block'
                  >
                    Continue Reading
                  </Anchor>
                </>
              ) : (
                ''
              )}
            </>
          )}
        </p>
        <Body post={props.post} full={props.full} />
      </div>
    </div>
  );
}

BodyPost.defaultProps = {
  post: null,
  full: false,
};

export default BodyPost;
