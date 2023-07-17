import { Anchor, Indicator } from '@mantine/core';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import RoundedAvatar from '../../common/Avatar';
import { POST_TYPES, timeToX } from '../../helpers';
import PostDropdown from './header/PostDropdown';

function HeaderPost(props: { post: Post; full?: boolean }) {
  if (!props.post) {
    return <></>;
  }

  return (
    <>
      <div className='post-header'>
        <div className='media'>
          <div className='activity-avatar'>
            <Link to={`/profile/${props.post.user.id}`}>
              <Indicator
                size={12}
                offset={7}
                position='bottom-end'
                color=''
                withBorder
                zIndex={10}
              >
                <RoundedAvatar sm alt='avatar' src={props.post.user.avatar} />
              </Indicator>
            </Link>
            <div className='status-info ml-4'>
              <div className='activity-title'>
                <Link to={`/profile/${props.post.user.id}`}>
                  {props.post.user.name}
                </Link>
                <span className='block md:inline-block text-sm'>
                  {POST_TYPES[props.post.variant].msg}
                </span>
              </div>
              <div className='activity-time'>
                <span>{timeToX(props.post.publishAt)}</span>
                {!props.full && (
                  <Anchor
                    component={Link}
                    to={`/post/${props.post.id}`}
                    className='mx-1'
                  >
                    <FiExternalLink />
                  </Anchor>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <PostDropdown
            id={props.post.id}
            body={props.post.body}
            isSaved={props.post.isSaved}
          />
        </div>
      </div>
    </>
  );
}

HeaderPost.defaultProps = {
  post: null,
  full: false,
};

export default HeaderPost;
