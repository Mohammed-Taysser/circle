import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Popover, UnstyledButton, useMantineTheme } from '@mantine/core';
import { BsEmojiSmile } from 'react-icons/bs';

/**
 * EmojiPicker component
 *
 * A popover component with an emoji picker inside.
 *
 * @usage
 * - use `onEmojiSelect` callback function that receives an object with information about the selected emoji.
 */
function EmojiPicker(props: { onEmojiSelect: (params: any) => void }) {
  const theme = useMantineTheme();

  return (
    <Popover>
      <Popover.Target>
        <UnstyledButton>
          <BsEmojiSmile title='Emoji picker' />
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown p='0' className='border-0'>
        <Picker
          data={data}
          theme={theme.colorScheme}
          onEmojiSelect={props.onEmojiSelect}
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export default EmojiPicker;
