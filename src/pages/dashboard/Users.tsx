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
import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import {
  MdDelete,
  MdDriveFileRenameOutline,
  MdOutlineAlternateEmail,
} from 'react-icons/md';
import { TbUserHexagon } from 'react-icons/tb';
import { TfiLock } from 'react-icons/tfi';
import API from '../../api';
import { getErrorMessage, getImageURL } from '../../helpers';

function Users() {
  const [selectedUser, setSelectedUser] = useState<null | User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<TablePagination>({
    total: 0,
    page: 1,
    limit: 25,
  });

  const [
    editableModalOpen,
    { open: openEditableModal, close: closeEditableModal },
  ] = useDisclosure(false);
  const [deleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);

  const [isDelete, setIsDelete] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

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
        value.length <= 8 && !selectedUser
          ? 'Password should be at least 8 characters'
          : null,
    },
  });

  useEffect(() => {
    fetchUsersAPI();
  }, [pagination.page, pagination.limit]);

  const fetchUsersAPI = async () => {
    const params = {
      page: pagination.page,
      limit: pagination.limit,
    };
    await API.user
      .getAll(params)
      .then((res) => {
        setUsers(res.data.data);
        setPagination((prev) => ({ ...prev, total: res.data.meta.total }));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onPageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, page: page }));
  };

  const onEditUserBtnClick = (user: User) => {
    setSelectedUser(user);
    openEditableModal();

    form.setValues(user);
  };

  const onDeleteUserBtnClick = (user: User) => {
    setSelectedUser(user);
    openDeleteModal();
  };

  const onConfirmDeleteBtnClick = async () => {
    if (!selectedUser) {
      return;
    }

    setIsDelete(true);

    await API.user
      .delete(selectedUser._id)
      .then(() => {
        notifications.show({
          title: 'Successfully deleted',
          message: `Hey there, Successfully deleted ${selectedUser.firstName}!`,
        });
        setSelectedUser(null);
        closeDeleteModal();
        fetchUsersAPI();
      })
      .catch((err) => {
        notifications.show({
          title: 'Error',
          message: getErrorMessage(err),
          color: 'red',
        });
      })
      .finally(() => {
        setIsDelete(false);
      });
  };

  const onFormSubmit = async (values: UserFormFields) => {
    const payload: Partial<UserFormFields> = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      status: values.status,
      isVerified: values.isVerified,
      role: values.role,
    };

    setIsEditable(true);

    try {
      if (selectedUser) {
        await API.user.update(selectedUser._id, payload);

        notifications.show({
          title: 'Successfully updated',
          message: `Hey there, Successfully updated ${selectedUser.firstName}!`,
        });
      } else {
        const createUserPayload: UserFormFields = {
          ...values,
          password: values.password,
        };
        await API.user.create(createUserPayload);

        notifications.show({
          title: 'Successfully created',
          message: `Hey there, Successfully created ${payload.firstName}!`,
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
    } finally {
      setIsEditable(false);
    }
  };

  const onCancelBtnClick = () => {
    setSelectedUser(null);
    closeEditableModal();
    form.reset();
  };

  return (
    <div className='shadow-nice p-4 rounded mb-20 bg-white relative'>
      <Modal
        closeOnClickOutside={false}
        opened={editableModalOpen}
        onClose={onCancelBtnClick}
        title={selectedUser ? 'Update User' : 'Create User'}
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

            {!selectedUser && (
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

            <Button type='submit' loading={isEditable}>
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
          loading={isDelete}
          onClick={onConfirmDeleteBtnClick}
        >
          Yes, Delete
        </Button>
      </Modal>

      <LoadingOverlay visible={isLoading} overlayBlur={2} />

      <Group position='apart' className='mb-8'>
        <Group align='end'>
          <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
            Users
          </h2>
          <h5 className='my-0 text-gray-500'>(Total {pagination.total})</h5>
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
            {users.map((user, index) => (
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
        value={pagination.page}
        className='mt-6'
        onChange={onPageChange}
        total={Math.ceil(pagination.total / pagination.limit)}
        withEdges
      />
    </div>
  );
}

export default Users;
