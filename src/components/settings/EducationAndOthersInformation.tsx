import { Button, Grid, SimpleGrid, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useMemo } from 'react';
import { BsBehance } from 'react-icons/bs';
import { FiDribbble, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdDriveFileRenameOutline, MdOutlineWorkOutline } from 'react-icons/md';
import { RiBuilding2Line } from 'react-icons/ri';

// TODO: replace with redux
const initialValues = {
  birthday: '',
  education: '',
  institution: '',
  employment: '',
  facebook: '',
  twitter: '',
  dribbble: '',
  behance: '',
  youtube: '',
};

function EducationAndOthersInformation(props: SettingTapProps) {
  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues,
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
        <DateInput
          label='BirthDay'
          valueFormat='DD/MM/YYYY'
          allowDeselect
          weekendDays={[]}
          placeholder='BirthDay'
          icon={<MdDriveFileRenameOutline />}
          {...form.getInputProps('birthday')}
        />

        <TextInput
          label='Education'
          placeholder='Education'
          icon={<HiOutlineAcademicCap />}
          name='education'
          {...form.getInputProps('education')}
        />

        <TextInput
          label='Institution'
          placeholder='Institution'
          icon={<RiBuilding2Line />}
          name='institution'
          {...form.getInputProps('institution')}
        />

        <TextInput
          label='Employment'
          placeholder='Employment'
          icon={<MdOutlineWorkOutline />}
          name='employment'
          {...form.getInputProps('employment')}
        />

        <TextInput
          label='Facebook'
          type='url'
          placeholder='Facebook'
          icon={<FiFacebook />}
          name='facebook'
          {...form.getInputProps('facebook')}
        />

        <TextInput
          label='Twitter'
          type='url'
          placeholder='Twitter'
          icon={<FiTwitter />}
          name='twitter'
          {...form.getInputProps('twitter')}
        />

        <TextInput
          label='Dribbble'
          placeholder='Dribbble'
          type='url'
          icon={<FiDribbble />}
          name='dribbble'
          {...form.getInputProps('dribbble')}
        />

        <TextInput
          label='Behance'
          placeholder='Behance'
          type='url'
          icon={<BsBehance />}
          name='behance'
          {...form.getInputProps('behance')}
        />

        <TextInput
          label='YouTube'
          placeholder='YouTube'
          icon={<FiYoutube />}
          type='url'
          name='youtube'
          {...form.getInputProps('youtube')}
        />
      </SimpleGrid>
      <Grid my='lg'>
        <Button
          type='submit'
          disabled={!hasChanges}
          loading={props.isLoading}
          radius='xl'
        >
          Save Changes
        </Button>
      </Grid>
    </form>
  );
}

export default EducationAndOthersInformation;
