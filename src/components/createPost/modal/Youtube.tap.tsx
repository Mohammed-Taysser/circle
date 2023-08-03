import { Alert, Anchor, Flex, Image, Loader, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

function YoutubeTap(props: { url: string }) {
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<YoutubeMetaData | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setMeta(null);

    if (props.url) {
      const controller = new AbortController();
      const signal = controller.signal;

      setLoading(true);

      const getMetaData = async () => {
        await fetch(`http://youtube.com/oembed?url=${props.url}&format=json`, {
          signal,
        })
          .then(async (response) => {
            if (response.ok) {
              const meta = await response.json();
              setMeta(meta);
            } else {
              throw response.statusText;
            }
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      };

      getMetaData();

      return () => {
        controller.abort();
      };
    }
  }, [props]);

  if (loading) {
    return (
      <Flex justify='center' align='center' h={80}>
        <Loader variant='dots' />
      </Flex>
    );
  }

  if (error) {
    return (
      <Alert color='red'>
        <Text color='red'>{error}</Text>
      </Alert>
    );
  }

  if (meta)
    return (
      <Flex gap={10} my={10}>
        <Anchor href={props.url}>
          <Image
            width={120}
            height={80}
            src={meta.thumbnail_url}
            alt={meta.title}
            withPlaceholder
          />
        </Anchor>

        <Flex direction='column' gap={5}>
          <Anchor href={props.url} className='hover:no-underline' color='dark'>
            {meta.title}
          </Anchor>
          <Anchor
            href={meta.author_url}
            className='hover:no-underline'
            color='dimmed'
            size='sm'
          >
            {meta.author_name}
          </Anchor>
        </Flex>
      </Flex>
    );

  return <></>;
}

export default YoutubeTap;
