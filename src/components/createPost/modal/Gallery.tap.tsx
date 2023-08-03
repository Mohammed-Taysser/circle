import {
  Button,
  Group,
  Image,
  ScrollArea,
  SimpleGrid,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { uuidv4 } from '../../../helpers';

function GalleryTap(props: GalleryTapProps) {
  const theme = useMantineTheme();

  return (
    <>
      <Dropzone
        onDrop={props.onChange}
        maxSize={5 * 1024 ** 2} // 5mb
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          position='center'
          spacing='xl'
          className='md:min-h-[12rem] pointer-events-none'
        >
          <Dropzone.Accept>
            <IconUpload
              size='3.2rem'
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === 'dark' ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>

          <Dropzone.Reject>
            <IconX
              size='3.2rem'
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>

          <Dropzone.Idle>
            <IconPhoto size='3.2rem' stroke={1.5} />
          </Dropzone.Idle>

          <Button className='md:hidden'>Upload</Button>

          <div className='hidden md:block'>
            <Text size='xl' inline>
              Drag images here or click to select files
            </Text>
            <Text size='sm' color='dimmed' inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>

      <ScrollArea.Autosize mah='12rem'>
        <SimpleGrid
          cols={4}
          breakpoints={[{ maxWidth: 'sm', cols: 2 }]}
          mt={props.files.length > 0 ? 'xl' : 0}
        >
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
      </ScrollArea.Autosize>
    </>
  );
}

export default GalleryTap;
