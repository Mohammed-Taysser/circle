import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  Flex,
  Indicator,
  Input,
  Popover,
  ScrollArea,
  Text,
  Tooltip,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDocumentTitle } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { PiArrowBendDoubleUpLeftDuotone } from 'react-icons/pi';
import { VscSend } from 'react-icons/vsc';
import { Link, useParams } from 'react-router-dom';
import chatImage from '../../assets/images/background/chat.svg';
import Avatar from '../../common/Avatar';
import Massages from '../../components/massager/Massages';
import { MESSAGES, USER_STATUS } from '../../constants/layout';
import Async from '../../containers/Async';

function Massager() {
  useDocumentTitle('Circle | Massager');
  const theme = useMantineTheme();
  const { userId = '' } = useParams();
  const viewport = useRef<HTMLDivElement>(null);
  const user = MESSAGES.find((user) => user.id.toString() === userId);
  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });
  const form = useForm({
    initialValues: {
      msg: '',
    },
  });

  useEffect(() => {
    setState({
      loading: true,
      fulfilled: false,
      error: null,
    });

    const TimerId = setTimeout(() => {
      setState({
        loading: false,
        fulfilled: true,
        error: null,
      });
    }, 2000);

    return () => {
      clearTimeout(TimerId);
    };
  }, [userId]);

  if (!userId) {
    return (
      <div className='massager-page shadow-nice p-4 rounded bg-white h-full text-center'>
        <Flex justify='center' align='center' h='100%'>
          <div>
            <img
              src={chatImage}
              className='max-w-full md:w-96'
              alt='select contact to view chat'
            />
            <p className='text-gray-500'>select contact to view chat</p>
          </div>
        </Flex>
      </div>
    );
  }

  const onFormSubmit = (values: { msg: string }) => {
    console.log(values);
    if (viewport.current) {
      viewport.current.scrollTo({
        top: viewport.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='massager-page shadow-nice p-4 rounded bg-white h-full'>
      <Async {...state}>
        {user ? (
          <>
            <Flex className='h-20 mb-4' justify='space-between' align='center'>
              <Flex gap={15} align='center'>
                <Link to='/message' title='back to contacts'>
                  <PiArrowBendDoubleUpLeftDuotone className='text-2xl text-gray-500' />
                </Link>
                <Link to={`/profile/${userId}`} className='no-underline'>
                  <Flex align='center' justify='space-between' gap={15}>
                    <Indicator
                      color={USER_STATUS[user.status as StatusSlug].color}
                      offset={7}
                      processing
                      withBorder
                      position='bottom-end'
                    >
                      <Avatar src={user.user.avatar} alt={user.user.name} sm />
                    </Indicator>

                    <div>
                      <Text size='sm' weight={500} color='dark'>
                        {user.user.name}
                      </Text>

                      <Text
                        color='dimmed'
                        size='xs'
                        weight={user.unread ? 800 : 500}
                      >
                        {user.status}
                      </Text>
                    </div>
                  </Flex>
                </Link>
              </Flex>
              <Tooltip label='Profile'>
                <Link
                  to={`/profile/${userId}`}
                  className='w-8 h-8 flex justify-center items-center bg-aurora text-white rounded-full'
                >
                  <FiUser className='text-lg' />
                </Link>
              </Tooltip>
            </Flex>
            <ScrollArea
              type='auto'
              className='h-[calc(100vh_-_17.5rem)]'
              viewportRef={viewport}
            >
              <Massages />
            </ScrollArea>
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

                  <Popover.Dropdown p='0' className='border-0'>
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
                  <VscSend className='text-gray-600' />
                </UnstyledButton>
              </Flex>
            </form>
          </>
        ) : (
          <Flex
            justify='center'
            align='center'
            h='100%'
            className='text-center'
          >
            <div>
              <img
                src={chatImage}
                className='max-w-full md:w-96'
                alt='no chat'
              />
              <p className='text-gray-500'>
                no chat yet, be the first and say hi 🎉
              </p>
            </div>
          </Flex>
        )}
      </Async>
    </div>
  );
}

export default Massager;
