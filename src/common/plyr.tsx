import { AspectRatio } from '@mantine/core';
import Plyr from 'plyr';
import { ReactElement, useEffect } from 'react';
import { vimeoUrlParser, youtubeUrlParser } from '../helpers';

/**
 * Plyr component
 * @usage

- use `src` to set plyr src
- use `MediaType` can be audio or video
- use `title` to set Plyr title

 * @returns {ReactElement}
 */
function PlyrViewer(props: PlyrViewerProps): ReactElement {
  useEffect(() => {
    const player = new Plyr(`.js-plyr`);

    let provider: PlyrViewerProvider = undefined;
    let src = props.src;

    if (props.src.includes('youtube')) {
      provider = 'youtube';
      src = youtubeUrlParser(props.src);
    } else if (props.src.includes('vimeo')) {
      provider = 'vimeo';
      src = vimeoUrlParser(props.src);
    }

    player.source = {
      type: props.MediaType,
      title: props.title,
      sources: [
        {
          src,
          provider,
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
