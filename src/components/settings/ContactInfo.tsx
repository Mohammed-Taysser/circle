import { Button, Grid, SimpleGrid, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { BsPhone } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import {
  MdDriveFileRenameOutline,
  MdOutlineDriveFileRenameOutline,
  MdOutlineHomeWork,
} from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

function ContactInfo() {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      email: 'mo@mo.mo',
      firstName: 'Mohammed',
      lastName: 'Taysser',
      phone: '01015081861',
      address: '59 Street, Newyorkc City',
      website: 'http://www.rebeca.com/',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      firstName: (value) => (!value ? 'firstName is required' : null),
      lastName: (value) => (!value ? 'lastName is required' : null),
    },
  });

  const onFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <TextInput
          label='First Name'
          placeholder='First Name'
          icon={<MdDriveFileRenameOutline size='1rem' />}
          error={form.errors.firstName && 'Invalid firstName'}
          {...form.getInputProps('firstName')}
          radius='md'
        />

        <TextInput
          label='Last Name'
          placeholder='Last Name'
          icon={<MdOutlineDriveFileRenameOutline size='1rem' />}
          error={form.errors.lastName && 'Invalid lastName'}
          {...form.getInputProps('lastName')}
          radius='md'
        />

        <TextInput
          label='Email'
          type='email'
          placeholder='example@domain.dev'
          icon={<TfiEmail size='1rem' />}
          error={form.errors.email && 'Invalid email'}
          {...form.getInputProps('email')}
          radius='md'
        />

        <TextInput
          label='Phone'
          type='tel'
          placeholder='+20 101 508 1861'
          icon={<BsPhone size='1rem' />}
          error={form.errors.phone && 'Invalid phone'}
          {...form.getInputProps('phone')}
          radius='md'
        />

        <TextInput
          label='Address'
          placeholder='59 Street, Newyorkc City'
          icon={<MdOutlineHomeWork size='1rem' />}
          error={form.errors.address && 'Invalid address'}
          {...form.getInputProps('address')}
          radius='md'
        />

        <TextInput
          label='Website'
          type='url'
          placeholder='https://dev.io'
          icon={<FiExternalLink size='1rem' />}
          error={form.errors.website && 'Invalid website'}
          {...form.getInputProps('website')}
          radius='md'
        />

        <Grid my='md'>
          <Button type='submit' radius='xl'>
            Save Changes
          </Button>
        </Grid>
      </SimpleGrid>
    </form>
  );
}

export default ContactInfo;
