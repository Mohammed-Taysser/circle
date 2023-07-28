import { Flex } from '@mantine/core';
import SingleMessage from './SingleMessage';

const messages = [
  {
    id: '1',
    msg: `Hi James! Please remember to buy the food for tomorrow! I'm gonna be handling the gifts and Jake's gonna get the drinks`,
    read: true,
    date: new Date(2022, 5),
    user: {
      name: 'Mathilda Brinker',
      id: '2',
      img: '',
    },
  },
  {
    id: '2',
    msg: `Don't worry Mathilda!`,
    read: true,
    date: new Date(2022, 5),
    user: {
      name: 'Brinker',
      id: '1',
      img: '',
    },
  },
  {
    id: '3',
    msg: `I already bought everything`,
    read: true,
    date: new Date(2022, 5),
    user: {
      name: 'Brinker',
      id: '1',
      img: '',
    },
  },
  {
    id: '4',
    msg: `Hi James! Please remember to buy the food for tomorrow! I'm gonna be handling the gifts and Jake's gonna get the drinks`,
    read: false,
    date: new Date(2022, 5),
    user: {
      name: 'Mathilda Brinker',
      id: '2',
      img: '',
    },
  },
];

function Massages() {
  const userId = '1'; // TODO: replace with redux

  return (
    <>
      <Flex
        gap='md'
        justify='flex-start'
        align='flex-start'
        direction='column'
        wrap='wrap'
      >
        {messages.map((message) => (
          <SingleMessage
            {...message}
            key={message.id}
            me={message.user.id === userId}
          />
        ))}
      </Flex>
    </>
  );
}

export default Massages;
