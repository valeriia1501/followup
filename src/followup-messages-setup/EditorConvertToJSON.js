import React, { Component } from 'react';
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import draftToMarkdown from 'draftjs-to-markdown';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

const EditorConvertToJSON = (props) => {
  // const contentState = convertFromRaw(content);
  const [editorState, setEditorState] = React.useState(undefined);
  const {update, key} = props;

  const onContentStateChange = (editorState) => {
    setEditorState(editorState)
  }

  const getText = () => {
    setEditorState(getTextFromEditor());
  }

  const getTextFromEditor = () => {
    const editorNewState = "dsd";
    return editorNewState;
  }
  return (
    <div>
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onContentStateChange={onContentStateChange}
      />
      <textarea
        disabled
        value={JSON.stringify(editorState, null, 4)}
        // value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
      />
      <Grid container direction="row" justify="flex-end">
        <Button variant="contained" color="default" style={{ margin: "10px"}}>Cancel</Button>
        <Button 
            onClick={() => update(JSON.stringify(editorState, null, 4), key)}
            variant="contained" 
            color="primary" 
            style={{ margin: "10px"}}>
          Save
        </Button>
      </Grid>
    </div>
  );
}

export default EditorConvertToJSON;

