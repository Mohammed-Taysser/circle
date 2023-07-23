import { Button, Grid, SimpleGrid, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useMemo } from 'react';
import { BsPhone } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import {
  MdDriveFileRenameOutline,
  MdOutlineDriveFileRenameOutline,
  MdOutlineHomeWork,
} from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

// TODO: replace with redux
const initialValues = {
  email: 'mo@mo.mo',
  firstName: 'Mohammed',
  lastName: 'Taysser',
  phone: '01015081861',
  address: '59 Street, Newyorkc City',
  website: 'http://www.rebeca.com/',
};

function ContactInfo(props: SettingTapProps) {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues,
    validate: {
      email: isEmail('Invalid email'),
      firstName: isNotEmpty('firstName is required'),
      lastName: isNotEmpty('lastName is required'),
    },
  });

  const hasChanges = useMemo(
    () => JSON.stringify(form.values) !== JSON.stringify(initialValues),
    [form.values]
  );

  const onFormSubmit = (values: any) => {
    if (hasChanges) {
      props.onFormSubmit(hasChanges, values);
    }
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <TextInput
          label='First Name'
          placeholder='First Name'
          name='firstName'
          icon={<MdDriveFileRenameOutline />}
          {...form.getInputProps('firstName')}
        />

        <TextInput
          label='Last Name'
          placeholder='Last Name'
          name='lastName'
          icon={<MdOutlineDriveFileRenameOutline />}
          {...form.getInputProps('lastName')}
        />

        <TextInput
          label='Email'
          type='email'
          name='email'
          placeholder='example@domain.dev'
          icon={<TfiEmail />}
          {...form.getInputProps('email')}
        />

        <TextInput
          label='Phone'
          type='tel'
          name='phone'
          placeholder='+20 101 508 1861'
          icon={<BsPhone />}
          {...form.getInputProps('phone')}
        />

        <TextInput
          label='Address'
          name='address'
          placeholder='59 Street, Newyorkc City'
          icon={<MdOutlineHomeWork />}
          {...form.getInputProps('address')}
        />

        <TextInput
          label='Website'
          name='website'
          type='url'
          placeholder='https://dev.io'
          icon={<FiExternalLink />}
          {...form.getInputProps('website')}
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
  );
}

export default ContactInfo;
