import { Accordion, Avatar, Tooltip } from '@mantine/core';
import { ReactElement } from 'react';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useReactsContext } from '../context/Reacts';
import { POST_TYPES, REACT_ICONS, timeToX } from '../helpers';
import RoundedAvatar from './Avatar';
import Comments, { WriteComment } from './Comment';

/**
 * Post component
 * @usage

- use `className` to add classes to Post wrapper
- use `post` to pass post info

 * @returns {ReactElement}
 */
function Post(props: { post: Post; className?: string }): ReactElement {
  const { post } = props;
  const { setReacts } = useReactsContext();

  if (!post) {
    return <></>;
  }

  const Body = POST_TYPES[post.type].component;

  const onReactsClick = () => {
    setReacts(post.reacts.reacts);
  };

  return (
    <div className={`post-card ${props.className}`}>
      <div className='post-header'>
        <div className='media'>
          <div className='activity-avatar'>
            <Link to={`/profile/${post.user.id}`}>
              <RoundedAvatar sm alt='avatar' src={post.user.avatar} />
            </Link>
            <div className='status-info ml-4'>
              <div className='activity-title'>
                <Link to={`/profile/${post.user.id}`}>{post.user.name}</Link>
                <span className='block md:inline-block'>
                  {POST_TYPES[post.type].msg}
                </span>
              </div>
              <div className='activity-time'>{timeToX(post.publishAt)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='post-body'>
        <div className='activity-inner'>
          <p className='widget-box-status-text'>{post.body}</p>
          <Body post={post} />
        </div>
        <Accordion>
          <Accordion.Item value='comment' className='border-0'>
            <div className='post-meta-wrap'>
              <div className='cursor-pointer' onClick={onReactsClick}>
                <Tooltip.Group openDelay={300} closeDelay={100}>
                  <Avatar.Group spacing='sm'>
                    {Object.keys(post.reacts.reacts).map((key) => {
                      const react = REACT_ICONS[key as ReactsLabel];
                      return (
                        <Tooltip label={key} key={key} withArrow>
                          <Avatar radius='xl' color={react.color}>
                            <react.icon />
                          </Avatar>
                        </Tooltip>
                      );
                    })}
                    <Avatar radius='xl'>{post.reacts.count}</Avatar>
                  </Avatar.Group>
                </Tooltip.Group>
              </div>
              <div className='post-meta activity-meta'>
                <Accordion.Control>
                  <div className='meta-text flex items-center'>
                    <VscCommentDiscussion className='text-lg mr-1' />
                    <span>{post.comments.length}</span>
                  </div>
                </Accordion.Control>
              </div>
            </div>
            <Accordion.Panel>
              <Comments comments={post.comments} />
              <WriteComment />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

Post.defaultProps = {
  post: null,
  className: '',
};

export default Post;
