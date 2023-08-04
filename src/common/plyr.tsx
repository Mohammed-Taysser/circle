import { AspectRatio } from '@mantine/core';
import Plyr from 'plyr';
import { useEffect } from 'react';
import { uuidv4 } from '../helpers';

/**
 * Plyr component
 * @usage

- use `src` specifies the source of the media to be played.
- use `id` pass and id to plr
- use `MediaType` specifies the type of media to be played, either 'audio' or 'video'.
- use `title` specifies the title of the media to be played.
 */
function PlyrViewer(props: PlyrViewerProps) {
  useEffect(() => {
    const player = new Plyr(`.js-${props.id}-plyr`);

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
    return <audio className={`js-${props.id}-plyr plyr`}></audio>;
  }

  return (
    <AspectRatio ratio={16 / 9}>
      <video className={`js-${props.id}-plyr plyr`}></video>
    </AspectRatio>
  );
}

PlyrViewer.defaultProps = {
  MediaType: 'video',
  src: null,
  title: 'Plyr Title',
  id: uuidv4(),
};

export default PlyrViewer;
