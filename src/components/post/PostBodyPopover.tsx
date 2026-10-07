import { Button, Popover } from '@mantine/core';
import parse from 'html-react-parser';

function PostBodyPopover(props: { post: Post }) {
  const { post } = props;

  return (
    <Popover width={500} position='top' withArrow shadow='md'>
      <Popover.Target>
        <Button variant='light' disabled={!post.body} size='xs' compact>
          Tap to preview
        </Button>
      </Popover.Target>

      <Popover.Dropdown>{parse(post.body)}</Popover.Dropdown>
    </Popover>
  );
}

export default PostBodyPopover;
