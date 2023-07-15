import { Navbar, ScrollArea } from '@mantine/core';
import EventsTimeline from './header/EventsTimeline';
import MiniCalender from './header/MiniCalender';
import HeaderLink from './header/Navigation';

function Header(props: HeaderProps) {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='md'
      width={{ base: 400 }}
      className={`border-0 shadow-nice z-100 duration-500 ${
        props.opened ? '' : 'left-[-100%] md:left-0'
      }`}
    >
      <Navbar.Section mx='-xs' className='mb-10'>
        <HeaderLink />
      </Navbar.Section>

      <Navbar.Section className='mb-6'>
        <MiniCalender />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} type='auto'>
        <EventsTimeline />
      </Navbar.Section>
    </Navbar>
  );
}

export default Header;
