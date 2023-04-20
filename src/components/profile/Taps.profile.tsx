import { NavLink, Outlet } from 'react-router-dom';
import { TAPS } from '../../helpers';
import { Suspense } from 'react';

function TapsProfile() {
  const cls = (props: { isActive: boolean }) =>
    `text-lg no-underline transition p-2 inline-block border-0 border-b-2 border-solid mx-2 ${
      props.isActive
        ? 'border-b-aurora text-aurora'
        : 'text-black border-b-transparent hover:text-aurora hover:border-b-aurora'
    }`;

  return (
    <>
      <div className='bg-white p-2 nice-shadow rounded mb-6'>
        <div className=' grid grid-cols-3 md:flex md:flex-wrap'>
          {TAPS.map((tap) => (
            <NavLink
              to={`/profile/10/${tap.path}`}
              key={tap.path}
              className={cls}
            >
              <tap.icon /> {tap.label}
            </NavLink>
          ))}
        </div>
      </div>

      <Suspense fallback={'profile-loading'}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default TapsProfile;
