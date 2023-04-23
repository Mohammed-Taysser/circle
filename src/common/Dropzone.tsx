import { Group, Image, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { ReactElement } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import { uuidv4 } from '../helpers';
import PlyrViewer from './plyr';

/**
 * Dropzone component
 * @usage

- use `className` to add classes to banner wrapper
- use `icon` to change dropzone icon
- use `files` to set init files
- use `title` to set Dropzone title
- use `subtitle` to set Dropzone subtitle
- use `accept` to set Dropzone accepted file types
- use `preview` to set if preview the images or not
- use `maxSize` to set Dropzone maxSize
- use `onDrop` to set Dropzone onDrop function
- use `onError` to set Dropzone onError function

 * @returns {ReactElement}
 */
function DropzoneC(props: DropzoneProps): ReactElement {
  return (
    <>
      <Dropzone
        onDrop={props.onDrop}
        maxSize={props.maxSize}
        accept={props.accept}
        maxFiles={props.maxFiles}
        onError={props.onError}
        className={`mb-10 ${props.className}`}
        multiple={props.multiple}
      >
        <Group
          position='center'
          className='min-h-[200px] pointer-events-none'
          spacing='xl'
        >
          <Dropzone.Idle>
            <props.icon className='text-4xl' />
          </Dropzone.Idle>

          <div>
            <Text size='xl' inline>
              {props.title}
            </Text>
            <Text size='sm' color='dimmed' inline mt={7}>
              {props.subtitle}
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Viewer files={props.files} accept={props.accept} />
    </>
  );
}

const Viewer = (props: { files: FileWithPath[]; accept: string }) => {
  if (props.files.length === 1) {
    const sourceUrl = URL.createObjectURL(props.files[0]);

    if (props.accept[0].startsWith('video')) {
      return (
        <div>
          <PlyrViewer src={sourceUrl} MediaType='video' />
        </div>
      );
    } else if (props.accept[0].startsWith('audio')) {
      return (
        <div>
          <PlyrViewer src={sourceUrl} MediaType='audio' />
        </div>
      );
    }

    return (
      <Image
        key={uuidv4()}
        src={sourceUrl}
        className='object-cover'
        width='100%'
        height='300px'
        imageProps={{
          onLoad: () => URL.revokeObjectURL(sourceUrl),
        }}
      />
    );
  }

  return (
    <ScrollArea
      h={props.files.length ? 400 : undefined}
      type='auto'
      offsetScrollbars
    >
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {props.files.map((file) => {
          const imageUrl = URL.createObjectURL(file);
          return (
            <Image
              key={uuidv4()}
              src={imageUrl}
              imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
          );
        })}
      </SimpleGrid>
    </ScrollArea>
  );
};

DropzoneC.defaultProps = {
  onDrop: () => {},
  onError: () => {},
  accept: [],
  icon: IoImageOutline,
  title: 'Drag images here or click to select files',
  subtitle: 'Attach as many files as you like, each file should not exceed 5mb',
  className: '',
  preview: false,
  maxFiles: undefined,
  maxSize: undefined,
  multiple: false,
};

export default DropzoneC;
