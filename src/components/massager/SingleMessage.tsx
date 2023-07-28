import { Flex } from '@mantine/core';
import { timeToX } from '../../helpers';
import { BsCheck2All } from 'react-icons/bs';

function SingleMessage(props: SingleMessageProps) {
  return (
    <Flex justify={props.me ? 'flex-end' : 'flex-start'} w='100%'>
      <div className='justify-end'>
        <div
          className={`p-2 px-3 rounded-xl md:max-w-[30vw] ${
            props.me ? 'bg-aurora text-white' : 'bg-slate-100 text-gray-700'
          }`}
        >
          {props.msg}
        </div>
        <small
          className={`text-gray-400 flex gap-2 items-center ${
            props.me ? 'justify-end' : 'justify-start'
          }`}
        >
          <BsCheck2All
            className={`text-base ${props.read ? 'text-aurora' : ''}`}
          />
          <span>{timeToX(props.date)}</span>
        </small>
      </div>
    </Flex>
  );
}

export default SingleMessage;
