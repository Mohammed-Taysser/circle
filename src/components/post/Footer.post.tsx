import {
  Avatar,
  Button,
  Divider,
  Flex,
  Loader,
  Popover,
  ScrollArea,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { TbMessage2Bolt } from 'react-icons/tb';
import { TfiShare } from 'react-icons/tfi';
import { VscReactions } from 'react-icons/vsc';
import { REACT_ICONS } from '../../constants/post';
import { uuidv4 } from '../../helpers';
import { formateNumber } from '../../helpers/millify';
import { useNavigate } from 'react-router-dom';

function PostFooter(props: { post: Post }) {
  const { post } = props;
  const navigateTo = useNavigate();
  const theme = useMantineTheme();
  const [isSharing, setIsSharing] = useState(false);
  const [isReacting, setIsReacting] = useState(false);
  const likeIcon = REACT_ICONS[post.reacts.react ?? 'like'];

  const onCommentBtnClick = () => {
    modals.openContextModal({
      modal: 'comments',
      title: '',
      innerProps: {
        postId: post.id,
        navigateTo,
      },
      size: 'xl',
      centered: true,
      // scrollAreaComponent: ScrollArea.Autosize,
      classNames: {
        // content: 'overflow-visible',
      },
    });
  };

  const onLikeBtnClick = () => {
    modals.openContextModal({
      modal: 'reacts',
      title: '',
      innerProps: {
        postId: post.id,
        navigateTo,
      },
      scrollAreaComponent: ScrollArea.Autosize,
      size: 'xl',
      centered: true,
    });
  };

  const onShareBtnClick = () => {
    setIsSharing(true);
    setTimeout(() => {
      setIsSharing(false);

      notifications.show({
        title: 'Successfully shared',
        message: 'Hey there, your post is successfully shared!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 3000);
  };

  const onReactBtnClick = () => {
    if (!isReacting) {
      setIsReacting(true);

      setTimeout(() => {
        setIsReacting(false);

        notifications.show({
          title: `Successfully saved`,
          message: `Hey there, your react is successfully saved!`,
          loading: false,
          withCloseButton: true,
          autoClose: true,
        });
      }, 2000);
    }
  };

  return (
    <div className='post-footer pb-4'>
      <Flex justify='space-between' align='center'>
        <Avatar.Group
          className='cursor-pointer items-center'
          onClick={onLikeBtnClick}
        >
          {post.reacts.labels.map((label) => {
            const react = REACT_ICONS[label];
            return (
              <Avatar radius='xl' color={react.color} key={label}>
                <react.icon />
              </Avatar>
            );
          })}
          <small className='text-gray-500'>
            {post.reacts.count ? (
              formateNumber(post.reacts.count)
            ) : (
              <VscReactions className='text-2xl' />
            )}
          </small>
        </Avatar.Group>

        <Flex gap={20} align='center' className='text-gray-500'>
          <Flex gap={5} align='center'>
            <TbMessage2Bolt className='text-lg' />
            <small>{formateNumber(post.comments.count)}</small>
          </Flex>

          <Flex gap={5} align='center'>
            <TfiShare className='text-md' />
            <small>{formateNumber(post.share.count)}</small>
          </Flex>
        </Flex>
      </Flex>

      <Divider
        className={`${
          theme.colorScheme === 'light' ? 'border-gray-200' : 'border-gray-800'
        } mt-2 mb-3`}
      />

      <SimpleGrid cols={3}>
        <Popover position='top' withArrow>
          <Popover.Target>
            <Button
              variant='light'
              color={post.reacts.react ? likeIcon.color : 'gray'}
              size='md'
              title='Post react'
            >
              {isReacting ? (
                <Loader color='' variant='dots' />
              ) : (
                <likeIcon.icon className='text-2xl' />
              )}
            </Button>
          </Popover.Target>

          <Popover.Dropdown className='border-0 shadow-nice'>
            <div className='flex gap-2'>
              {Object.keys(REACT_ICONS).map((key) => {
                const react = REACT_ICONS[key as PostReactsLabel];

                return (
                  <Avatar
                    radius='xl'
                    color={react.color}
                    key={key}
                    className='cursor-pointer'
                    onClick={onReactBtnClick}
                  >
                    <react.icon />
                  </Avatar>
                );
              })}
            </div>
          </Popover.Dropdown>
        </Popover>

        <Button
          variant='light'
          color='gray'
          size='md'
          title='Post comments'
          onClick={onCommentBtnClick}
        >
          <TbMessage2Bolt className='text-2xl' />
        </Button>

        <Button
          variant='light'
          color='gray'
          size='md'
          title='Share post'
          onClick={onShareBtnClick}
          disabled={isSharing}
        >
          {isSharing ? (
            <Loader color='' variant='dots' />
          ) : (
            <TfiShare className='text-xl' />
          )}
        </Button>
      </SimpleGrid>
    </div>
  );
}

PostFooter.defaultProps = {
  post: null,
};

export default PostFooter;
