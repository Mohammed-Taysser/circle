import {
  Anchor,
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TfiLock } from 'react-icons/tfi';

function Login(props: JoinUsProps) {
  const { toggleTap } = props;

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

  const onFormSubmit = (values: any) => {
    props.onFormSubmit(values);
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

        <PasswordInput
          icon={<TfiLock size='1rem' />}
          label='Password'
          placeholder='Your password'
          radius='md'
          {...form.getInputProps('password')}
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
          Don't have an account? Register
        </Anchor>
        <Button type='submit' radius='xl'>
          Login
        </Button>
      </Group>
    </form>
  );
}

export default Login;
