import { Flex, Input, ScrollArea, UnstyledButton } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useRef, useState } from 'react';
import { VscSend } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import EmojiPicker from '../../common/EmojiPicker';
import ContactInfo from '../../components/massager/ContactInfo';
import Massages from '../../components/massager/Massages';
import NoContactSelected from '../../components/massager/NoContactSelected';
import NoMessages from '../../components/massager/NoMessages';
import { MESSAGES } from '../../constants/layout';
import Async from '../../containers/Async';
import useHelmet from '../../hooks/useHelmet';

function Massager() {
  useHelmet('chat');
  const { userId = '' } = useParams();
  const viewport = useRef<HTMLDivElement>(null);
  const messages = Math.random() > 0.5 ? MESSAGES : [];
  const user =
    MESSAGES.find((user) => user.id.toString() === userId) ?? MESSAGES[0];

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

  const onFormSubmit = (values: { msg: string }) => {
    console.log(values);
    if (viewport.current) {
      viewport.current.scrollTo({
        top: viewport.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  if (!userId) {
    return <NoContactSelected />;
  }

  return (
    <div className='massager-page shadow-nice rounded bg-white h-full'>
      <Async {...state}>
        <>
          <ContactInfo user={user} />

          {messages.length ? (
            <ScrollArea
              type='auto'
              className='h-[calc(100vh_-_17rem)] px-4'
              viewportRef={viewport}
            >
              <Massages />
            </ScrollArea>
          ) : (
            <NoMessages />
          )}

          <form
            className='h-10 bg-gray-100 dark:bg-transparent dark:border dark:border-gray-700 dark:rounded dark:border-solid px-4 mx-4 flex justify-center content-between'
            onSubmit={form.onSubmit(onFormSubmit)}
          >
            <Input
              variant='unstyled'
              placeholder='Type something ...'
              className='flex-1'
              {...form.getInputProps('msg')}
            />

            <Flex gap={10} align='center'>
              <EmojiPicker
                onEmojiSelect={(params: any) => {
                  form.setFieldValue(
                    'msg',
                    `${form.values.msg} ${params.native}`
                  );
                }}
              />

              <UnstyledButton type='submit' disabled={form.values.msg === ''}>
                <VscSend />
              </UnstyledButton>
            </Flex>
          </form>
        </>
      </Async>
    </div>
  );
}

export default Massager;
