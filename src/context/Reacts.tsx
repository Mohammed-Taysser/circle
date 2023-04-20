import { useDisclosure } from '@mantine/hooks';
import React, { useContext, useMemo, useState } from 'react';
import ReactsModal from '../components/ReactsModal';

const defaultValue: ReactContextDefaultProps = {
  reacts: {},
  setReacts: (_reacts: Reacts) => {},
  modal: { opened: false, open: () => {}, close: () => {} },
};

const ReactsContext = React.createContext(defaultValue);

function ReactsProvider(props: { children: React.ReactElement }) {
  const [reacts, setReacts] = useState<Reacts>({});
  const [opened, { open, close }] = useDisclosure(false);

  const setRealReacts = (rct: Reacts) => {
    setReacts(rct);
    open();
  };

  return (
    <ReactsContext.Provider
      value={useMemo(
        () => ({
          reacts,
          setReacts: setRealReacts,
          modal: { opened, open, close },
        }),
        [reacts, opened]
      )}
    >
      <ReactsModal />
      {props.children}
    </ReactsContext.Provider>
  );
}

const useReactsContext = () => {
  return useContext(ReactsContext);
};

export { ReactsContext, ReactsProvider, useReactsContext };
