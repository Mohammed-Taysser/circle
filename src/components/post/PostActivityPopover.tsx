import { Button, Popover } from '@mantine/core';
import React from 'react';

function PostActivityPopover(props: { post: Post }) {
  const { post } = props;

  return (
    <Popover width={300} position='top' withArrow shadow='md'>
      <Popover.Target>
        <Button variant='light' disabled={!post.activity} size='xs' compact>
          Tap to preview
        </Button>
      </Popover.Target>

      <Popover.Dropdown>{post.activity}</Popover.Dropdown>
    </Popover>
  );
}

export default PostActivityPopover;
