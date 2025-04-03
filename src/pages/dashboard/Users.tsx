import {
  Avatar,
  Badge,
  Button,
  Grid,
  Group,
  LoadingOverlay,
  Modal,
  Pagination,
  PasswordInput,
  Select,
  Switch,
  Table,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import {
  MdDelete,
  MdDriveFileRenameOutline,
  MdOutlineAlternateEmail,
} from 'react-icons/md';
import { TbUserHexagon } from 'react-icons/tb';
import { TfiLock } from 'react-icons/tfi';
import { getErrorMessage, getImageURL } from '../../helpers';
import {
  selectUser,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import userSlice from '../../redux/features/user.slice';

function Users() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector(selectUser);

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const form = useForm<UserFormFields>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      status: 'inactive',
      isVerified: false,
      role: 'user',
      password: '',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      firstName: (value) =>
        value.length < 2 ? 'First name should be at least 2 characters' : null,
      lastName: (value) =>
        value.length < 2 ? 'Last name should be at least 2 characters' : null,
      username: (value) =>
        value.length <= 8 ? 'Username should be at least 8 characters' : null,
      password: (value) =>
        value.length <= 8 && !userState.selectedItem
          ? 'Password should be at least 8 characters'
          : null,
    },
  });

  useEffect(() => {
    fetchUsersAPI();
  }, []);

  const fetchUsersAPI = async () => {
    try {
      await dispatch(
        userSlice.actions.fetchAll({
          page: userState.pagination.page,
          limit: userState.pagination.limit,
        }),
      ).unwrap();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch(userSlice.actions.changePage(page));
  };

  const onEditUserBtnClick = (user: User) => {
    dispatch(userSlice.slice.actions.setSelectedItem(user));
    openEditableModal();

    form.setValues(user);
  };

  const onDeleteUserBtnClick = (user: User) => {
    dispatch(userSlice.slice.actions.setSelectedItem(user));
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!userState.selectedItem) {
      return;
    }

    try {
      await dispatch(
        userSlice.actions.delete(userState.selectedItem._id),
      ).unwrap();

      dispatch(userSlice.slice.actions.setSelectedItem(null));
      closeDeleteModal();
      fetchUsersAPI();
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: getErrorMessage(error),
        color: 'red',
      });
    }
  };

  const onFormSubmit = async (values: UserFormFields) => {
    const payload: UserUpdatePayload = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      status: values.status,
      isVerified: values.isVerified,
      role: values.role,
    };

    try {
      if (userState.selectedItem) {
        await dispatch(
          userSlice.actions.update({ id: userState.selectedItem._id, payload }),
        ).unwrap();

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully update ${values.firstName}!`,
        });
      } else {
        const createUserPayload: UserCreatePayload = {
          ...payload,
          password: values.password,
        };

        await dispatch(userSlice.actions.create(createUserPayload)).unwrap();

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created ${values.firstName}!`,
        });
      }

      onCancelBtnClick();
      fetchUsersAPI();
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
    dispatch(userSlice.slice.actions.setSelectedItem(null));
    closeEditableModal();
    form.reset();
  };

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={userState.selectedItem ? 'Update User' : 'Create User'}
        size='lg'
      >
        <form onSubmit={form.onSubmit(onFormSubmit)}>
          <Grid>
            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='First name'
                placeholder='John'
                icon={<MdDriveFileRenameOutline size='1rem' />}
                {...form.getInputProps('firstName')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Last name'
                placeholder='Doe'
                icon={<MdDriveFileRenameOutline size='1rem' />}
                {...form.getInputProps('lastName')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Email'
                placeholder='example@domain.dev'
                icon={<MdOutlineAlternateEmail size='1rem' />}
                {...form.getInputProps('email')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <TextInput
                label='Username'
                placeholder='Username'
                icon={<TbUserHexagon size='1rem' />}
                {...form.getInputProps('username')}
              />
            </Grid.Col>

            <Grid.Col sm={12} lg={6}>
              <Select
                label='Role'
                placeholder='Pick one'
                data={[
                  { value: 'admin', label: 'Admin' },
                  { value: 'user', label: 'User' },
                ]}
                {...form.getInputProps('role')}
              />
            </Grid.Col>

            {!userState.selectedItem && (
              <Grid.Col sm={12} lg={6}>
                <PasswordInput
                  icon={<TfiLock size='1rem' />}
                  label='Password'
                  placeholder='Your password'
                  {...form.getInputProps('password')}
                />
              </Grid.Col>
            )}

            <Grid.Col sm={12}>
              <Group>
                <Switch
                  label='Status'
                  checked={form.values.status === 'active'}
                  error={form.errors.status}
                  onChange={(event) =>
                    form.setFieldValue(
                      'status',
                      event.currentTarget.checked ? 'active' : 'inactive',
                    )
                  }
                />

                <Switch
                  label='Is verified'
                  checked={form.values.isVerified}
                  error={form.errors.isVerified}
                  onChange={(event) =>
                    form.setFieldValue(
                      'isVerified',
                      event.currentTarget.checked,
                    )
                  }
                />
              </Group>
            </Grid.Col>
          </Grid>

          <Group mt='xl' position='right'>
            <Button variant='default' onClick={onCancelBtnClick}>
              Cancel
            </Button>

            <Button
              type='submit'
              loading={userState.loading.create || userState.loading.update}
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
          loading={userState.loading.delete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={userState.loading.fetch} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Users
          </h2>
          <h5 className='my-0 text-gray-500'>
            (Total {userState.pagination.total})
          </h5>
        </Group>

        <Button onClick={openEditableModal}>Add User</Button>
      </Group>

      <div className='overflow-x-auto'>
        <Table
          striped
          highlightOnHover
          withColumnBorders
          className='min-w-[1300px]'
        >
          <thead>
            <tr>
              <th>-</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Is verified</th>
              <th>Role</th>
              <th>Status</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userState.items.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td>
                  <Group>
                    <Avatar radius='xl' src={getImageURL(user.avatar)} />

                    <div>
                      {user.firstName} {user.lastName}
                    </div>
                  </Group>
                </td>

                <td>{user.email}</td>

                <td>{user.username}</td>

                <td>
                  <Badge color={user.isVerified ? 'green' : 'red'}>
                    {user.isVerified ? 'Verified' : 'Unverified'}
                  </Badge>
                </td>

                <td>
                  <Badge color={user.role === 'user' ? 'yellow' : 'green'}>
                    {user.role}
                  </Badge>
                </td>

                <td>
                  <Badge color={user.status === 'active' ? 'green' : 'red'}>
                    {user.status}
                  </Badge>
                </td>

                <td>{dayjs(user.createdAt).format('YYYY-MM-DD hh:mm A')}</td>

                <td>
                  <Group>
                    <Button
                      size='xs'
                      leftIcon={<FiEdit />}
                      onClick={() => onEditUserBtnClick(user)}
                    >
                      Edit
                    </Button>

                    <Button
                      size='xs'
                      color='red'
                      leftIcon={<MdDelete />}
                      onClick={() => onDeleteUserBtnClick(user)}
                    >
                      Delete
                    </Button>
                  </Group>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Pagination
        value={userState.pagination.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(
          userState.pagination.total / userState.pagination.limit,
        )}
        withEdges
      />
    </div>
  );
}

export default Users;
