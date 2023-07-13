import {
  Button,
  FileButton,
  FileInput,
  SimpleGrid,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import avatar from '../../assets/images/default/avatar.png';
import cover from '../../assets/images/default/cover.jpg';
import InfoBanner from '../../common/InfoBanner';

function BasicInfo() {
  const form = useForm<BasicInfoFormInitValues>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      username: 'Mohammed-taysser',
      avatar,
      cover,
    },
    validate: {
      username: (value) => (!value ? 'username is required' : null),
    },
  });

  const onFormSubmit = (values: any) => {
    console.log(values);
  };

  const onInputChange = (file:File)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        // onImageSelected(reader.result);
      };
    
  }

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <TextInput
          label='Username'
          placeholder='Username'
          icon={<MdDriveFileRenameOutline size='1rem' />}
          {...form.getInputProps('username')}
          radius='md'
        />
        <div className='flex items-end justify-end gap-3'>
          <FileButton
            onChange={(file) => form.setFieldValue('avatar', file ?? avatar)}
            accept='image/*'
          >
            {(props) => (
              <Button {...props} variant='default'>
                Update Avatar
              </Button>
            )}
          </FileButton>
          <FileButton
            onChange={(file) => form.setFieldValue('cover', file ?? cover)}
            accept='image/*'
          >
            {(props) => (
              <Button {...props} variant='default'>
                Update Cover
              </Button>
            )}
          </FileButton>
        </div>
      </SimpleGrid>

      <InfoBanner
        className='p-[35px!important] mb-[0!important] mt-20'
        avatar={
          typeof form.values.avatar === 'string'
            ? form.values.avatar
            : URL.createObjectURL(form.values.avatar)
        }
        cover={
          typeof form.values.cover === 'string'
            ? form.values.cover
            : URL.createObjectURL(form.values.cover)
        }
      />
      <Button type='submit' radius='xl' mt={30}>
        Save Changes
      </Button>
    </form>
  );
}

export default BasicInfo;
