import {
  Avatar,
  Center,
  Modal,
  ScrollArea,
  Table,
  Tabs,
  useMantineTheme,
} from '@mantine/core';
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
  const theme = useMantineTheme();
  const { reacts, modal } = useReactsContext();

  return (
    <Modal
      opened={modal.opened}
      size='lg'
      centered
      onClose={modal.close}
      title='Reacts'
      scrollAreaComponent={ScrollArea.Autosize}
      overlayProps={{
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
    >
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
    </Modal>
  );
}

export default ReactsModal;
