import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  Alert,
  Flex,
  Input,
  Loader,
  Popover,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useRef, useState } from 'react';
import { BsEmojiSmile, BsInfoCircle } from 'react-icons/bs';
import { VscSend } from 'react-icons/vsc';

function WriteComment() {
  const theme = useMantineTheme();
  const isLoggedIn = localStorage.getItem('isLogin'); // TODO: replace with redux
  const [isLoading, setIsLoading] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);

  const form = useForm({
    initialValues: {
      msg: '',
    },
  });

  const onFormSubmit = (values: { msg: string }) => {
    console.log(values);
    if (viewport.current) {
      viewport.current.scrollTo({
        top: viewport.current.scrollHeight,
        behavior: 'smooth',
      });
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      form.setFieldValue('msg', '');

      notifications.show({
        title: 'Successfully publish',
        message: 'Hey there, your comment is successfully publish!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  if (!isLoggedIn) {
    return (
      <Alert icon={<BsInfoCircle />} color='red'>
        To level a comment you must be login first!
      </Alert>
    );
  }

  return (
    <>
      <form
        className='h-10 bg-gray-100 px-4 flex justify-center content-between'
        onSubmit={form.onSubmit(onFormSubmit)}
      >
        <Input
          variant='unstyled'
          placeholder='Type something ...'
          className='flex-1'
          {...form.getInputProps('msg')}
        />
        <Flex gap={10} align='center'>
          <Popover position='bottom-end'>
            <Popover.Target>
              <UnstyledButton>
                <BsEmojiSmile className='text-gray-600' />
              </UnstyledButton>
            </Popover.Target>

            <Popover.Dropdown
              p='0'
              className='border-0 z-[10001!important] overflow-auto'
            >
              <Picker
                data={data}
                theme={theme.colorScheme}
                onEmojiSelect={(params: any) => {
                  form.setFieldValue(
                    'msg',
                    `${form.values.msg} ${params.native}`
                  );
                }}
              />
            </Popover.Dropdown>
          </Popover>
          <UnstyledButton type='submit' disabled={form.values.msg === ''}>
            {isLoading ? (
              <Loader color='' size='xs' />
            ) : (
              <VscSend className='text-gray-600' />
            )}
          </UnstyledButton>
        </Flex>
      </form>
    </>
  );
}

export default WriteComment;
