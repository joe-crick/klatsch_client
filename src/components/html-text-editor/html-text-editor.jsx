import React from 'react';
import {EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

// TODO: Make this real
const editorState = EditorState.createEmpty();
const bogusFunction = blah => blah;

const HtmlTextEditor = props => {
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="home-toolbar"
      wrapperClassName="home-wrapper"
      editorClassName="home-editor"
      onEditorStateChange={bogusFunction}
      uploadCallback={bogusFunction}
    />
  );
};

HtmlTextEditor.propTypes = {};

export default HtmlTextEditor;