import { Avatar, Center, Table, Tabs } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { VscReactions } from 'react-icons/vsc';
import { POST_REACTS } from '../constants/dummy';
import { REACT_ICONS } from '../constants/reacts';
import Async from '../containers/Async';
import { uuidv4 } from '../helpers';

function ReactsModal(props: ContextModalProps<ReactModalInnerProps>) {
  const reacts = Math.random() < 0.5 ? POST_REACTS : [];

  const [state, setState] = useState({
    loading: true,
    fulfilled: false,
    error: null,
  });

  useEffect(() => {
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
  }, []);

  return (
    <Async {...state}>
      <Tabs color='teal' defaultValue='all'>
        <Tabs.List>
          <Tabs.Tab value='all'>All</Tabs.Tab>
          {Object.keys(reacts).map((key) => (
            <Tabs.Tab value={key} key={key}>
              <ReactIcon label={key as PostReactsLabel} />
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
    </Async>
  );
}

const ReactIcon = (props: { label: PostReactsLabel }) => {
  let info = REACT_ICONS[props.label];

  return (
    <Avatar color={info.color} radius='sm'>
      <info.icon className='text-lg' />
    </Avatar>
  );
};

const ReactRows = (props: { reacts: SinglePostReact[]; type: string }) => {
  return (
    <>
      {props.reacts.map((react) => (
        <tr key={props.type + react.id}>
          <td>
            <Avatar src={react.avatar} radius='xl' />
          </td>
          <td>
            <div className='text-base'>{react.fullName}</div>
          </td>
          <td>
            <div className='text-gray-500'>@{react.username}</div>
          </td>
          <td>
            <ReactIcon label={props.type as PostReactsLabel} />
          </td>
        </tr>
      ))}
    </>
  );
};

const AllReactsRows = (props: { reacts: PostReacts }) => {
  if (!Object.entries(props.reacts).length) {
    return (
      <tr>
        <td>
          <Center>
            <div className='text-center my-4'>
              <VscReactions className='text-3xl text-gray-400' />
              <p className='text-gray-400 my-2'>No Reacts Yet</p>
            </div>
          </Center>
        </td>
      </tr>
    );
  }

  return (
    <>
      {Object.entries(props.reacts).map(([type, react]) => (
        <ReactRows key={type + uuidv4()} type={type} reacts={react} />
      ))}
    </>
  );
};

export default ReactsModal;
