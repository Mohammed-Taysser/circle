import noGroupsImage from '../../assets/images/background/search/groups.svg';
import Group from '../../common/Group';

function GroupsResults(props: { groups: Group[] }) {
  return (
    <>
      <div className='p-4 shadow-nice bg-white my-5'>
        <h2 className='first-letter:text-4xl first-letter:text-aurora text-xl font-bold my-0'>
          Group
        </h2>
      </div>

      {props.groups.length > 0 ? (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {props.groups.map((group) => (
            <Group group={group} key={group.id} colView />
          ))}
        </div>
      ) : (
        <div className='px-32 py-12 shadow-nice bg-white my-5 text-center'>
          <img
            src={noGroupsImage}
            alt='no groups found'
            className='max-w-full md:w-96'
          />
          <div className='text-gray-500 text-lg mt-3'>No groups found</div>
        </div>
      )}
    </>
  );
}

export default GroupsResults;
