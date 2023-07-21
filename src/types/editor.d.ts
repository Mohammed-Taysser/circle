interface TiptapEditorProps {
  getText?: (content: { text: string; html: string }) => void;
  content?: Content;
}
