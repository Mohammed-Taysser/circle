import { Avatar, Badge, Button, Group, Popover } from '@mantine/core';
import React from 'react';
import { getImageURL } from '../../helpers';
import PlyrViewer from '../../common/plyr';
import Youtube from './body/viewers/Youtube';

function PostAssetsPopover(props: Readonly<{ post: Post }>) {
  const { post } = props;

  const singleAsset = (asset: PostAssets) => {
    switch (asset.type) {
      case 'avatar':
        return (
          <Group>
            <Badge>Update avatar</Badge>

            <Avatar radius='xl' src={getImageURL(asset.url ?? '')} />
          </Group>
        );

      case 'cover':
        return (
          <Group>
            <Badge>Update cover</Badge>

            <Avatar src={getImageURL(asset.url ?? '')} />
          </Group>
        );

      case 'youtube':
        return <Youtube src={asset.url ?? ''} />;

      default:
        return null;
    }
  };

  return (
    <Popover width={300} position='top' withArrow shadow='md'>
      <Popover.Target>
        <Button
          variant='light'
          disabled={post.assets.length === 0}
          size='xs'
          compact
        >
          Tap to preview
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        {post.assets.map((item) => singleAsset(item))}
      </Popover.Dropdown>
    </Popover>
  );
}

export default PostAssetsPopover;
