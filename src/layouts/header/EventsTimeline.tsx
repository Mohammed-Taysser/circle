import { Accordion, Center, Timeline } from '@mantine/core';
import dayjs from 'dayjs';
import { BsCalendar2Minus } from 'react-icons/bs';
import { EVENTS } from '../../constants/dummy';

function EventsTimeline() {
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
          title={dayjs(event.date).format('h:mm:ss A')}
          key={event.id}
        >
          <Accordion>
            <Accordion.Item value='customization' className='border-0'>
              <Accordion.Control className='pl-0 py-0'>
                <span className='text-base font-extrabold m-0 text-gray-700'>
                  {event.title}
                </span>
              </Accordion.Control>
              <Accordion.Panel className='px-0 text-gray-500'>
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
