import { Aside, Button, ScrollArea } from '@mantine/core';
import { useState } from 'react';
import { RiAppsLine } from 'react-icons/ri';
import ContactFriends from './aside/ContactFriends';
import UserDropdown from './navbar/UserDropdown';

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

        <Aside.Section grow component={ScrollArea} type='auto'>
          <ContactFriends />
        </Aside.Section>

        <Aside.Section className='md:hidden'>
          <UserDropdown className='!block' />
        </Aside.Section>
      </Aside>
    </>
  );
}

export default Side;
