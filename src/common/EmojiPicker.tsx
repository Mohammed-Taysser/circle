import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Popover, UnstyledButton, useMantineTheme } from '@mantine/core';
import { BsEmojiSmile } from 'react-icons/bs';

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
