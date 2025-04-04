import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Grid,
  Group,
  PasswordInput,
  Popover,
  Progress,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import {
  MdDriveFileRenameOutline,
  MdOutlineAlternateEmail,
} from 'react-icons/md';
import { TfiLock } from 'react-icons/tfi';
import { uuidv4 } from '../../helpers';
import { PASSWORD_REQUIREMENTS, getPasswordStatus } from '../../validations';
import { TbUserHexagon } from 'react-icons/tb';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/useRedux';
import { register } from '../../redux/features/auth.slice';

interface FormFields {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  terms: boolean;
  username: string;
}

function Register(props: Readonly<JoinUsProps>) {
  const { toggleTap } = props;

  const dispatch = useAppDispatch();
  const authState = useAppSelector(createSelector((state) => state.auth));

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      terms: (value) => (!value ? 'terms is required' : null),
      firstName: (value) =>
        value.length < 2 ? 'First name should be at least 2 characters' : null,
      lastName: (value) =>
        value.length < 2 ? 'Last name should be at least 2 characters' : null,
      username: (value) =>
        value.length <= 8 ? 'Username should be at least 8 characters' : null,
      password: (value) =>
        value.length <= 8
          ? 'Password should include at least 8 characters'
          : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Password did not match' : null,
    },
  });

  const [popoverOpened, setPopoverOpened] = useState(false);
  const { strength, color } = getPasswordStatus(form.values.password);

  const onFormSubmit = (values: FormFields) => {
    const payload: RegisterRequestBody = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
    };

    dispatch(register(payload));
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <Stack>
        <Grid>
          <Grid.Col sm={12} lg={6}>
            <TextInput
              label='First name'
              placeholder='John'
              icon={<MdDriveFileRenameOutline size='1rem' />}
              value={form.values.firstName}
              onChange={(event) =>
                form.setFieldValue('firstName', event.currentTarget.value)
              }
              error={form.errors.firstName && 'Invalid First Name'}
              radius='md'
            />
          </Grid.Col>

          <Grid.Col sm={12} lg={6}>
            <TextInput
              label='Last name'
              placeholder='Doe'
              icon={<MdDriveFileRenameOutline size='1rem' />}
              value={form.values.lastName}
              onChange={(event) =>
                form.setFieldValue('lastName', event.currentTarget.value)
              }
              error={form.errors.lastName && 'Invalid Last Name'}
              radius='md'
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label='Email'
          placeholder='example@domain.dev'
          icon={<MdOutlineAlternateEmail size='1rem' />}
          value={form.values.email}
          onChange={(event) =>
            form.setFieldValue('email', event.currentTarget.value)
          }
          error={form.errors.email && 'Invalid email'}
          radius='md'
        />

        <TextInput
          label='Username'
          placeholder='Username'
          icon={<TbUserHexagon size='1rem' />}
          value={form.values.username}
          onChange={(event) =>
            form.setFieldValue('username', event.currentTarget.value)
          }
          error={form.errors.username && 'Invalid username'}
          radius='md'
        />

        <Popover
          opened={popoverOpened}
          position='bottom'
          width='target'
          transitionProps={{ transition: 'pop' }}
        >
          <Popover.Target>
            <div
              onFocusCapture={() => setPopoverOpened(true)}
              onBlurCapture={() => setPopoverOpened(false)}
            >
              <PasswordInput
                label='Password'
                icon={<TfiLock size='1rem' />}
                placeholder='Your password'
                {...form.getInputProps('password')}
                radius='md'
              />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <Progress color={color} value={strength} size={5} mb='xs' />

            <Text
              color={form.values.password.length > 7 ? 'teal' : 'red'}
              sx={{ display: 'flex', alignItems: 'center' }}
              mt={7}
              size='sm'
            >
              {form.values.password.length > 7 ? (
                <IconCheck size='0.9rem' />
              ) : (
                <IconX size='0.9rem' />
              )}
              <Box ml={10}>Includes at least 8 characters</Box>
            </Text>

            {PASSWORD_REQUIREMENTS.map((requirement) => (
              <Text
                color={
                  requirement.re.test(form.values.password) ? 'teal' : 'red'
                }
                sx={{ display: 'flex', alignItems: 'center' }}
                mt={7}
                size='sm'
                key={uuidv4()}
              >
                {requirement.re.test(form.values.password) ? (
                  <IconCheck size='0.9rem' />
                ) : (
                  <IconX size='0.9rem' />
                )}
                <Box ml={10}>{requirement.label}</Box>
              </Text>
            ))}
          </Popover.Dropdown>
        </Popover>

        <PasswordInput
          label='Confirm password'
          icon={<TfiLock size='1rem' />}
          placeholder='Confirm Your password'
          {...form.getInputProps('confirmPassword')}
          radius='md'
        />

        <Checkbox
          label='I accept terms and conditions'
          {...form.getInputProps('terms')}
        />
      </Stack>

      <Group position='apart' mt='xl'>
        <Anchor
          component='button'
          type='button'
          color='dimmed'
          onClick={() => toggleTap()}
          size='xs'
        >
          Already have an account? Login
        </Anchor>
        <Button
          type='submit'
          loading={authState.status === 'loading'}
          radius='xl'
        >
          Register
        </Button>
      </Group>
    </form>
  );
}

export default Register;
