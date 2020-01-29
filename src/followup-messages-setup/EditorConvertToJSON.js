import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class EditorConvertToJSON extends Component {
  constructor(props) {
    super(props);
    const html = this.props.message;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;

    const saveMessage = () => {
      this.props.update(draftToHtml(convertToRaw(editorState.getCurrentContent())), this.props.index, this.props.inputState);
      this.props.closeEditor();
    }

    return (
      <div style={{padding: "20px"}}>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        <Grid container direction="row" justify="flex-end">
          <Button                                 
            onClick={() => this.props.closeEditor()}
            variant="contained" 
            color="default" 
            style={{ margin: "10px"}}>
              Cancel
          </Button>
          <Button 
            onClick={saveMessage}
            variant="contained" 
            color="primary" 
            style={{ margin: "10px"}}>
              Save
          </Button>
        </Grid>
      </div>
    );
  }
}

export default EditorConvertToJSON



