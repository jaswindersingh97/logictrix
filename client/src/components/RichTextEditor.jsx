import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = forwardRef((_, ref) => {
  const editorInstance = useRef(null);

  useImperativeHandle(ref, () => ({
    getContent: () => editorInstance.current?.getHTML() || ''
  }));

  return (
    <JoditEditor
      ref={instance => {
        if (instance) {
          editorInstance.current = instance.editor;
        }
      }}
      config={{
        buttons: ['bold', 'italic', 'underline', '|', 'ul', 'ol', '|', 'outdent', 'indent'],
        height: 300,
      }}
      onChange={()=>console.log("testing")}
    />
  );
});

export default RichTextEditor;