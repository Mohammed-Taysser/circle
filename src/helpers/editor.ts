import { Link } from '@mantine/tiptap';
import CharacterCount from '@tiptap/extension-character-count';
import { Color } from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import ColorHighlighter from '../components/tiptap/ColorHighlighter';

function getEditorOption(content?: string) {
  return {
    extensions: [
      StarterKit,
      Underline,
      Placeholder,
      TextStyle,
      Typography,
      Link.configure({
        HTMLAttributes: {
          class: 'text-aurora no-underline hover:underline',
        },
      }),
      Superscript,
      SubScript,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Color,
      CharacterCount,
      ColorHighlighter,
    ],
    content,
  };
}

export { getEditorOption };
