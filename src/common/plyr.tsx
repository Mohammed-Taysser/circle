import { AspectRatio } from '@mantine/core';
import Plyr from 'plyr';
import { useEffect } from 'react';

/**
 * Plyr component
 * @usage

- use `src` to set plyr src
- use `MediaType` can be audio or video
- use `title` to set Plyr title
 */
function PlyrViewer(props: PlyrViewerProps) {
  useEffect(() => {
    const player = new Plyr('.js-plyr');

    player.source = {
      type: props.MediaType,
      title: props.title,
      sources: [
        {
          src: props.src,
        },
      ],
    };

    return () => {
      player.destroy();
    };
  }, [props]);

  if (props.MediaType === 'audio') {
    return <audio className={`js-plyr plyr`}></audio>;
  }

  return (
    <AspectRatio ratio={16 / 9}>
      <video className={`js-plyr plyr`}></video>
    </AspectRatio>
  );
}

PlyrViewer.defaultProps = {
  MediaType: 'video',
  src: null,
  title: 'Title',
};

export default PlyrViewer;
