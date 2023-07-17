import { Avatar, Popover, ScrollArea, UnstyledButton } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { REACT_ICONS } from '../../../constants/reacts';
import { uuidv4 } from '../../../helpers';

function PostReacts(props: { reacts: PostReacts; count: number }) {
  const onReactBtnClick = (reactType: string) => {
    const notificationId = uuidv4();

    notifications.show({
      id: notificationId,
      title: `react ${reactType} post...`,
      message: `Hey there, your react ${reactType} is being save!`,
      loading: true,
      withCloseButton: false,
      color: '',
      autoClose: false,
    });

    setTimeout(() => {
      notifications.update({
        id: notificationId,
        title: `Successfully saved`,
        message: `Hey there, your react is successfully saved!`,
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  return (
    <div className='flex justify-center items-center'>
      <Popover position='top' withArrow>
        <Popover.Target>
          <Avatar.Group className='cursor-pointer'>
            {Object.keys(props.reacts).map((key) => {
              const react = REACT_ICONS[key as PostReactsLabel];
              return (
                <Avatar radius='xl' color={react.color} key={key}>
                  <react.icon />
                </Avatar>
              );
            })}
          </Avatar.Group>
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
                  onClick={() => onReactBtnClick(key)}
                >
                  <react.icon />
                </Avatar>
              );
            })}
          </div>
        </Popover.Dropdown>
      </Popover>

      <UnstyledButton
        className='cursor-pointer mx-2 text-gray-400 text-sm hover:underline duration-200'
        onClick={() =>
          modals.openContextModal({
            modal: 'reacts',
            title: '',
            innerProps: {
              reacts: props.reacts,
            },
            size: 'lg',
            scrollAreaComponent: ScrollArea.Autosize,
            centered: true,
          })
        }
      >
        {props.count}
      </UnstyledButton>
    </div>
  );
}

export default PostReacts;
