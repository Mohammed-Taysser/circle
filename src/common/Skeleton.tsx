import { Center, Loader, Skeleton as SkeletonM } from '@mantine/core';
import { uuidv4 } from '../helpers';

/**
 * Skeleton component
 * @usage

- use `repeat` number of Skeleton reparation
- use `variant` The 'Skeleton', 'Friend', 'Post', 'Badge', and 'Comment' components are defined within the function and are used as the different variants of the loading skeleton UI.
 */
// TODO: create group Skeleton
function Skeleton(props: { repeat?: number; variant?: SkeletonVariant }) {
  let Skt = Default;

  switch (props.variant) {
    case 'friend':
      Skt = Friend;
      break;
    case 'post':
      Skt = Post;
      break;
    case 'badge':
      Skt = Badge;
      break;
    case 'comment':
      Skt = Comment;
      break;
  }

  return <Skt repeat={props.repeat} />;
}

Skeleton.defaultProp = {
  repeat: 6,
  variant: '',
};

const Default = (props: { repeat?: number }) => {
  return (
    <Center h={200}>
      <Loader color='teal' size='xl' variant='dots' />
    </Center>
  );
};

const Friend = function (props: { repeat?: number }) {
  return (
    <div className='lg:grid grid-cols-2 gap-4'>
      {Array(props.repeat ?? 1)
        .fill(0)
        .map(() => (
          <div
            className='shadow-nice my-3 md:my-0 rounded-lg p-6 flex gap-3'
            key={uuidv4()}
          >
            <div>
              <SkeletonM height={125} w={125} circle />
            </div>
            <div className='flex-1 '>
              <SkeletonM height={20} mt={6} w='80%' />
              <SkeletonM height={15} mt={6} w='60%' />
              <SkeletonM height={10} mt={6} w='90%' />
              <div className='flex mt-3'>
                <SkeletonM height={30} circle />
                <SkeletonM height={30} circle />
                <SkeletonM height={30} circle />
                <SkeletonM height={30} circle />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const Post = function (props: { repeat?: number }) {
  return (
    <div className=''>
      {Array(props.repeat ?? 1)
        .fill(0)
        .map(() => (
          <div key={uuidv4()} className='mb-10 shadow-nice rounded-lg p-6 '>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <SkeletonM height={70} circle />
                <div className='flex- mx-6'>
                  <SkeletonM height={20} mt={6} w={200} />
                  <SkeletonM height={15} mt={6} w={150} />
                </div>
              </div>
              <div>
                <SkeletonM height={15} w={20} />
              </div>
            </div>
            <SkeletonM height={250} mt={20} w='100%' />
            <div className='flex items-center justify-between'>
              <div className='flex mt-3'>
                <SkeletonM height={30} circle />
                <SkeletonM height={30} circle />
                <SkeletonM height={30} circle />
                <SkeletonM height={30} circle />
              </div>
              <div>
                <SkeletonM height={30} w={100} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const Badge = function (props: { repeat?: number }) {
  return (
    <div className='lg:grid grid-cols-3 gap-4'>
      {Array(props.repeat ?? 1)
        .fill(0)
        .map(() => (
          <div
            key={uuidv4()}
            className='shadow-nice p-7 my-3 md:my-0 text-center bg-white rounded'
          >
            <div className='flex flex-col items-center justify-center'>
              <div>
                <SkeletonM height={70} circle />
              </div>
              <div className='flex flex-col justify-center w-full'>
                <SkeletonM height={20} mx='auto' mt={6} w='90%' />
                <SkeletonM height={10} mx='auto' mt={20} w='100%' />
                <SkeletonM height={10} mx='auto' mt={6} w='60%' />
              </div>
            </div>

            <div className='flex items-center justify-center mt-7'>
              <SkeletonM height={30} circle />
              <SkeletonM height={30} circle />
              <SkeletonM height={30} circle />
              <SkeletonM height={30} circle />
            </div>
          </div>
        ))}
    </div>
  );
};

const Comment = function (props: { repeat?: number }) {
  return (
    <div className=''>
      {Array(props.repeat ?? 1)
        .fill(0)
        .map(() => (
          <div key={uuidv4()} className='mb-10 shadow-nice rounded-lg p-6 '>
            <div className='flex items-center gap-4'>
              <div>
                <SkeletonM height={70} circle />
              </div>
              <div className='flex-grow'>
                <SkeletonM height={20} mt={6} w='80%' />
                <SkeletonM height={15} mt={6} w='60%' />
              </div>
            </div>

            <SkeletonM height={15} mt={20} w='100%' />
            <SkeletonM height={15} mt={2} w='100%' />
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
