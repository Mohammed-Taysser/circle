import { AspectRatio, LoadingOverlay } from '@mantine/core';
import { useCallback, useEffect, useRef, useState } from 'react';

function PDF(props: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const pdfRef = useRef<HTMLEmbedElement>(null);

  useEffect(() => {
    pdfRef.current?.addEventListener('load', onPdfLoad);

    return () => {
      pdfRef.current?.removeEventListener('load', onPdfLoad);
    };
  }, []);

  const onPdfLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <AspectRatio ratio={16 / 9} pos='relative'>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <embed src={props.src} ref={pdfRef} />
    </AspectRatio>
  );
}

export default PDF;
