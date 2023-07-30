import { Aside, Button, ScrollArea } from '@mantine/core';
import { useState } from 'react';
import { RiAppsLine } from 'react-icons/ri';
import ContactFriends from './aside/ContactFriends';

function Side() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Aside
        p='md'
        hiddenBreakpoint='lg'
        width={{ base: 350 }}
        className={`border-0 shadow-nice z-40 duration-500 ${
          isOpened ? '' : '-right-[300px] lg:right-0'
        }`}
      >
        <div className='relative lg:hidden'>
          <div
            className={`absolute duration-500 ${
              isOpened ? '-left-[50px]' : 'left-[-40px]'
            }`}
          >
            <Button
              variant='filled'
              color=''
              compact
              onClick={() => setIsOpened((prev) => !prev)}
            >
              <RiAppsLine className='text-base' />
            </Button>
          </div>
        </div>

        <ScrollArea>
          <ContactFriends />
        </ScrollArea>
      </Aside>
    </>
  );
}

export default Side;
