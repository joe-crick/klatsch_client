import React from 'react';
import {EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// TODO: Make this real
const editorState = EditorState.createEmpty();
const bogusFunction = blah => blah;
const toolbar = {
  options: ['list', 'textAlign']
};

const HtmlTextEditor = props => {
  return (
    <Editor
      toolbar={toolbar}
      editorState={editorState}
      toolbarClassName="text-edit-toolbar"
      wrapperClassName="text-edit-wrapper"
      editorClassName="text-edit-editor"
      onEditorStateChange={bogusFunction}
      uploadCallback={bogusFunction}
    />
  );
};

HtmlTextEditor.propTypes = {};

export default HtmlTextEditor;