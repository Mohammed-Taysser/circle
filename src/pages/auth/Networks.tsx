import noFriendsRequest from '../../assets/images/background/no-friend-request.svg';
import User from '../../common/User';
import { FRIENDS } from '../../constants/dummy';
import useHelmet from '../../hooks/useHelmet';

function Networks() {
  useHelmet('network');
  const users = Math.random() > 0.5 ? FRIENDS : [];

  return (
    <>
      <div className='p-4 shadow-nice bg-white'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
          Requests
        </h2>
      </div>

      {users.length > 0 ? (
        <div className='md:grid grid-cols-2 gap-4'>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className='px-32 py-12 shadow-nice bg-white my-5 text-center'>
          <img
            src={noFriendsRequest}
            alt='no requests found'
            className='max-w-full md:w-96'
          />
          <div className='text-gray-500 text-lg mt-3'>No requests found</div>
        </div>
      )}
    </>
  );
}

export default Networks;
