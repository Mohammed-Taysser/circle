import {
  Anchor,
  Button,
  Flex,
  LoadingOverlay,
  Menu,
  ScrollArea,
  Select,
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { ContextModalProps } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useMemo, useRef, useState } from 'react';
import Avatar from '../../common/Avatar';
import TiptapEditor from '../../common/TiptapEditor';
import TapsModal from '../../components/createPost/modal/Taps.modal';
import { POST_VARIANT, POST_VISIBILITY } from '../../constants/post';

function CreatePostModal(props: ContextModalProps<CreatePostModalInnerProps>) {
  const { navigateTo } = props.innerProps;
  const editorContent = useRef({ text: '', html: '' });
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CreatePostModalInitialFormValue>({
    initialValues: {
      visibility: 'public',
      variant: 'blog',
      assets: {},
    },
    validate: {
      visibility: isNotEmpty('visibility is required'),
      variant: isNotEmpty('variant is required'),
    },
  });

  const getEditorContent = (content: { text: string; html: string }) => {
    editorContent.current = content;
  };

  const onVisibilityChange = (visibility: PostVisibility) => {
    form.setFieldValue('visibility', visibility);
  };

  const onFormSubmit = (values: any) => {
    if (form.values.variant === 'update') {
      form.setFieldValue('assets', {});
    }

    if (
      Boolean(editorContent.current.text) ||
      Object.keys(values.assets).length !== 0
    ) {
      console.log(values, editorContent.current);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        notifications.show({
          title: 'Successfully publish',
          message: (
            <>
              Hey there, your post is successfully publish!, you can see it from{' '}
              <Anchor onClick={() => onAnchorClick(`/post/1`)}>
                This Link
              </Anchor>
            </>
          ),
          loading: false,
          withCloseButton: true,
          autoClose: true,
        });
      }, 2000);
    } else {
      notifications.show({
        title: 'Empty post',
        message: `Hey there, your post is has no text body or assets, please make
        sure that has one of them`,
        loading: false,
        color: 'red',
        withCloseButton: true,
        autoClose: true,
      });
    }
  };

  const VisibilityObject = useMemo(
    () => POST_VISIBILITY[form.values.visibility as PostVisibility],
    [form.values.visibility]
  );

  const VariantObject = useMemo(
    () => POST_VARIANT[form.values.variant as CreatePostVariant],
    [form.values.variant]
  );

  const onAnchorClick = (url: string) => {
    navigateTo(url);
    props.context.closeModal(props.id);
  };

  const onPostVariantChange = (variant: string | null) => {
    form.setFieldValue('assets', {});
    form.setFieldValue('variant', variant ?? 'blog');
  };

  return (
    <ScrollArea>
      <form
        onSubmit={form.onSubmit(onFormSubmit)}
        className='relative post-editor'
      >
        <LoadingOverlay visible={isLoading} overlayBlur={2} />

        <Flex
          gap={15}
          className='md:items-center justify-between mb-5'
          direction={{
            sm: 'row',
            base: 'column',
          }}
        >
          {/* TODO: replace with redux [link, src, alt] */}
          <Flex gap={15} align='center'>
            <Anchor onClick={() => onAnchorClick(`/profile/${10}`)}>
              <Avatar sm />
            </Anchor>

            <div>
              <div>
                <Anchor
                  className='text-black hover:no-underline'
                  onClick={() => onAnchorClick(`/profile/${10}`)}
                >
                  Mohammed Taysser
                </Anchor>
              </div>

              <Menu width={200}>
                <Menu.Target>
                  <Button variant='light' radius='xl' size='xs' compact>
                    <Flex gap={3} align='center'>
                      <VisibilityObject.icon />
                      <span>{VisibilityObject.label}</span>
                    </Flex>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown className='border-0 shadow-nice'>
                  {Object.keys(POST_VISIBILITY).map((key) => {
                    const slug = key as PostVisibility;
                    const visibilityObject = POST_VISIBILITY[slug];

                    return (
                      <Menu.Item
                        onClick={() => onVisibilityChange(slug)}
                        key={slug}
                        icon={<visibilityObject.icon />}
                      >
                        {visibilityObject.label}
                      </Menu.Item>
                    );
                  })}
                </Menu.Dropdown>
              </Menu>
            </div>
          </Flex>

          <Select
            placeholder='Post Variant'
            size='xs'
            value={form.values.variant}
            icon={<VariantObject.icon />}
            data={Object.keys(POST_VARIANT).map((key) => {
              const slug = key as CreatePostVariant;
              return { value: slug, label: POST_VARIANT[slug].label };
            })}
            onChange={onPostVariantChange}
          />
        </Flex>

        <TiptapEditor getText={getEditorContent} />

        <TapsModal form={form} icon={VariantObject.icon} />

        <Button type='submit' mt={20} radius='xl'>
          Publish Post
        </Button>
      </form>
    </ScrollArea>
  );
}

export default CreatePostModal;
