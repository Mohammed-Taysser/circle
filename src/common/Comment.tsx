import { Button, Textarea, Timeline } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ReactElement, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { timeToX, uuidv4 } from '../helpers';
import Avatar from './Avatar';

/**
 * Comments component
 * @usage

- use `className` to add classes to Comments wrapper
- use `comments` to pass comments info

 * @returns {ReactElement}
 */
function Comments(props: CommentProps): ReactElement {
  if (!props.comments.length) {
    return <></>;
  }

  return (
    <Timeline
      color='teal'
      className='px-10 pb-5 border-0 border-t border-solid border-t-gray-100 pt-10'
      lineWidth={3}
      bulletSize={12}
    >
      {props.comments.map((comment) => (
        <Timeline.Item
          bullet={
            <Link to={`/profile/${comment.user.id}`}>
              <Avatar sm alt='avatar' src={comment.user.avatar} />
            </Link>
          }
          className='mb-10'
          lineVariant='dashed'
          key={comment.id}
        >
          <div className='mx-5 relative -top-4'>
            <Link
              to={`/profile/${comment.user.id}`}
              className='text-black transition hover:text-aurora no-underline'
            >
              {comment.user.name}
            </Link>
            <div className=' text-gray-400 text-sm'>
              {timeToX(comment.publishAt)}
            </div>
            <div className='mt-4 text-gray-600'>{comment.body} </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

// TODO: finish write comment
/**
 * WriteComment component
 * @usage

- use `className` to add classes to wrapper

 * @returns {ReactElement}
 */
function WriteComment(props: { className?: string }): ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      comment: '',
    },
  });

  const onFormSubmit = (values: { comment: string }) => {
    console.log(values);
    const notificationId = uuidv4();

    notifications.show({
      id: notificationId,
      title: 'Publishing comment...',
      message: 'Hey there, your comment is being publish!',
      loading: true,
      withCloseButton: false,
      color: '',
      autoClose: false,
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      notifications.update({
        id: notificationId,
        title: 'Successfully publish',
        message: 'Hey there, your comment is successfully publish!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  return (
    <form
      className={`mx-7 pb-7 flex ${props.className}`}
      onSubmit={form.onSubmit(onFormSubmit)}
    >
      <Textarea
        minRows={1}
        {...form.getInputProps('comment')}
        autosize
        placeholder='Your comment!'
        className='flex-1 mr-2'
      />
      <Button
        size='md'
        type='submit'
        variant='light'
        title='publish comment'
        leftIcon={<BiSend />}
        loading={isLoading}
      >
        SEND
      </Button>
    </form>
  );
}

Comments.defaultProps = {
  className: '',
  comments: [],
};

WriteComment.defaultProps = {
  className: '',
};

export default Comments;
export { WriteComment };
