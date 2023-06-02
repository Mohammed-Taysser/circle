import { Navbar, ScrollArea } from '@mantine/core';
import EventsTimeline from './header/EventsTimeline';
import MiniCalender from './header/MiniCalender';
import HeaderLink from './header/Navigation';

function Header(props: { opened: boolean }) {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!props.opened}
      width={{ sm: 300, lg: 400 }}
      className='border-0 shadow-nice z-10'
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
