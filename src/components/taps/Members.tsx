import Member from '../../common/Member';

function Members(props: { members: Member[] }) {
  return (
    <div className='md:grid grid-cols-2 gap-4'>
      {props.members.map((friend) => (
        <Member key={friend.id} user={friend} />
      ))}
    </div>
  );
}

export default Members;
