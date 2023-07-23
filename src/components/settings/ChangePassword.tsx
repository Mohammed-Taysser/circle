import {
  Box,
  Button,
  Grid,
  PasswordInput,
  Popover,
  Progress,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { hasLength, matchesField, useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { TfiLock } from 'react-icons/tfi';
import { uuidv4 } from '../../helpers';

import { PASSWORD_REQUIREMENTS, getPasswordStatus } from '../../validations';
const initialValues = {
  password: '',
  confirmPassword: '',
};

function ChangePassword(props: SettingTapProps) {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues,
    validate: {
      password: hasLength(
        { min: 8 },
        'Password should include at least 8 characters'
      ),
      confirmPassword: matchesField('password', 'Passwords are not the same'),
    },
  });

  const hasChanges = useMemo(
    () => JSON.stringify(form.values) !== JSON.stringify(initialValues),
    [form.values]
  );

  const [popoverOpened, setPopoverOpened] = useState(false);
  const { strength, color } = getPasswordStatus(form.values.password);

  const onFormSubmit = (values: any) => {
    if (hasChanges) {
      props.onFormSubmit(hasChanges, values);
    }
  };

  return (
    <>
      <form onSubmit={form.onSubmit(onFormSubmit)}>
        <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
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
                  {...form.getInputProps('password')}
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
            placeholder='Confirm password'
            {...form.getInputProps('confirmPassword')}
          />

          <Grid my='md'>
            <Button
              type='submit'
              disabled={!hasChanges}
              loading={props.isLoading}
              radius='xl'
            >
              Save Changes
            </Button>
          </Grid>
        </SimpleGrid>
      </form>
    </>
  );
}

export default ChangePassword;
