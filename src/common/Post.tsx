import {
  Accordion,
  Alert,
  Anchor,
  Avatar,
  Indicator,
  Menu,
  ThemeIcon,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import parse from 'html-react-parser';
import { ReactElement } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { CgOptions } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import { IoSaveOutline } from 'react-icons/io5';
import { TbTextRecognition } from 'react-icons/tb';
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
  const clipboard = useClipboard();
  const isLoggedIn = localStorage.getItem('isLogin'); // TODO: replace with redux

  if (!post) {
    return <></>;
  }

  const Body = POST_TYPES[post.type].component;

  const onReactsClick = () => {
    setReacts(post.reacts.reacts);
  };

  const onCopyBtnClick = (value: string) => {
    clipboard.copy(value);

    notifications.show({
      title: 'Successfully copied',
      message: 'Hey there, your text has successfully copied!',
      loading: false,
      withCloseButton: true,
      color: '',
      autoClose: true,
    });
  };

  return (
    <div className={`post-card ${props.className}`}>
      <div className='post-header'>
        <div className='media'>
          <div className='activity-avatar'>
            <Link to={`/profile/${post.user.id}`}>
              <Indicator
                inline
                size={12}
                offset={7}
                position='bottom-end'
                color=''
                withBorder
                zIndex={10}
              >
                <RoundedAvatar sm alt='avatar' src={post.user.avatar} />
              </Indicator>
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
        <Menu shadow='md' width={180} position='bottom-end'>
          <Menu.Target>
            <UnstyledButton>
              <ThemeIcon variant='light' size='lg' color=''>
                <CgOptions />
              </ThemeIcon>
            </UnstyledButton>
          </Menu.Target>

          <Menu.Dropdown className='border-0 shadow-nice'>
            <Menu.Item
              onClick={() =>
                onCopyBtnClick(`${window.location.host}/post/${post.id}`)
              }
              icon={<FiExternalLink className='text-lg' />}
            >
              Copy post URL
            </Menu.Item>
            <Menu.Item
              onClick={() => onCopyBtnClick(post.body)}
              icon={<TbTextRecognition className='text-lg' />}
              disabled={!post.body}
            >
              Copy post content
            </Menu.Item>

            {/* TODO: add save post API */}
            <Menu.Item
              icon={<IoSaveOutline className='text-lg' />}
              disabled={!isLoggedIn}
            >
              {isLoggedIn ? (
                <div>Save post</div>
              ) : (
                <Tooltip label='You need to login!'>
                  <div>Save post</div>
                </Tooltip>
              )}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <div className='post-body'>
        <div className='activity-inner'>
          <p className='widget-box-status-text'>{parse(post.body)}</p>
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
              {isLoggedIn ? (
                <WriteComment />
              ) : (
                <Alert icon={<BsInfoCircle />} title='Hi there!' color='teal'>
                  To level a comment you must be
                  <Anchor component={Link} to='/login' className='mx-1'>
                    login
                  </Anchor>
                  first!
                </Alert>
              )}
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
