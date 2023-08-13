import {
  Anchor,
  Button,
  Container,
  Paper,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useHelmet from '../../hooks/useHelmet';
import forgetPassword from '../../assets/images/background/forget-password.svg';

function ForgetPassword() {
  useHelmet('forgetPassword');
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = (values: { email: string }) => {
    console.log(values);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: `Successfully send new password`,
        message: 'An new password had been send to your mail',
        loading: false,
        color: '',
        autoClose: true,
      });
    }, 2000);
  };

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 md:h-[100vh] items-center my-20 md:my-0 gap-10'>
        <div className='col-span-1 order-2 md:order-1'>
          <Paper radius='md' withBorder className='relative p-10'>
            <Text size='lg' weight={500} mb={30}>
              Forgot password
            </Text>

            <form onSubmit={form.onSubmit(onFormSubmit)}>
              <Stack>
                <TextInput
                  label='Email'
                  name='email'
                  type='email'
                  radius='md'
                  icon={<MdOutlineAlternateEmail size='1rem' />}
                  placeholder='example@domain.dev'
                  {...form.getInputProps('email')}
                />
              </Stack>

              <Button
                type='submit'
                radius='xl'
                mt={20}
                mb={10}
                className='w-full'
                loading={isLoading}
              >
                Send new password
              </Button>

              <Anchor
                component={Link}
                to='/join-us'
                type='button'
                color='dimmed'
                size='xs'
              >
                Forget it, send me back to the sign in screen.
              </Anchor>
            </form>
          </Paper>
        </div>

        <div className='col-span-1 order-1 md:order-2'>
          <img
            src={forgetPassword}
            alt='forgetPassword'
            className='max-w-full'
          />
        </div>
      </div>
    </Container>
  );
}

export default ForgetPassword;
