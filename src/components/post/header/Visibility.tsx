import { Tooltip } from '@mantine/core';
import { FiUsers } from 'react-icons/fi';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiLock } from 'react-icons/tfi';

/**
 * The `Visibility` Component returns an icon based on the visibility prop passed to
 * it, and displays a tooltip with the visibility value.
 */
function Visibility(props: { visibility: PostVisibility }) {
  let Icon = RiGlobalLine;

  switch (props.visibility) {
    case 'friends':
      Icon = FiUsers;
      break;
    case 'public':
      Icon = RiGlobalLine;
      break;
    case 'private':
      Icon = TfiLock;
      break;
  }

  return (
    <Tooltip label={props.visibility}>
      <div>
        <Icon color='gray' />
      </div>
    </Tooltip>
  );
}

export default Visibility;
