import { Flex, Input, ScrollArea, useMantineTheme } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from './Avatar';

/**
 * CreatePost component
 * 
 * A post editor component with an avatar and input field that opens a modal when clicked.
 * 
 * @usage
TODO: add post distinction (group, user)
 */
function CreatePost() {
  const theme = useMantineTheme();
  const navigateTo = useNavigate();

  const openCreatePostModal = () => {
    modals.openContextModal({
      modal: 'createPost',
      title: '',
      innerProps: {
        navigateTo,
      },
      size: 'xl',
      centered: true,
      scrollAreaComponent: ScrollArea.Autosize,
      classNames: {
        // content: 'overflow-visible',
      },
      overlayProps: {
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      },
    });
  };

  return (
    <div className='mb-5 bg-white shadow-nice p-3 md:p-7 rounded post-editor relative'>
      <Flex align='center' gap={20}>
        <Link to={`/profile/1`}>
          {/* TODO: replace with redux [link, src, alt] */}
          <Avatar sm />
        </Link>

        <Input
          className='flex-1'
          onClick={openCreatePostModal}
          component='button'
          styles={(theme) => ({
            input: {
              cursor: 'pointer',
              '&:focus-within': {
                borderColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.gray[4],
              },
            },
          })}
        >
          <div className='text-gray-400 flex justify-between items-center relative top-[-1px]'>
            <>What's in your mind, mohammed ?</>
          </div>
        </Input>
      </Flex>
    </div>
  );
}

export default CreatePost;
