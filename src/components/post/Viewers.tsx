import GalleryViewer from '../../common/Gallery';
import Group from '../../common/Group';
import Post from '../../common/Post';
import User from '../../common/User';
import Plyr from '../../common/plyr';
import { getPostAsset, getPostAssetUrls } from '../../helpers';
import Youtube from './body/viewers/Youtube';

function Viewers(props: PostViewersProps) {
  const { post, full } = props;

  switch (post.variant) {
    case 'audio':
      return (
        <div className='shadow-nice'>
          <Plyr src={getPostAsset(post, 'audio')?.url} MediaType='audio' />
        </div>
      );
    case 'video':
      return (
        <div className='shadow-nice'>
          <Plyr src={getPostAsset(post, 'video')?.url} MediaType='video' />
        </div>
      );
    case 'youtube':
      return <Youtube src={getPostAsset(post, 'youtube')?.url ?? ''} />;
    case 'gallery':
      return (
        <div className='post-thumbs'>
          <GalleryViewer
            galleryId={post._id}
            gallery={getPostAssetUrls(post, 'gallery')}
            full={full}
          />
        </div>
      );
    case 'cover':
      return (
        <div className='post-thumbs'>
          <GalleryViewer
            galleryId={post._id}
            gallery={getPostAssetUrls(post, 'cover')}
          />
        </div>
      );
    case 'avatar':
      return (
        <div className='post-thumbs'>
          <img
            src={getPostAsset(post, 'avatar')?.url}
            alt='user-avatar'
            className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] mx-auto block object-cover rounded-full'
          />
        </div>
      );
    case 'friend': {
      const friend = getPostAsset(post, 'friend')?.refId;

      if (!friend || typeof friend === 'string') {
        return null;
      }

      return (
        <div className='flex justify-center'>
          <User user={friend as User} />
        </div>
      );
    }
    case 'group': {
      const group = getPostAsset(post, 'group')?.refId;

      if (!group || typeof group === 'string') {
        return null;
      }

      return <Group group={group as Group} />;
    }
    case 'share':
      return (
        <Post
          className='pb-4 mb-[0!important]'
          isShared
          post={post.share.origin}
        />
      );

    default:
      return <div>{post.variant}</div>;
  }
}

export default Viewers;
