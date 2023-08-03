import { Center, Table, Tabs, ThemeIcon } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useEffect, useState } from 'react';
import { VscReactions } from 'react-icons/vsc';
import Avatar from '../../common/Avatar';
import { POST_REACTS } from '../../constants/dummy';
import { REACT_ICONS } from '../../constants/post';
import Async from '../../containers/Async';
import { uuidv4 } from '../../helpers';

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
      {Object.entries(reacts).length > 0 ? (
        <Tabs color='teal' defaultValue='all'>
          <Tabs.List>
            <Tabs.Tab value='all'>All</Tabs.Tab>
            {Object.keys(reacts).map((key) => (
              <Tabs.Tab value={key} key={key}>
                <ReactIcon label={key as PostReactsLabel} />
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <Tabs.Panel value='all'>
            <Table>
              <tbody>
                {Object.entries(reacts).map(([type, react]) => (
                  <ReactRows key={type + uuidv4()} type={type} reacts={react} />
                ))}
              </tbody>
            </Table>
          </Tabs.Panel>

          {Object.entries(reacts).map(([key, value]) => (
            <Tabs.Panel value={key} key={key}>
              <Table>
                <tbody>
                  <ReactRows type={key} reacts={value} />
                </tbody>
              </Table>
            </Tabs.Panel>
          ))}
        </Tabs>
      ) : (
        <Center h={200}>
          <div className='text-center text-gray-400'>
            <VscReactions className='text-4xl' />
            <p className='text-gray-400 my-2'>No Reacts Yet</p>
          </div>
        </Center>
      )}
    </Async>
  );
}

const ReactIcon = (props: { label: PostReactsLabel }) => {
  const info = REACT_ICONS[props.label];

  return (
    <ThemeIcon color={info.color} size='lg' variant='light'>
      <info.icon className='text-lg' />
    </ThemeIcon>
  );
};

const ReactRows = (props: { reacts: SinglePostReact[]; type: string }) => {
  return (
    <>
      {props.reacts.map((react) => (
        <tr key={props.type + react.id}>
          <td className='py-[12px!important]'>
            <Avatar src={react.avatar} sm alt={`${react.fullName}-avatar`} />
          </td>
          <td>
            <div className='text-sm md:text-base'>{react.fullName}</div>
            <div className='text-xs md:text-sm text-gray-500'>
              @{react.username}
            </div>
          </td>
          <td>
            <ReactIcon label={props.type as PostReactsLabel} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default ReactsModal;
