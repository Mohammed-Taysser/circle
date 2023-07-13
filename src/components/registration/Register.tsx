import {
  Anchor,
  Box,
  Button,
  Checkbox,
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
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TfiLock } from 'react-icons/tfi';
import { uuidv4 } from '../../helpers';
import { PASSWORD_REQUIREMENTS, getPasswordStatus } from '../../validations';

function Register(props: JoinUsProps) {
  const { toggleTap } = props;

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      terms: (value) => (!value ? 'terms is required' : null),
      password: (val) =>
        val.length <= 8
          ? 'Password should include at least 8 characters'
          : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Password did not match' : null,
    },
  });

  const [popoverOpened, setPopoverOpened] = useState(false);
  const { strength, color } = getPasswordStatus(form.values.password);

  const onFormSubmit = (values: any) => {
    props.onFormSubmit(values);
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <Stack>
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
        <Button type='submit' radius='xl'>
          Register
        </Button>
      </Group>
    </form>
  );
}

export default Register;
