import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Skeleton from './Skeleton';

function Taps(props: TapsProps) {
  if (!props.taps.length) {
    return <></>;
  }

  const cls = (props: { isActive: boolean }) =>
    `text-lg no-underline transition p-2 inline-block border-0 border-b-2 border-solid mx-2 ${
      props.isActive
        ? 'border-b-aurora text-aurora'
        : 'text-black border-b-transparent hover:text-aurora hover:border-b-aurora'
    }`;

  return (
    <>
      <div className='bg-white p-2 nice-shadow rounded mb-10'>
        <div className=' grid grid-cols-3 md:flex md:flex-wrap'>
          {props.taps.map((tap) => (
            <NavLink to={`${tap.path}`} key={tap.path} className={cls} end>
              <tap.icon /> {tap.label}
            </NavLink>
          ))}
        </div>
      </div>

      <Suspense fallback={<Skeleton.post repeat={6} />}>
        <Outlet />
      </Suspense>
    </>
  );
}

Taps.defaultProps = {
  taps: [],
};

export default Taps;
