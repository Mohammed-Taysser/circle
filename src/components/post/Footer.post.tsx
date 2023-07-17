import { ScrollArea } from '@mantine/core';
import { modals } from '@mantine/modals';
import { TbMessage2Bolt } from 'react-icons/tb';
import PostReacts from './footer/PostReacts';

function PostFooter(props: { post: Post }) {
  const onCommentBtnClick = () => {
    modals.openContextModal({
      modal: 'comments',
      title: '',
      innerProps: {},
      size: 'lg',
      centered: true,
      scrollAreaComponent: ScrollArea.Autosize,
    });
  };

  return (
    <div className='post-footer'>
      <div className='post-meta-wrap'>
        <PostReacts
          reacts={props.post.reacts.reacts}
          count={props.post.reacts.count}
        />
        <div className='post-meta activity-meta'>
          <div
            className='meta-text flex items-center cursor-pointer'
            onClick={onCommentBtnClick}
          >
            <TbMessage2Bolt className='text-lg mr-1' />
            <span>{props.post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

PostFooter.defaultProps = {
  post: null,
  full: false,
};

export default PostFooter;
