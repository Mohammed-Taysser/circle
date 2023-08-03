import { Button, FileButton, SimpleGrid, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { useMemo } from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import avatar from '../../assets/images/default/avatar.png';
import cover from '../../assets/images/default/cover.jpg';
import InfoBanner from '../../common/InfoBanner';

// TODO: replace with redux
const initialValues = {
  username: 'Mohammed-taysser',
  avatar,
  cover,
};

function BasicInfo(props: SettingTapProps) {
  const form = useForm<BasicInfoFormInitValues>({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues,
    validate: {
      username: isNotEmpty('username is required'),
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

  const onInputChange = (fieldName: string, file: null | File) => {
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const avatarConfig = {
          cropShape: 'round',
          aspect: 1,
        };

        const coverConfig = {
          aspect: 5 / 3,
        };

        modals.openContextModal({
          modal: 'cropper',
          title: `Crop ${fieldName}`,
          innerProps: {
            image: reader.result,
            onCropComplete,
            title: fieldName,
            ...(fieldName === 'avatar' && avatarConfig),
            ...(fieldName === 'cover' && coverConfig),
          },
          size: 'md',
          centered: true,
        });
      };
    }
  };

  const onCropComplete = (image: File) => {
    form.setFieldValue(image.name, image);
  };

  return (
    <form onSubmit={form.onSubmit(onFormSubmit)}>
      <TextInput
        label='Username'
        name='username'
        placeholder='Username'
        className='mb-3'
        icon={<MdDriveFileRenameOutline />}
        {...form.getInputProps('username')}
      />

      <SimpleGrid breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <FileButton
          onChange={(file) => onInputChange('avatar', file)}
          accept='image/*'
        >
          {(props) => (
            <Button {...props} variant='default'>
              Update Avatar
            </Button>
          )}
        </FileButton>
        <FileButton
          onChange={(file) => onInputChange('cover', file)}
          accept='image/*'
        >
          {(props) => (
            <Button {...props} variant='default'>
              Update Cover
            </Button>
          )}
        </FileButton>
      </SimpleGrid>

      <InfoBanner
        className='p-[35px!important] mb-[0!important] mt-8 md:mt-10'
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

      <Button
        type='submit'
        disabled={!hasChanges}
        loading={props.isLoading}
        radius='xl'
        mt={30}
      >
        Save Changes
      </Button>
    </form>
  );
}

export default BasicInfo;
