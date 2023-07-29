import useHelmet from '../../../hooks/useHelmet';

function CalenderHelp() {
  useHelmet('calenderHelp');

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
    </div>
  );
}

export default CalenderHelp;
