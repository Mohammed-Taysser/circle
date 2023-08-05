import { Aside, Button, ScrollArea, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { RiAppsLine } from 'react-icons/ri';
import ContactFriends from './aside/ContactFriends';
import UserDropdown from './navbar/UserDropdown';

function Side() {
  const theme = useMantineTheme();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Aside
        p='md'
        hiddenBreakpoint='lg'
        width={{ sm: 300, [theme.breakpoints.xxl]: 400 }}
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
              title='Toggle contacts'
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
