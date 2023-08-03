import { Input, Tabs } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import { RxLinkBreak2 } from 'react-icons/rx';
import FileTap from './File.tap';
import GalleryTap from './Gallery.tap';
import YoutubeTap from './Youtube.tap';

function TapsModal(props: ModalTapsProp) {
  const { form, icon } = props;

  const onAssetsChange = (key: string, file: File | null | FileWithPath[]) => {
    form.setFieldValue('assets', {
      [key]: file,
    });
  };

  return (
    <Tabs value={form.values.variant} mt={20}>
      <Tabs.Panel value='audio'>
        <FileTap
          onChange={(file) => onAssetsChange('audio', file)}
          icon={icon}
          file={form.values.assets?.audio ?? null}
          accept='audio/*'
          label='audio'
        />
      </Tabs.Panel>

      <Tabs.Panel value='video'>
        <FileTap
          onChange={(file) => onAssetsChange('video', file)}
          icon={icon}
          file={form.values.assets?.video ?? null}
          accept='video/*'
          label='video'
        />
      </Tabs.Panel>

      <Tabs.Panel value='pdf'>
        <FileTap
          onChange={(file) => onAssetsChange('pdf', file)}
          icon={icon}
          file={form.values.assets?.pdf ?? null}
          accept='application/pdf'
          label='PDF'
        />
      </Tabs.Panel>

      <Tabs.Panel value='youtube'>
        <Input
          icon={<RxLinkBreak2 />}
          placeholder='Youtube URL'
          name='youtube'
          value={form.values.assets.youtube}
          type='url'
          onChange={(evt) =>
            form.setFieldValue('assets.youtube', evt.target.value)
          }
        />

        <YoutubeTap url={form.values.assets?.youtube ?? ''} />
      </Tabs.Panel>

      <Tabs.Panel value='gallery'>
        <GalleryTap
          files={form.values.assets?.gallery ?? []}
          onChange={(files) => onAssetsChange('gallery', files)}
        />
      </Tabs.Panel>
    </Tabs>
  );
}

export default TapsModal;
