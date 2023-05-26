import {
  Anchor,
  Indicator,
  Menu,
  ThemeIcon,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { CgOptions } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import { IoMdSave } from 'react-icons/io';
import { IoSaveOutline } from 'react-icons/io5';
import { TbTextRecognition } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import RoundedAvatar from '../../common/Avatar';
import { POST_TYPES, timeToX, uuidv4 } from '../../helpers';

function HeaderPost(props: { post: Post; full?: boolean }) {
  const isLoggedIn = localStorage.getItem('isLogin'); // TODO: replace with redux
  const clipboard = useClipboard();

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

  const onSaveBtnClick = () => {
    const notificationId = uuidv4();

    notifications.show({
      id: notificationId,
      title: `${props.post.isSaved ? 'Un saving' : 'saving'} post...`,
      message: `Hey there, your post is being ${
        props.post.isSaved ? 'Un save' : 'save'
      }!`,
      loading: true,
      withCloseButton: false,
      color: '',
      autoClose: false,
    });

    setTimeout(() => {
      notifications.update({
        id: notificationId,
        title: `Successfully ${props.post.isSaved ? 'Un saved' : 'saved'}`,
        message: `Hey there, your post is successfully ${
          props.post.isSaved ? 'Un save' : 'save'
        }!`,
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

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
                inline
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
                onCopyBtnClick(`${window.location.host}/post/${props.post.id}`)
              }
              icon={<FiExternalLink className='text-lg' />}
            >
              Copy post URL
            </Menu.Item>
            <Menu.Item
              onClick={() => onCopyBtnClick(props.post.body)}
              icon={<TbTextRecognition className='text-lg' />}
              disabled={!props.post.body}
            >
              Copy post content
            </Menu.Item>

            <Menu.Item
              icon={
                props.post.isSaved ? (
                  <IoMdSave className='text-lg text-aurora' />
                ) : (
                  <IoSaveOutline className='text-lg' />
                )
              }
              disabled={!isLoggedIn}
              onClick={onSaveBtnClick}
            >
              {isLoggedIn ? (
                <div>{!props.post.isSaved ? 'Save' : 'Un save'} post</div>
              ) : (
                <Tooltip label='You need to login!'>
                  <div>Save post</div>
                </Tooltip>
              )}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </>
  );
}

HeaderPost.defaultProps = {
  post: null,
  full: false,
};

export default HeaderPost;
