import { ScrollArea } from '@mantine/core';
import { modals } from '@mantine/modals';
import React, { useContext, useMemo, useState } from 'react';

const defaultValue: ReactContextDefaultProps = {
  reacts: {},
  setReacts: (_reacts: Reacts) => {},
};

const ReactsContext = React.createContext(defaultValue);

function ReactsProvider(props: { children: React.ReactElement }) {
  const [reacts, setReacts] = useState<Reacts>({});

  const setRealReacts = (rct: Reacts) => {
    setReacts(rct);
    modals.openContextModal({
      modal: 'reacts',
      title: 'Reacts',
      innerProps: {},
      size: 'lg',
      centered: true,
      scrollAreaComponent: ScrollArea.Autosize,
    });
  };

  return (
    <ReactsContext.Provider
      value={useMemo(
        () => ({
          reacts,
          setReacts: setRealReacts,
        }),
        [reacts]
      )}
    >
      {props.children}
    </ReactsContext.Provider>
  );
}

const useReactsContext = () => {
  return useContext(ReactsContext);
};

export { ReactsContext, ReactsProvider, useReactsContext };
