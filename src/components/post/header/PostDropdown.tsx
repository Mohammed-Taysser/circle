import { Menu, ThemeIcon, Tooltip, UnstyledButton } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { CgOptions } from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import { IoMdSave } from 'react-icons/io';
import { IoSaveOutline } from 'react-icons/io5';
import { TbTextRecognition } from 'react-icons/tb';
import { uuidv4 } from '../../../helpers';

function PostDropdown(props: PostDropdownProps) {
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
    setTimeout(() => {
      notifications.show({
        title: `Successfully ${props.isSaved ? 'Un saved' : 'saved'}`,
        message: `Hey there, your post is successfully ${
          props.isSaved ? 'Un save' : 'save'
        }!`,
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  return (
    <Menu shadow='md' width={180} position='bottom-end'>
      <Menu.Target>
        <UnstyledButton title='Toggle post options'>
          <ThemeIcon variant='light' size='lg' color='gray'>
            <CgOptions />
          </ThemeIcon>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown className='border-0 shadow-nice'>
        <Menu.Item
          onClick={() =>
            onCopyBtnClick(`${window.location.host}/post/${props.id}`)
          }
          icon={<FiExternalLink className='text-lg' />}
        >
          Copy post URL
        </Menu.Item>
        <Menu.Item
          onClick={() => onCopyBtnClick(props.body)}
          icon={<TbTextRecognition className='text-lg' />}
          disabled={!props.body}
        >
          Copy post content
        </Menu.Item>

        <Menu.Item
          icon={
            props.isSaved ? (
              <IoMdSave className='text-lg text-aurora' />
            ) : (
              <IoSaveOutline className='text-lg' />
            )
          }
          disabled={!isLoggedIn}
          onClick={onSaveBtnClick}
        >
          {isLoggedIn ? (
            <div>{!props.isSaved ? 'Save' : 'Un save'}</div>
          ) : (
            <Tooltip label='You need to login!'>
              <div>Save post</div>
            </Tooltip>
          )}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default PostDropdown;
