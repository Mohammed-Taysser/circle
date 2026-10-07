import { Badge } from '@mantine/core';
import { POST_VISIBILITY } from '../../constants/post';

function PostVisibility(props: { visibility: PostVisibility }) {
  const { visibility } = props;

  const existVisibility = POST_VISIBILITY[visibility];

  if (!existVisibility) {
    return null;
  }

  return <Badge color={existVisibility.color}>{existVisibility.label}</Badge>;
}

export default PostVisibility;
