import { Code, Table } from '@mantine/core';
import { useEditor } from '@tiptap/react';
import Editor from '../../../common/Editor';
import { getEditorOption } from '../../../helpers';
import { useDocumentTitle } from '@mantine/hooks';

const content = `
<h2 style="text-align: center">
  Welcome to <span style="color: #37b24d">Circle</span> rich text editor
</h2>

<p>
  <code>Editor</code> focuses on usability and is designed to be as simple as
  possible to bring a familiar editing experience to regular users. Supports all
  of its features:
</p>

<ul>
  <li>
    General text formatting: <strong>bold</strong>, <em>italic</em>,
    <u>underline</u>, <s>strike-through</s>
  </li>
  <li>Headings (h1-h6)</li>
  <li>
    Sub and super scripts (<sup>&lt;sup /&gt;</sup> and
    <sub>&lt;sub /&gt;</sub> tags)
  </li>
  <li>Ordered and bullet lists</li>
  <li>Text align (left, center, justify, right)</li>
  <li>Words & characters counter</li>
  <li>Horizontal line & Line break & Blockquote</li>
  <li>
    <a rel="noopener noreferrer nofollow" class="text-aurora no-underline hover:underline text-aurora no-underline hover:underline" href="https://mantine-lime.vercel.app/">Link</a> 
    & Unlink text.
    </li>
  <li><span style="color: #F59F00">Color</span> & Emoji picker 😀</li>
</ul>

<br />

<p>
  With the Typography extension, The editor understands >> what you mean << and adds
  correct characters to your text — it's like a "typography nerd" on your side.
</p>
<p>
  Try it out and type <code>(c)</code>, <code>-></code>, <code>>></code>,
  <code>1/2</code>, <code>!=</code>, <code>--</code> or <code>1x1</code> here:
</p>

<br />

<p>
  You can also teach the editor new things. For example, to recognize hex colors
  and add a color swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151,
  #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F
</p>

<br />
`;

function EditorHelp() {
  useDocumentTitle('Circle | Help | Editor');
  const editor = useEditor(getEditorOption(content));

  return (
    <>
      <div className='p-10 bg-white rounded nice-shadow'>
        <Editor dev editor={editor} />
      </div>

      <div className='p-10 bg-white rounded nice-shadow my-10'>
        <h2>Typography extension</h2>
        <Table striped withColumnBorders>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>emDash</td>
              <td>
                Converts double dashes <Code>--</Code> to an emdash
                <Code>—</Code>.
              </td>
            </tr>
            <tr>
              <td>ellipsis</td>
              <td>
                Converts three dots <Code>...</Code> to an ellipsis character
                <Code>…</Code>
              </td>
            </tr>
            <tr>
              <td>openDoubleQuote</td>
              <td>
                <Code>"</Code>Smart<Code>"</Code> opening double quotes.
              </td>
            </tr>
            <tr>
              <td>closeDoubleQuote</td>
              <td>
                <Code>"</Code>Smart<Code>"</Code> closing double quotes.
              </td>
            </tr>
            <tr>
              <td>openSingleQuote</td>
              <td>
                <Code>'</Code>Smart<Code>'</Code> opening single quotes.
              </td>
            </tr>
            <tr>
              <td>closeSingleQuote</td>
              <td>
                <Code>'</Code>Smart<Code>'</Code> closing single quotes.
              </td>
            </tr>
            <tr>
              <td>leftArrow</td>
              <td>
                Converts <Code>&lt;-</Code> to an arrow <Code>←</Code> .
              </td>
            </tr>
            <tr>
              <td>rightArrow</td>
              <td>
                Converts <Code>-&gt;</Code> to an arrow <Code>→</Code>.
              </td>
            </tr>
            <tr>
              <td>copyright</td>
              <td>
                Converts <Code>(c)</Code> to a copyright sign <Code>©</Code>.
              </td>
            </tr>
            <tr>
              <td>registeredTrademark</td>
              <td>
                Converts <Code>(r)</Code> to registered trademark sign
                <Code>®</Code>.
              </td>
            </tr>
            <tr>
              <td>trademark</td>
              <td>
                Converts <Code>(tm)</Code> to registered trademark sign
                <Code>™</Code>.
              </td>
            </tr>
            <tr>
              <td>servicemark</td>
              <td>
                Converts <Code>(sm)</Code> to registered trademark sign
                <Code>℠</Code>.
              </td>
            </tr>
            <tr>
              <td>oneHalf</td>
              <td>
                Converts <Code>1/2</Code> to one half <Code>½</Code>.
              </td>
            </tr>
            <tr>
              <td>oneQuarter</td>
              <td>
                Converts <Code>1/4</Code> to one quarter <Code>¼</Code>.
              </td>
            </tr>
            <tr>
              <td>threeQuarters</td>
              <td>
                Converts <Code>3/4</Code> to three quarters <Code>¾</Code>.
              </td>
            </tr>
            <tr>
              <td>plusMinus</td>
              <td>
                Converts <Code>+/-</Code> to plus/minus sign <Code>±</Code>.
              </td>
            </tr>
            <tr>
              <td>notEqual</td>
              <td>
                Converts
                <Code style={{ fontVariantLigatures: 'none' }}>!=</Code> to a
                not equal sign <Code>≠</Code>.
              </td>
            </tr>
            <tr>
              <td>laquo</td>
              <td>
                Converts <Code>&lt;&lt;</Code> to left-pointing double angle
                quotation mark <Code>«</Code>.
              </td>
            </tr>
            <tr>
              <td>raquo</td>
              <td>
                Converts <Code>&gt;&gt;</Code> to right-pointing double angle
                quotation mark <Code>»</Code>.
              </td>
            </tr>
            <tr>
              <td>multiplication</td>
              <td>
                Converts <Code>2 * 3</Code> or <Code>2x3</Code> to a
                multiplcation sign
                <Code>2×3</Code>.
              </td>
            </tr>
            <tr>
              <td>superscriptTwo</td>
              <td>
                Converts <Code>^2</Code> a superscript two <Code>²</Code>.
              </td>
            </tr>
            <tr>
              <td>superscriptThree</td>
              <td>
                Converts <Code>^3</Code> a superscript three <Code>³</Code>.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='p-10 bg-white rounded nice-shadow my-10'>
        <h2>Essentials shortcuts</h2>
        <Table striped withColumnBorders>
          <thead>
            <tr>
              <th>Command</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Copy</td>
              <td>
                <code>Control</code>&nbsp;<code>C</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>C</code>
              </td>
            </tr>
            <tr>
              <td>Cut</td>
              <td>
                <code>Control</code>&nbsp;<code>X</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>X</code>
              </td>
            </tr>
            <tr>
              <td>Paste</td>
              <td>
                <code>Control</code>&nbsp;<code>V</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>V</code>
              </td>
            </tr>
            <tr>
              <td>Paste without formatting</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>V</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>V</code>
              </td>
            </tr>
            <tr>
              <td>Undo</td>
              <td>
                <code>Control</code>&nbsp;<code>Z</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Z</code>
              </td>
            </tr>
            <tr>
              <td>Redo</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>Z</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>Z</code>
              </td>
            </tr>
            <tr>
              <td>Add a line break</td>
              <td>
                <code>Shift</code>&nbsp;<code>Enter</code>
              </td>
              <td>
                <code>Shift</code>&nbsp;<code>Enter</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='p-10 bg-white rounded nice-shadow my-10'>
        <h2> Text Formatting shortcuts</h2>
        <Table striped withColumnBorders>
          <thead>
            <tr>
              <th>Command</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bold</td>
              <td>
                <code>Control</code>&nbsp;<code>B</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>B</code>
              </td>
            </tr>
            <tr>
              <td>Italicize</td>
              <td>
                <code>Control</code>&nbsp;<code>I</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>I</code>
              </td>
            </tr>
            <tr>
              <td>Underline</td>
              <td>
                <code>Control</code>&nbsp;<code>U</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>U</code>
              </td>
            </tr>
            <tr>
              <td>Strikethrough</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>X</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>X</code>
              </td>
            </tr>
            <tr>
              <td>Highlight</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>H</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>H</code>
              </td>
            </tr>
            <tr>
              <td>Code</td>
              <td>
                <code>Control</code>&nbsp;<code>E</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>E</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='p-10 bg-white rounded nice-shadow my-10'>
        <h2>Paragraph Formatting shortcuts</h2>
        <Table striped withColumnBorders>
          <thead>
            <tr>
              <th>Command</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apply normal text style</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>0</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>0</code>
              </td>
            </tr>
            <tr>
              <td>Apply heading style 1</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>1</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>1</code>
              </td>
            </tr>
            <tr>
              <td>Apply heading style 2</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>2</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>2</code>
              </td>
            </tr>
            <tr>
              <td>Apply heading style 3</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>3</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>3</code>
              </td>
            </tr>
            <tr>
              <td>Apply heading style 4</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>4</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>4</code>
              </td>
            </tr>
            <tr>
              <td>Apply heading style 5</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>5</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>5</code>
              </td>
            </tr>
            <tr>
              <td>Apply heading style 6</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>6</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>6</code>
              </td>
            </tr>
            <tr>
              <td>Ordered list</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>7</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>7</code>
              </td>
            </tr>
            <tr>
              <td>Bullet list</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>8</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>8</code>
              </td>
            </tr>
            <tr>
              <td>Task list</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>9</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>9</code>
              </td>
            </tr>
            <tr>
              <td>Blockquote</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>B</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>B</code>
              </td>
            </tr>
            <tr>
              <td>Left align</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>L</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>L</code>
              </td>
            </tr>
            <tr>
              <td>Center align</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>E</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>E</code>
              </td>
            </tr>
            <tr>
              <td>Right align</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>R</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>R</code>
              </td>
            </tr>
            <tr>
              <td>Justify</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>J</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>J</code>
              </td>
            </tr>
            <tr>
              <td>Code block</td>
              <td>
                <code>Control</code>&nbsp;<code>Alt</code>&nbsp;<code>C</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Alt</code>&nbsp;<code>C</code>
              </td>
            </tr>
            <tr>
              <td>Subscript</td>
              <td>
                <code>Control</code>&nbsp;<code>,</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>,</code>
              </td>
            </tr>
            <tr>
              <td>Superscript</td>
              <td>
                <code>Control</code>&nbsp;<code>.</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>.</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='p-10 bg-white rounded nice-shadow my-10'>
        <h2>Text Selection shortcuts</h2>
        <Table striped withColumnBorders>
          <thead>
            <tr>
              <th>Command</th>
              <th>Windows/Linux</th>
              <th>macOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Select all</td>
              <td>
                <code>Control</code>&nbsp;<code>A</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>A</code>
              </td>
            </tr>
            <tr>
              <td>Extend selection one character to left</td>
              <td>
                <code>Shift</code>&nbsp;<code>←</code>
              </td>
              <td>
                <code>Shift</code>&nbsp;<code>←</code>
              </td>
            </tr>
            <tr>
              <td>Extend selection one character to right</td>
              <td>
                <code>Shift</code>&nbsp;<code>→</code>
              </td>
              <td>
                <code>Shift</code>&nbsp;<code>→</code>
              </td>
            </tr>
            <tr>
              <td>Extend selection one line up</td>
              <td>
                <code>Shift</code>&nbsp;<code>↑</code>
              </td>
              <td>
                <code>Shift</code>&nbsp;<code>↑</code>
              </td>
            </tr>
            <tr>
              <td>Extend selection one line down</td>
              <td>
                <code>Shift</code>&nbsp;<code>↓</code>
              </td>
              <td>
                <code>Shift</code>&nbsp;<code>↓</code>
              </td>
            </tr>
            <tr>
              <td>Extend selection to the beginning of the document</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>↑</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>↑</code>
              </td>
            </tr>
            <tr>
              <td>Extend selection to the end of the document</td>
              <td>
                <code>Control</code>&nbsp;<code>Shift</code>&nbsp;<code>↓</code>
              </td>
              <td>
                <code>Cmd</code>&nbsp;<code>Shift</code>&nbsp;<code>↓</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default EditorHelp;
