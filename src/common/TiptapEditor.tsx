import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Divider, Popover, useMantineTheme } from '@mantine/core';
import { Link, RichTextEditor } from '@mantine/tiptap';
import CharacterCount from '@tiptap/extension-character-count';
import FontFamily from '@tiptap/extension-font-family';
import Placeholder from '@tiptap/extension-placeholder';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BsAlignEnd, BsEmojiSmile, BsTextWrap } from 'react-icons/bs';

const EDITOR_EXTENSION = {
  extensions: [
    StarterKit,
    Underline,
    Placeholder,
    TextStyle,
    FontFamily,
    Typography,
    Link.configure({
      HTMLAttributes: {
        class: 'text-aurora no-underline hover:underline',
      },
    }),
    Superscript,
    SubScript,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    CharacterCount,
  ],
};

function TiptapEditor(props: TiptapEditorProps) {
  const theme = useMantineTheme();
  const editorInstance = useEditor({
    ...EDITOR_EXTENSION,
    onUpdate: (editorInstance) => {
      if (props.getText) {
        const content = {
          text: editorInstance.editor.getText(),
          html: editorInstance.editor.getHTML(),
        };
        props.getText(content);
      }
    },
    content: props.content,
  });

  return (
    <div>
      <RichTextEditor editor={editorInstance}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Code />
            <RichTextEditor.CodeBlock />
          </RichTextEditor.ControlsGroup>

          {!props.noFontSizes && (
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>
          )}

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
            <Popover position='bottom-end'>
              <Popover.Target>
                <RichTextEditor.Control title='Emoji picker'>
                  <BsEmojiSmile />
                </RichTextEditor.Control>
              </Popover.Target>

              <Popover.Dropdown p='0' className='border-0'>
                <Picker
                  data={data}
                  theme={theme.colorScheme}
                  onEmojiSelect={(params: any) =>
                    editorInstance?.commands.insertContent(params.native)
                  }
                />
              </Popover.Dropdown>
            </Popover>

            <RichTextEditor.Control
              title='Arabic format'
              onClick={() =>
                editorInstance
                  ?.chain()
                  .focus()
                  .setFontFamily(`'Tajawal', sans-serif`)
                  .setTextAlign('right')
                  .run()
              }
            >
              <BsAlignEnd />
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control
              title='New Line'
              onClick={() =>
                editorInstance?.chain().focus().setHardBreak().run()
              }
            >
              <BsTextWrap />
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>

      <div className='text-gray-400 text-sm flex mt-1'>
        <div className='flex gap-2'>
          <div>
            {editorInstance?.storage.characterCount.characters()} characters
          </div>

          <Divider orientation='vertical' />

          <div>{editorInstance?.storage.characterCount.words()} words</div>
        </div>
      </div>
    </div>
  );
}

export default TiptapEditor;
