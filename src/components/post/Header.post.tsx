import { Anchor, Flex, Indicator } from '@mantine/core';
import { FiExternalLink } from 'react-icons/fi';
import { VscVerified } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { POST_VISIBILITY } from '../../constants/post';
import { timeToX } from '../../helpers';
import PostDropdown from './header/PostDropdown';

function HeaderPost(props: PostHeaderProps) {
  const { post } = props;

  const VisibilityIcon = POST_VISIBILITY[post.visibility].icon;

  return (
    <>
      <div className='post-header'>
        <div className='media'>
          <div className='activity-avatar'>
            <Link to={`/profile/${post.user.id}`}>
              <Indicator
                size={12}
                offset={7}
                position='bottom-end'
                color='' // TODO: replace with socket.io
                withBorder
                zIndex={10}
              >
                <Avatar
                  sm
                  alt={post.user.name + ' avatar'}
                  src={post.user.avatar}
                />
              </Indicator>
            </Link>
            <div className='status-info ml-4'>
              <div className='activity-title'>
                <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>

                {post.user.isVerified && (
                  <VscVerified className='text-lg text-aurora' />
                )}

                <span className='block md:inline-block text-sm'>
                  {post.activity}
                </span>
              </div>

              <Flex gap={10} align='center'>
                <span className='activity-time'>{timeToX(post.publishAt)}</span>
                {post.editAt && <span className='activity-time'>Edited</span>}

                <VisibilityIcon color='gray' />

                {!props.full && (
                  <Anchor
                    component={Link}
                    to={`/post/${post.id}`}
                    title='Show full post details'
                  >
                    <FiExternalLink />
                  </Anchor>
                )}
              </Flex>
            </div>
          </div>
        </div>
        <div>
          {!props.isShared && (
            <PostDropdown
              id={post.id}
              body={post.body}
              isSaved={post.isSaved}
            />
          )}
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
