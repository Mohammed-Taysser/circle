import { Aside, Button, Text } from '@mantine/core';
import { useState } from 'react';
import { RiAppsLine } from 'react-icons/ri';

function Side() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Aside
        p='md'
        hiddenBreakpoint='lg'
        width={{ base: 300, lg: 350 }}
        className={`border-0 shadow-nice z-40 duration-500 ${
          isOpened ? '' : '-right-[300px] md:right-0'
        }`}
      >
        <div className='relative md:hidden'>
          <div
            className={`absolute duration-500 ${
              isOpened ? '-left-[70px]' : 'left-[-105px]'
            }`}
          >
            <Button
              variant='filled'
              color=''
              onClick={() => setIsOpened((prev) => !prev)}
            >
              <RiAppsLine className='text-lg' />
            </Button>
          </div>
        </div>

        <Text>Application sidebar</Text>
      </Aside>
    </>
  );
}

export default Side;
