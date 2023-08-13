import { Aside, Button, ScrollArea, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { RiAppsLine } from 'react-icons/ri';
import ContactFriends from './aside/ContactFriends';
import UserDropdown from './navbar/UserDropdown';

function Side() {
  const theme = useMantineTheme();
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <>
      <Aside
        hiddenBreakpoint='lg'
        width={{ base: 300, [theme.breakpoints.xxl]: 400 }}
        className={`border-0 shadow-nice z-40 pt-3 duration-500 ${
          isAsideOpen ? '' : '-right-[263px] lg:right-0'
        }`}
      >
        <div className='relative lg:hidden'>
          <div
            className={`absolute duration-500 ${
              isAsideOpen ? '-left-[50px]' : 'left-[-40px]'
            }`}
          >
            <Button
              variant='filled'
              compact
              title='Toggle contacts'
              onClick={() => setIsAsideOpen((prev) => !prev)}
            >
              <RiAppsLine className='text-base' />
            </Button>
          </div>
        </div>

        <Aside.Section grow component={ScrollArea} type='auto'>
          <ContactFriends setIsAsideOpen={setIsAsideOpen} />
        </Aside.Section>

        <Aside.Section className='md:hidden'>
          <UserDropdown className='!block' />
        </Aside.Section>
      </Aside>
    </>
  );
}

export default Side;
