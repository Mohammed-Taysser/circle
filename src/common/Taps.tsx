import { ScrollArea } from '@mantine/core';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Skeleton from './Skeleton';

/**
 * Taps component
 * @usage

- use `taps` to set taps value
 */
function Taps(props: TapsProps) {
  if (!props.taps.length) {
    return <></>;
  }

  const cls = (props: { isActive: boolean }) =>
    `text-lg no-underline transition p-2 inline-block border-0 border-b-2 border-solid ${
      props.isActive
        ? 'border-b-aurora text-aurora'
        : 'text-black border-b-transparent hover:text-aurora hover:border-b-aurora'
    }`;

  return (
    <>
      <ScrollArea offsetScrollbars className='mb-10' type='always'>
        <div className='bg-white p-2 shadow-nice rounded min-w-[max-content]'>
          <div className='flex flex-wrap gap-3 '>
            {props.taps.map((tap) => (
              <NavLink to={`${tap.path}`} key={tap.path} className={cls} end>
                <tap.icon /> {tap.label}
              </NavLink>
            ))}
          </div>
        </div>
      </ScrollArea>
      <Suspense fallback={<Skeleton repeat={6} />}>
        <Outlet />
      </Suspense>
    </>
  );
}

Taps.defaultProps = {
  taps: [],
};

export default Taps;
