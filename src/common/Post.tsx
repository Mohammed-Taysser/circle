import {
  Anchor,
  Avatar,
  Indicator,
  Menu,
  ScrollArea,
  ThemeIcon,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import parse from 'html-react-parser';
import { ReactElement } from 'react';
import { CgOptions } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import { IoSaveOutline } from 'react-icons/io5';
import { TbTextRecognition } from 'react-icons/tb';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { REACT_ICONS } from '../constants/reacts';
import { POST_TYPES, timeToX } from '../helpers';
import RoundedAvatar from './Avatar';

/**
 * Post component
 * @usage

- use `className` to add classes to Post wrapper
- use `post` to pass post info

 * @returns {ReactElement}
 */
function Post(props: PostProps): ReactElement {
  const { post } = props;
  const clipboard = useClipboard();
  const isLoggedIn = localStorage.getItem('isLogin'); // TODO: replace with redux

  if (!post) {
    return <></>;
  }

  const Body = POST_TYPES[post.variant].component;

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
                <span className='block md:inline-block text-sm'>
                  {POST_TYPES[post.variant].msg}
                </span>
              </div>
              <div className='activity-time'>
                <span>{timeToX(post.publishAt)}</span>
                {!props.full && (
                  <Anchor
                    component={Link}
                    to={`/post/${post.id}`}
                    className='mx-1'
                  >
                    <FiExternalLink />
                  </Anchor>
                )}
              </div>
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
          <p className='widget-box-status-text'>
            {props.full ? (
              parse(post.body)
            ) : (
              <>
                {parse(post.body.substring(0, 1000))}
                {post.body.length >= 1000 ? (
                  <>
                    <span className='mx-1'>.....</span>
                    <Anchor
                      component={Link}
                      to={`/post/${post.id}`}
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
          <Body post={post} full={props.full} />
        </div>
        <div className='post-meta-wrap'>
          <div
            className='cursor-pointer'
            onClick={() =>
              modals.openContextModal({
                modal: 'reacts',
                title: '',
                innerProps: {
                  reacts: post.reacts.reacts,
                },
                size: 'lg',
                scrollAreaComponent: ScrollArea.Autosize,
                centered: true,
              })
            }
          >
            <Tooltip.Group openDelay={300} closeDelay={100}>
              <Avatar.Group spacing='sm'>
                {Object.keys(post.reacts.reacts).map((key) => {
                  const react = REACT_ICONS[key as PostReactsLabel];
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
            <div
              className='meta-text flex items-center cursor-pointer'
              onClick={() =>
                modals.openContextModal({
                  modal: 'comments',
                  title: '',
                  innerProps: {},
                  size: 'lg',
                  centered: true,
                  scrollAreaComponent: ScrollArea.Autosize,
                })
              }
            >
              <VscCommentDiscussion className='text-lg mr-1' />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.defaultProps = {
  post: null,
  className: '',
};

export default Post;
