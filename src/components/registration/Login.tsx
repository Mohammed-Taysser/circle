import {
  Anchor,
  Button,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TfiLock } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
  createSelector,
} from '../../hooks/useRedux';
import { login } from '../../redux/features/auth.slice';

function Login(props: Readonly<JoinUsProps>) {
  const { toggleTap } = props;

  const dispatch = useAppDispatch();
  const authState = useAppSelector(createSelector((state) => state.auth));

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (!value ? 'password is required' : null),
    },
  });

  const onFormSubmit = (values: { email: string; password: string }) => {
    const payload: LoginRequestBody = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(payload));
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <Stack>
        <TextInput
          label='Email'
          name='email'
          type='email'
          icon={<MdOutlineAlternateEmail size='1rem' />}
          placeholder='example@domain.dev'
          radius='md'
          {...form.getInputProps('email')}
        />

        <>
          <Group position='apart' mb={-15}>
            <Text
              component='label'
              htmlFor='your-password'
              size='sm'
              weight={500}
            >
              Your password
            </Text>

            <Anchor
              to='/forget-password'
              component={Link}
              sx={(theme) => ({
                fontWeight: 500,
                fontSize: theme.fontSizes.xs,
              })}
            >
              Forgot your password?
            </Anchor>
          </Group>
          <PasswordInput
            icon={<TfiLock size='1rem' />}
            placeholder='Your password'
            id='your-password'
            radius='md'
            {...form.getInputProps('password')}
          />
        </>
      </Stack>

      <Group position='apart' mt='xl'>
        <Anchor
          component='button'
          type='button'
          color='dimmed'
          onClick={() => toggleTap()}
          size='xs'
        >
          Don't have an account? Register
        </Anchor>
        <Button
          type='submit'
          loading={authState.status === 'loading'}
          radius='xl'
        >
          Login
        </Button>
      </Group>
    </form>
  );
}

export default Login;
