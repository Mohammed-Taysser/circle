import { Button, Grid, SimpleGrid, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { BsBehance } from 'react-icons/bs';
import { FiDribbble, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdDriveFileRenameOutline, MdOutlineWorkOutline } from 'react-icons/md';
import { RiBuilding2Line } from 'react-icons/ri';

function EducationAndOthersInformation() {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      birthday: '',
      education: '',
      institution: '',
      employment: '',
      facebook: '',
      twitter: '',
      dribbble: '',
      behance: '',
      youtube: '',
    },
  });

  const onFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <DateInput
          label='BirthDay'
          valueFormat='DD MMMM YYYY'
          allowDeselect
          weekendDays={[]}
          placeholder='BirthDay'
          icon={<MdDriveFileRenameOutline size='1rem' />}
          {...form.getInputProps('birthday')}
          radius='md'
        />

        <TextInput
          label='Education'
          placeholder='Education'
          icon={<HiOutlineAcademicCap size='1rem' />}
          {...form.getInputProps('education')}
          radius='md'
        />

        <TextInput
          label='Institution'
          placeholder='Institution'
          icon={<RiBuilding2Line size='1rem' />}
          {...form.getInputProps('institution')}
          radius='md'
        />

        <TextInput
          label='Employment'
          placeholder='Employment'
          icon={<MdOutlineWorkOutline size='1rem' />}
          {...form.getInputProps('employment')}
          radius='md'
        />

        <TextInput
          label='Facebook'
          type='url'
          placeholder='Facebook'
          icon={<FiFacebook size='1rem' />}
          {...form.getInputProps('facebook')}
          radius='md'
        />

        <TextInput
          label='Twitter'
          type='url'
          placeholder='Twitter'
          icon={<FiTwitter size='1rem' />}
          {...form.getInputProps('twitter')}
          radius='md'
        />

        <TextInput
          label='Dribbble'
          placeholder='Dribbble'
          type='url'
          icon={<FiDribbble size='1rem' />}
          {...form.getInputProps('dribbble')}
          radius='md'
        />

        <TextInput
          label='Behance'
          placeholder='Behance'
          type='url'
          icon={<BsBehance size='1rem' />}
          {...form.getInputProps('behance')}
          radius='md'
        />

        <TextInput
          label='YouTube'
          placeholder='YouTube'
          icon={<FiYoutube size='1rem' />}
          type='url'
          {...form.getInputProps('youtube')}
          radius='md'
        />
      </SimpleGrid>
      <Grid my='lg'>
        <Button type='submit' radius='xl'>
          Save Changes
        </Button>
      </Grid>
    </form>
  );
}

export default EducationAndOthersInformation;
