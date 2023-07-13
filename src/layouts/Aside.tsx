import { Aside, MediaQuery, Text } from '@mantine/core';
import React from 'react';

function Side() {
  return (
    <MediaQuery smallerThan='lg' styles={{ display: 'none' }} className='z-10'>
      <Aside p='md' hiddenBreakpoint='lg' width={{ md: 200, lg: 300 }}>
        <Text>Application sidebar</Text>
      </Aside>
    </MediaQuery>
  );
}

export default Side;
