import { Flex } from '@mantine/core';
import chatImage from '../../assets/images/background/chat.svg';

function NoMessages() {
  return (
    <Flex
      justify='center'
      align='center'
      className='h-[calc(100vh_-_17rem)] text-center px-4'
    >
      <div>
        <img src={chatImage} className='max-w-full md:w-96' alt='no chat' />
        <p className='text-gray-500'>
          No messages yet, be the first and say hi 🎉
        </p>
      </div>
    </Flex>
  );
}

export default NoMessages;
