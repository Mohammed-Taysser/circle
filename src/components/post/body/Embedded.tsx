import { AspectRatio, LoadingOverlay } from '@mantine/core';
import { useCallback, useEffect, useRef, useState } from 'react';

function Embedded(props: { src: string; title?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef.current?.addEventListener('load', onIframeLoad);

    return () => {
      iframeRef.current?.removeEventListener('load', onIframeLoad);
    };
  }, []);

  const onIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <AspectRatio ratio={16 / 9} pos='relative'>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <iframe
        src={props.src}
        ref={iframeRef}
        title={props.title}
        className={`border-0 ${isLoading ? 'opacity-0' : ''}`}
      />
    </AspectRatio>
  );
}

Embedded.defaultProps = {
  title: 'Map',
  src: null,
};

export default Embedded;
