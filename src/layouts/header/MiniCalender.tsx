import { BackgroundImage, Center } from '@mantine/core';
import dayjs from 'dayjs';

import eventBG from '../../assets/images/background/bg-event-day.webp';

function MiniCalender() {
  const today = dayjs();

  return (
    <BackgroundImage src={eventBG} radius='sm' h={200}>
      <Center className='items-center h-full'>
        <div className='p-6 text-white text-center'>
          <h2 className='text-6xl m-0'>{today.format('DD')}</h2>
          <h2 className='text-3xl m-0 font-light'>{today.format('dddd')}</h2>
          <p className='m-0 mt-2 text-gray-400'>
            {today.format('MMMM')}, {today.format('YYYY')}
          </p>
        </div>
      </Center>
    </BackgroundImage>
  );
}

export default MiniCalender;
