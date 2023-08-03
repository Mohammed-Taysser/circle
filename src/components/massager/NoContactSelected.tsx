import { Flex } from '@mantine/core';
import chatImage from '../../assets/images/background/chat.svg';

function NoContactSelected() {
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

export default NoContactSelected;
