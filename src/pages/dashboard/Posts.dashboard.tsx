import {
  Autocomplete,
  Avatar,
  Button,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  Pagination,
  Select,
  Table,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import TiptapEditor from '../../common/TiptapEditor';
import PostActivityPopover from '../../components/post/PostActivityPopover';
import PostAssetsPopover from '../../components/post/PostAssetsPopover';
import PostBodyPopover from '../../components/post/PostBodyPopover';
import PostVariant from '../../components/post/PostVariant';
import PostVisibility from '../../components/post/PostVisibility';
import { POST_VARIANT, POST_VISIBILITY } from '../../constants/post';
import { getErrorMessage, getImageURL } from '../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import postSlice from '../../redux/features/post.slice';
import userSlice from '../../redux/features/user.slice';

function Posts() {
  const dispatch = useAppDispatch();

  const editorContent = useRef({ text: '', html: '' });

  const postState = useAppSelector(createSelector((state) => state.posts));
  const userState = useAppSelector(createSelector((state) => state.users));

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<PostFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      visibility: 'public',
      variant: 'blog',
      user: '',
      body: '',
    },
    validate: {
      user: (value) => (!value ? 'User is required' : null),
    },
  });

  useEffect(() => {
    fetchNeededDataAPI();
  }, []);

  const fetchNeededDataAPI = async () => {
    try {
      await dispatch(postSlice.actions.fetchAll()).unwrap();
      await dispatch(userSlice.actions.fetchSimpleList()).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const getEditorContent = (content: { text: string; html: string }) => {
    editorContent.current = content;
  };

  const onPageChange = (page: number) => {
    dispatch(postSlice.actions.changePage(page));
  };

  const onEditPostBtnClick = (post: Post) => {
    dispatch(postSlice.slice.actions.setSelectedItem(post));
    openEditableModal();

    form.setValues({
      ...post,
      user: post.user._id,
    });

    editorContent.current = { text: post.body, html: post.body };
  };

  const onDeletePostBtnClick = (post: Post) => {
    dispatch(postSlice.slice.actions.setSelectedItem(post));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!postState.selectedItem) {
      return;
    }

    try {
      await dispatch(
        postSlice.actions.delete({ id: postState.selectedItem._id }),
      ).unwrap();

      dispatch(postSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchNeededDataAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: PostFormFields) => {
    const payload: PostEditablePayload = {
      user: values.user,
      body: editorContent.current.html,
      visibility: values.visibility,
      variant: values.variant,
    };

    try {
      if (postState.selectedItem) {
        await dispatch(
          postSlice.actions.update({
            id: postState.selectedItem._id,
            payload,
          }),
        ).unwrap();

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully update!`,
        });
      } else {
        await dispatch(postSlice.actions.create({ payload })).unwrap();

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created!`,
        });
      }

      onCancelBtnClick();
      fetchNeededDataAPI();
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onCancelBtnClick = () => {
    dispatch(postSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
    editorContent.current = { text: '', html: '' };
  };

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={postState.selectedItem ? 'Update Post' : 'Create Post'}
        size='xl'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <Autocomplete
                label='User'
                placeholder='Choose user'
                disabled={Boolean(postState.selectedItem)}
                filter={(value, item) =>
                  item.label.toLowerCase().includes(value.toLowerCase())
                }
                data={userState.simpleItems.map((user) => ({
                  value: user._id,
                  label: user.name,
                }))}
                {...form.getInputProps('user')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Select
                label='Visibility'
                placeholder='Pick one'
                data={Object.entries(POST_VISIBILITY).map(([key, value]) => ({
                  label: value.label,
                  value: key,
                }))}
                {...form.getInputProps('visibility')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Select
                label='Variant'
                placeholder='Pick one'
                data={Object.entries(POST_VARIANT).map(([key, value]) => ({
                  label: value.label,
                  value: key,
                }))}
                {...form.getInputProps('variant')}
              />
            </Grid.Col>

            {!postState.loading.fetchById && (
              <Grid.Col sm={12}>
                <TiptapEditor
                  content={form.values.body}
                  getText={getEditorContent}
                />
              </Grid.Col>
            )}
          </Grid>

          <Group mt='xl' position='right'>
            <Button variant='default' onClick={onCancelBtnClick}>
              Cancel
            </Button>

            <Button
              type='submit'
              loading={postState.loading.create || postState.loading.update}
            >
              Save
            </Button>
          </Group>
        </form>
      </Modal>

      <Modal
        closeOnClickOutside={false}
        opened={deleteModalOpen}
        onClose={closeDeleteModal}
        title='Confirm Delete'
      >
        This action cannot be undone, are you sure?
        <Button
          color='red'
          className='mt-3'
          loading={postState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={postState.loading.fetch} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Posts
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {postState.filters.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add Post</Button>
      </Group>

      <div className='overflow-x-auto'>
        <Table
          striped
          highlightOnHover
          withColumnBorders
          className='min-w-[1200px]'
        >
          <thead>
            <tr>
              <th>-</th>
              <th>Variant</th>
              <th>Visibility</th>
              <th>User</th>
              <th>Body</th>
              <th>Activity</th>
              <th>Assets</th>
              <th>Create At</th>
              <th>Update At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {postState.items.length === 0 ? (
              <tr>
                <td colSpan={20}>
                  <div className='text-center py-3 text-gray-600'>
                    No data found
                  </div>
                </td>
              </tr>
            ) : (
              postState.items.map((post, index) => (
                <tr key={post._id}>
                  <td>{index + 1}</td>

                  <td>
                    <PostVariant variant={post.variant} />
                  </td>

                  <td>
                    <PostVisibility visibility={post.visibility} />
                  </td>

                  <td>
                    <Group>
                      <Avatar radius='xl' src={getImageURL(post.user.avatar)} />

                      <div>
                        {post.user.firstName} {post.user.lastName}
                      </div>
                    </Group>
                  </td>

                  <td>
                    <PostBodyPopover post={post} />
                  </td>

                  <td>
                    <PostActivityPopover post={post} />
                  </td>

                  <td>
                    <PostAssetsPopover post={post} />
                  </td>

                  <td>{dayjs(post.createdAt).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>{dayjs(post.updatedAt).format('YYYY-MM-DD hh:mm A')}</td>

                  <td>
                    <Group>
                      <Button
                        size='xs'
                        leftIcon={<FiEdit />}
                        onClick={() => onEditPostBtnClick(post)}
                      >
                        Edit
                      </Button>

                      <Button
                        size='xs'
                        color='red'
                        leftIcon={<MdDelete />}
                        onClick={() => onDeletePostBtnClick(post)}
                      >
                        Delete
                      </Button>
                    </Group>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      <Pagination
        value={postState.filters.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(postState.filters.total / postState.filters.limit)}
        withEdges
      />
    </div>
  );
}

export default Posts;
