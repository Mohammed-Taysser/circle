import { Badge } from '@mantine/core';
import { POST_VARIANT } from '../../constants/post';

function PostVariant(props: { variant: PostVariant }) {
  const { variant } = props;

  const existVariant = POST_VARIANT[variant];

  if (!existVariant) {
    return null;
  }

  return <Badge color={existVariant.color}>{existVariant.label}</Badge>;
}

export default PostVariant;
