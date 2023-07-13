import { Center } from '@mantine/core';
import { useMemo } from 'react';
import { CREATE_POST_TYPES } from '../../../helpers';

function PostVariant(props: CreatePostVariantProps) {

  return (
    <>
      <div className={`mb-10 gap-4 md:flex justify-center`}>
        {CREATE_POST_TYPES.map((variant) => (
          <div className='checkbox-12 ' key={variant.value}>
            <label className='checkbox-wrapper'>
              <input
                type='radio'
                className='checkbox-input'
                name='post-variant'
                value={variant.value}
                onChange={(evt) => props.setPostVariant(evt.target.value)}
                checked={props.postVariant === variant.value}
              />
              <span className='checkbox-tile'>
                <span className='checkbox-icon'>
                  <variant.icon />
                </span>
                <span className='checkbox-label'>{variant.label}</span>
              </span>
            </label>
          </div>
        ))}
      </div>
      <Center className='mb-20 text-gray-500'>
        <p>{props.postTypeInstance?.msg}</p>
      </Center>
    </>
  );
}

export default PostVariant;
