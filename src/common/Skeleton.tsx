import { Skeleton as SkeletonM } from '@mantine/core';
import { uuidv4 } from '../helpers';

/**
 * Skeleton component
 * @usage

support 3 type:

- post
- badge
- friend
- comment

 * @returns {React.ReactElement}
 */
const Skeleton = {
  friend: function (props: { repeat?: number }) {
    return (
      <div className='lg:grid grid-cols-2 gap-4'>
        {Array(props.repeat || 1)
          .fill(0)
          .map(() => (
            <div className='nice-shadow rounded-lg p-6 flex' key={uuidv4()}>
              <SkeletonM height={125} circle />
              <div className='flex-1 mx-6'>
                <SkeletonM height={20} mt={6} w={200} />
                <SkeletonM height={15} mt={6} w={100} />
                <SkeletonM height={10} mt={6} w={250} />
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
  },
  post: function (props: { repeat?: number }) {
    return (
      <div className=''>
        {Array(props.repeat || 1)
          .fill(0)
          .map(() => (
            <div key={uuidv4()} className='mb-10 nice-shadow rounded-lg p-6 '>
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
  },
  badge: function (props: { repeat?: number }) {
    return (
      <div className='lg:grid grid-cols-3 gap-4'>
        {Array(props.repeat || 1)
          .fill(0)
          .map(() => (
            <div
              key={uuidv4()}
              className='nice-shadow p-7 text-center bg-white rounded'
            >
              <div className='flex flex-col items-center justify-center'>
                <div>
                  <SkeletonM height={70} circle />
                </div>
                <div className='flex-col justify-center'>
                  <SkeletonM height={20} mt={6} w={200} />
                  <SkeletonM height={10} mt={20} w={200} />
                  <SkeletonM height={10} mt={6} mx='auto' w={150} />
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
  },
  comment: function (props: { repeat?: number }) {
    return (
      <div className=''>
        {Array(props.repeat || 1)
          .fill(0)
          .map(() => (
            <div key={uuidv4()} className='mb-10 nice-shadow rounded-lg p-6 '>
              <div className='flex items-center'>
                <SkeletonM height={70} circle />
                <div className='flex- mx-6'>
                  <SkeletonM height={20} mt={6} w={200} />
                  <SkeletonM height={15} mt={6} w={150} />
                </div>
              </div>

              <SkeletonM height={15} mt={20} w='100%' />
              <SkeletonM height={15} mt={2} w='100%' />
            </div>
          ))}
      </div>
    );
  },
  // TODO: create group Skeleton
};

export default Skeleton;
