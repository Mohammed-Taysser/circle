import { AspectRatio } from '@mantine/core';

function PDF(props: { src: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <embed src={props.src} />
    </AspectRatio>
  );
}

export default PDF;
