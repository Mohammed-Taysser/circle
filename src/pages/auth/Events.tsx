import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventContentArg,
  EventInput,
  formatDate,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { ScrollArea } from '@mantine/core';
import { modals } from '@mantine/modals';
import { uuidv4 } from '../../helpers';
import { notifications } from '@mantine/notifications';
import { useDocumentTitle } from '@mantine/hooks';

let todayStr = new Date().toISOString().replace(/T.*$/, '');

const INITIAL_EVENTS: EventInput[] = [
  {
    id: '1',
    title: 'All-day event',
    start: todayStr,
    timeText: '12p',
    allDay: true,
  },
  {
    id: '2',
    title: 'All-day event',
    start: todayStr,
    timeText: '12p',
    allDay: true,
  },
  {
    title: 'event1',
    start: '2023-05-01',
    id: '3',
  },
  {
    id: '4',
    title: 'event2',
    start: '2023-05-05',
    allDay: false,
    end: '2023-05-07',
  },
  {
    id: '5',
    title: 'event3',
    start: '2023-05-26T12:30:00',
    allDay: false, // will make the time show
  },
];

function Events() {
  useDocumentTitle('Circle | Events');
  const [events, setEvents] = useState<EventApi[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleEvents = (events: EventApi[]) => {
    setEvents(events);
  };

  const onEventClick = (clickInfo: EventClickArg) => {
    modals.openContextModal({
      modal: 'events',
      title: '',
      innerProps: {
        event: clickInfo.event,
      },
      size: 'lg',
      scrollAreaComponent: ScrollArea.Autosize,
      centered: true,
    });
  };

  const onDateRangeSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    const notificationId = uuidv4();

    calendarApi.unselect(); // clear date selection

    if (title) {
      notifications.show({
        id: notificationId,
        title: 'Creating event...',
        message: 'Hey there, your event is being creating!',
        loading: true,
        withCloseButton: false,
        color: '',
        autoClose: false,
      });

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);

        notifications.update({
          id: notificationId,
          title: 'Successfully create',
          message: 'Hey there, your event is successfully created!',
          loading: false,
          withCloseButton: true,
          autoClose: true,
        });
      }, 2000);

      calendarApi.addEvent({
        id: notificationId,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    } else {
      notifications.show({
        title: 'Empty Title',
        message:
          'Hey there, your title is empty. please write something to publish',
        loading: false,
        withCloseButton: true,
        color: '',
        autoClose: true,
      });
    }
  };

  return (
    <div className='events-page shadow-nice p-4 rounded mb-20 bg-white'>
      <div className='mb-10'>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
          <li>Click on day number to show day events</li>
          <li>Click on week number to show week events</li>
        </ul>
      </div>
      <ScrollArea type='auto' offsetScrollbars>
        <div className='min-w-[600px]'>
          <FullCalendar
            initialEvents={INITIAL_EVENTS}
            select={onDateRangeSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={onEventClick}
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin,
              listPlugin,
            ]}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventChange={function(){}}
            eventRemove={function(){}}
            eventAdd={function (data) {
              console.log(data);
            }}
            */
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
            dayMaxEvents
            weekNumbers
            dayHeaderFormat={{ weekday: 'long' }}
          />
        </div>
      </ScrollArea>
    </div>
  );
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

export default Events;
