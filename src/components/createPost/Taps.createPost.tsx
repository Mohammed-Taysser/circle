import { Alert, Center, Tabs } from '@mantine/core';
import { useMemo, useState } from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Dropzone from '../../common/Dropzone';
import Editor from '../../common/Editor';
import { CREATE_POST_TYPES } from '../../helpers';

function TapsCreatePost(props: CreatePostTaps) {
  const [dropzoneError, setDropzoneError] = useState('');

  const postTypeInstance = useMemo(() => {
    return CREATE_POST_TYPES.find(
      (variant) => variant.value === props.postVariant
    );
  }, [props.postVariant]);

  return (
    <Tabs value={props.activeStep.toString()}>
      <Tabs.Panel value='0'>
        <Editor editor={props.editor} />
      </Tabs.Panel>
      <Tabs.Panel value='1'>
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
          <p>{postTypeInstance?.msg}</p>
        </Center>
      </Tabs.Panel>
      <Tabs.Panel value='2'>
        <Dropzone
          files={props.files}
          onDrop={props.setFiles}
          maxSize={postTypeInstance?.dropzone?.maxSize}
          accept={postTypeInstance?.dropzone?.accept}
          maxFiles={postTypeInstance?.dropzone?.maxFiles}
          onError={(error: Error) => setDropzoneError(JSON.stringify(error))}
          icon={postTypeInstance?.dropzone?.icon}
          title={postTypeInstance?.dropzone?.title}
          subtitle={postTypeInstance?.dropzone?.subtitle}
          preview={postTypeInstance?.dropzone?.preview}
          multiple={postTypeInstance?.dropzone?.multiple}
        />

        {dropzoneError && (
          <Alert
            icon={<MdOutlineErrorOutline />}
            title='Comedown, there is an error!'
            color='red'
          >
            {JSON.stringify(dropzoneError)}
          </Alert>
        )}
      </Tabs.Panel>
    </Tabs>
  );
}

export default TapsCreatePost;
