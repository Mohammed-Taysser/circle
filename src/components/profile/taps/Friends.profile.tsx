import Friend from '../../../common/Friend';
import { FRIENDS } from '../../../constants/dummy';

function FriendsProfile() {
  return (
    <div className='md:grid grid-cols-2 gap-4'>
      {FRIENDS.map((friend) => (
        <Friend key={friend.id} user={friend} />
      ))}
    </div>
  );
}

export default FriendsProfile;
