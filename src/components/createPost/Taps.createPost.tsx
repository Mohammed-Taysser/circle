import { Alert, Center, Tabs } from '@mantine/core';
import { useMemo, useState } from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Dropzone from '../../common/Dropzone';
import Editor from '../../common/Editor';
import PostVariant from './taps/PostVariant';
import { PostAudio } from './taps/PostTaps';

function TapsCreatePost(props: CreatePostTaps) {
  const [Error, setError] = useState(null);

  return (
    <Tabs value={props.activeStep.toString()}>
      <Tabs.Panel value='0'>
        <Editor editor={props.editor} />
      </Tabs.Panel>
      <Tabs.Panel value='1'>
        <PostAudio
          files={props.postAssets.files ?? []}
          onDrop={(files) =>
            props.setPostAssets((prev: any) => ({ ...prev, files }))
          }
          onError={setError}
        />
        {/* <PostVariant
          postVariant={props.postVariant}
          setPostVariant={props.setPostVariant}
          postTypeInstance={postTypeInstance}
        /> */}
        variant
      </Tabs.Panel>
      <Tabs.Panel value='2'>
        {/* <Dropzone
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
        )} */}
        assets
      </Tabs.Panel>
    </Tabs>
  );
}

export default TapsCreatePost;
