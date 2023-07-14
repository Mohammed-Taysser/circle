import { Anchor, Divider, Popover } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSmile, BsTextWrap } from 'react-icons/bs';
import { Link } from 'react-router-dom';

/**
 * Editor component
 * @usage

- use `editor` pass editor instance
- use `dev` to hide help url
- use `className` to add className to editor wrapper
 */
function Editor(props: EditorProps) {
  const { editor } = props;

  return (
    <div className={props.className}>
      <RichTextEditor editor={editor}>
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Code />
            <RichTextEditor.CodeBlock />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.ColorPicker
              colors={[
                '#25262b',
                '#868e96',
                '#fa5252',
                '#e64980',
                '#be4bdb',
                '#7950f2',
                '#4c6ef5',
                '#228be6',
                '#15aabf',
                '#12b886',
                '#40c057',
                '#82c91e',
                '#fab005',
                '#fd7e14',
              ]}
            />

            <RichTextEditor.Color color='#F03E3E' />
            <RichTextEditor.Color color='#7048E8' />
            <RichTextEditor.Color color='#1098AD' />
            <RichTextEditor.Color color='#37B24D' />
            <RichTextEditor.Color color='#F59F00' />

            <RichTextEditor.UnsetColor />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <Popover position='bottom-end'>
              <Popover.Target>
                <RichTextEditor.Control>
                  <BsEmojiSmile />
                </RichTextEditor.Control>
              </Popover.Target>

              <Popover.Dropdown p='0' className='border-0'>
                <EmojiPicker
                  onEmojiClick={(params) =>
                    editor?.commands.insertContent(params.emoji)
                  }
                />
              </Popover.Dropdown>
            </Popover>
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control
              onClick={() => editor?.chain().focus().setHardBreak().run()}
            >
              <BsTextWrap />
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
      <div className='text-gray-400 text-sm flex justify-between mt-1'>
        <div className='flex gap-2 '>
          <div>{editor?.storage.characterCount.characters()} characters</div>
          <Divider orientation='vertical' />
          <div>{editor?.storage.characterCount.words()} words</div>
        </div>
        <div>
          {!props.dev && (
            <Anchor component={Link} to='/help/editor'>
              Learn More
            </Anchor>
          )}
        </div>
      </div>
    </div>
  );
}

Editor.defaultProps = {
  editor: null,
  dev: false,
  className: '',
};

export default Editor;
