import {
  DateSelectArg,
  EventApi,
  EventChangeArg,
  EventClickArg,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { LoadingOverlay, ScrollArea } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { INITIAL_EVENTS } from '../../constants/dummy';
import useHelmet from '../../hooks/useHelmet';

function Events() {
  useHelmet('events');
  const [_events, setEvents] = useState<EventApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleEvents = (events: EventApi[]) => {
    setEvents(events);
  };

  const onEventClick = (clickInfo: EventClickArg) => {
    modals.openContextModal({
      modal: 'event',
      title: '',
      innerProps: {
        event: clickInfo.event,
      },
      size: 'lg',
      centered: true,
    });
  };

  const onDateRangeSelect = (selectInfo: DateSelectArg) => {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    modals.openContextModal({
      modal: 'createEvent',
      title: 'Create Event',
      innerProps: {
        selectInfo,
      },
      size: 'lg',
      centered: true,
      classNames: {
        content: 'overflow-visible',
      },
    });
  };

  const onEventChange = (args: EventChangeArg) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully update event',
        message: 'Hey there, your event is successfully updated!',
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  return (
    <div className='events-page shadow-nice p-4 rounded mb-20 bg-white relative'>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <ScrollArea type='auto'>
        <div className='min-w-[600px]'>
          <FullCalendar
            initialEvents={INITIAL_EVENTS}
            select={onDateRangeSelect}
            eventClick={onEventClick} // show event details
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            eventsSet={handleEvents} // called after events are initialized | added | changed | removed
            // eventAdd={(data) => { console.log(data); }}
            // eventRemove={(data) => { console.log(data); }}
            eventChange={onEventChange}
            initialView='dayGridMonth'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            }}
            editable
            selectable
            selectMirror
            nowIndicator
            navLinks
            weekNumbers
            dayMaxEvents
            dayHeaderFormat={{ weekday: 'long' }}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

export default Events;
