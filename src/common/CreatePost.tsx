import { Button, Group, LoadingOverlay, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useEditor } from '@tiptap/react';
import { useEffect, useState } from 'react';
import Stepper from '../components/createPost/Stepper.createPost';
import TapsCreatePost from '../components/createPost/Taps.createPost';
import { getEditorOption, uuidv4 } from '../helpers';

function CreatePost() {
  const editor = useEditor(getEditorOption());
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [postVariant, setPostVariant] = useState('POST_UPDATE');
  const [postAssets, setPostAssets] = useState({});

  useEffect(() => {
    setPostAssets({});
  }, [postVariant]);

  const onPublishConfirm = () => {
    setVisible(true);

    const notificationId = uuidv4();

    notifications.show({
      id: notificationId,
      title: 'Publishing post...',
      message: 'Hey there, your post is being publish!',
      loading: true,
      withCloseButton: false,
      color: '',
      autoClose: false,
    });

    setTimeout(() => {
      setVisible(false);

      notifications.update({
        id: notificationId,
        title: 'Successfully publish',
        message: 'Hey there, your post is successfully publish!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  const onPublishBtnClick = () => {
    console.log({
      type: postVariant,
      body: editor?.getHTML(),
      ...postAssets,
    });

    if (
      (editor?.getText() && editor?.getText() !== '\n') ||
      Object.keys(postAssets).length
    ) {
      modals.openConfirmModal({
        title: 'Are you sure to publish ?',
        centered: true,
        children: (
          <Text size='sm'>
            This action is so important that you are required to confirm it with
            a modal. Please click one of these buttons to proceed.
          </Text>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => {
          notifications.show({
            title: 'Canceled',
            message: 'Confirm modal was canceled',
            loading: false,
            withCloseButton: true,
            color: '',
            autoClose: true,
          });
        },
        onConfirm: onPublishConfirm,
      });
    } else {
      modals.open({
        title: 'No info provide!',
        centered: true,
        children: (
          <>
            <Text size='sm'>
              Hey there, there is no either body or post variant selected, you
              provide, you must provide one of them.
            </Text>
            <div className='flex justify-end'>
              <Button
                variant='default'
                onClick={() => modals.closeAll()}
                mt='md'
              >
                Ok, I will fill it
              </Button>
            </div>
          </>
        ),
      });
    }
  };

  return (
    <div className='mb-10 nice-shadow p-7 bg-white rounded post-editor relative'>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />

      <TapsCreatePost
        activeStep={activeStep}
        postVariant={postVariant}
        setPostVariant={setPostVariant}
        editor={editor}
        postAssets={postAssets}
        setPostAssets={setPostAssets}
      />

      <Group position='center' mt='xl'>
        <Button
          variant='default'
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prev) => prev - 1)}
        >
          Back
        </Button>

        <Button
          onClick={
            activeStep === 2
              ? onPublishBtnClick
              : () => setActiveStep((prev) => prev + 1)
          }
        >
          {activeStep === 2 ? 'Publish' : 'Next step'}
        </Button>
      </Group>
    </div>
  );
}

export default CreatePost;
