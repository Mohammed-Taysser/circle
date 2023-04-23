import { Avatar, Center, Table, Tabs } from '@mantine/core';
import { VscReactions } from 'react-icons/vsc';
import { useReactsContext } from '../context/Reacts';
import { getReactIcon, uuidv4 } from '../helpers';

const ReactRows = (props: { reacts: SingleReact[]; type: string }) => {
  return (
    <>
      {props.reacts.map((react) => (
        <tr key={props.type + react.id}>
          <td>
            <Avatar src={react.avatar} radius='xl' />
          </td>
          <td>
            <div className='text-lg'>{react.fullName}</div>
          </td>
          <td>
            <div className='text-gray-500'>@{react.username}</div>
          </td>
          <td>{getReactIcon(props.type as ReactsLabel)}</td>
        </tr>
      ))}
    </>
  );
};

const AllReactsRows = (props: { reacts: Reacts }) => {
  if (!Object.entries(props.reacts).length) {
    return (
      <Center>
        <div className='text-center my-4'>
          <VscReactions className='text-3xl text-gray-400' />
          <p className='text-gray-400 my-2'>No Reacts Yet</p>
        </div>
      </Center>
    );
  }
  return (
    <>
      {Object.entries(props.reacts).map(([type, react], index) => (
        <ReactRows key={type + uuidv4()} type={type} reacts={react} />
      ))}
    </>
  );
};

function ReactsModal() {
  const { reacts } = useReactsContext();

  return (
    <Tabs color='teal' defaultValue='all'>
      <Tabs.List>
        <Tabs.Tab value='all'>All</Tabs.Tab>
        {Object.keys(reacts).map((key) => (
          <Tabs.Tab value={key} key={key}>
            {getReactIcon(key as ReactsLabel)}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      <Tabs.Panel value='all' pt='xs'>
        <Table>
          <tbody>
            <AllReactsRows reacts={reacts} />
          </tbody>
        </Table>
      </Tabs.Panel>

      {Object.entries(reacts).map(([key, value]) => (
        <Tabs.Panel value={key} key={key} pt='xs'>
          <Table>
            <tbody>
              <ReactRows type={key} reacts={value} />
            </tbody>
          </Table>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

export default ReactsModal;
