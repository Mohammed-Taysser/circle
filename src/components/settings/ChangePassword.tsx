import {
  Box,
  Button,
  Grid,
  PasswordInput,
  Popover,
  Progress,
  SimpleGrid,
  Text
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { TfiLock } from 'react-icons/tfi';
import { uuidv4 } from '../../helpers';
import { PASSWORD_REQUIREMENTS, getPasswordStatus } from '../../validations';

function ChangePassword() {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      currentPassword: '',
      newPassword: '',
    },
    validate: {
      newPassword: (val) =>
        val.length <= 8
          ? 'Password should include at least 8 characters'
          : null,
      currentPassword: (value) =>
        !value ? 'Current password is required' : null,
    },
  });

  const [popoverOpened, setPopoverOpened] = useState(false);
  const { strength, color } = getPasswordStatus(form.values.newPassword);

  const onFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <form onSubmit={form.onSubmit(onFormSubmit)}>
        <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
          <PasswordInput
            label='Current password'
            icon={<TfiLock size='1rem' />}
            placeholder='Current password'
            {...form.getInputProps('currentPassword')}
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
                  label='New Password'
                  icon={<TfiLock size='1rem' />}
                  placeholder='New password'
                  {...form.getInputProps('newPassword')}
                  radius='md'
                />
              </div>
            </Popover.Target>
            <Popover.Dropdown>
              <Progress color={color} value={strength} size={5} mb='xs' />

              <Text
                color={form.values.newPassword.length > 7 ? 'teal' : 'red'}
                sx={{ display: 'flex', alignItems: 'center' }}
                mt={7}
                size='sm'
              >
                {form.values.newPassword.length > 7 ? (
                  <IconCheck size='0.9rem' />
                ) : (
                  <IconX size='0.9rem' />
                )}
                <Box ml={10}>Includes at least 8 characters</Box>
              </Text>

              {PASSWORD_REQUIREMENTS.map((requirement) => (
                <Text
                  color={
                    requirement.re.test(form.values.newPassword)
                      ? 'teal'
                      : 'red'
                  }
                  sx={{ display: 'flex', alignItems: 'center' }}
                  mt={7}
                  size='sm'
                  key={uuidv4()}
                >
                  {requirement.re.test(form.values.newPassword) ? (
                    <IconCheck size='0.9rem' />
                  ) : (
                    <IconX size='0.9rem' />
                  )}
                  <Box ml={10}>{requirement.label}</Box>
                </Text>
              ))}
            </Popover.Dropdown>
          </Popover>

          <Grid my='md'>
            <Button type='submit' radius='xl'>
              Save Changes
            </Button>
          </Grid>
        </SimpleGrid>
      </form>
    </>
  );
}

export default ChangePassword;
