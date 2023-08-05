import { Accordion, Center, Timeline, useMantineTheme } from '@mantine/core';
import dayjs from 'dayjs';
import { BsCalendar2Minus } from 'react-icons/bs';
import { EVENTS } from '../../constants/dummy';

function EventsTimeline() {
  const theme = useMantineTheme();

  if (EVENTS.length === 0) {
    return (
      <Center className='text-gray-400 text-center h-40'>
        <div>
          <BsCalendar2Minus className='text-3xl' />
          <p className='m-0'>No events today!</p>
        </div>
      </Center>
    );
  }

  return (
    <Timeline color='teal' active={EVENTS.length} bulletSize={15}>
      {EVENTS.map((event) => (
        <Timeline.Item
          title={dayjs(event.date).format('hh:mm:ss A')}
          key={event.id}
        >
          <Accordion>
            <Accordion.Item value='customization' className='border-0'>
              <Accordion.Control
                className='-ml-3 pl-3 py-0'
                sx={(theme) => ({
                  '&:hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                  },
                })}
              >
                <span
                  className={`text-sm font-extrabold m-0 ${
                    theme.colorScheme === 'dark' ? '' : 'text-gray-700'
                  }`}
                >
                  {event.title}
                </span>
              </Accordion.Control>
              <Accordion.Panel
                className={`px-0 -ml-3 ${
                  theme.colorScheme === 'dark' ? '' : 'text-gray-500'
                }`}
              >
                {event.info}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default EventsTimeline;
