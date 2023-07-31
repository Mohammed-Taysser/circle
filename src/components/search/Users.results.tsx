import noUsersImage from '../../assets/images/background/search/users.svg';
import User from '../../common/User';

function UsersResults(props: { users: User[] }) {
  return (
    <>
      <div className='p-4 shadow-nice bg-white my-5'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
          Users
        </h2>
      </div>

      {props.users.length > 0 ? (
        <div className='md:grid grid-cols-2 gap-4'>
          {props.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className='px-32 py-12 shadow-nice bg-white my-5 text-center'>
          <img
            src={noUsersImage}
            alt='no users found'
            className='max-w-full md:w-96'
          />
          <div className='text-gray-500 text-lg mt-3'>No users found</div>
        </div>
      )}
    </>
  );
}

export default UsersResults;
