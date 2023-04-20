import Post from '../../../common/Post';
import { POSTS } from '../../../constants/dummy';

function TimelineProfile() {
  return (
    <div>
      {POSTS.timeline.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default TimelineProfile;
