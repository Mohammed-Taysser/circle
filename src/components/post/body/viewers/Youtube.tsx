import Plyr from 'plyr';
import { useEffect } from 'react';

/**
 * Youtube component
 * @usage

- use `src` to set Youtube src
- use `title` to set Youtube title
 */
function Youtube(props: { src: string; title?: string }) {
  useEffect(() => {
    const player = new Plyr('.js-plyr');

    player.source = {
      type: 'video',
      title: props.title,
      sources: [
        {
          src: props.src,
          provider: 'youtube',
        },
      ],
    };

    return () => {
      player.destroy();
    };
  }, [props]);

  return (
    <div
      className='js-plyr'
      data-plyr-provider='youtube'
      data-plyr-embed-id={props.src}
    ></div>
  );
}

Youtube.defaultProps = {
  title: 'Youtube video',
};

export default Youtube;
