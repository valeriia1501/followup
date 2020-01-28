// import React, { Component } from 'react';
// import { convertFromRaw } from 'draft-js';
// import { convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';


// // import draftToHtml from 'draftjs-to-html';

// const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"sffsf","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

// const EditorConvertToJSON = (props) => {
//   const contentState = convertFromRaw(content);
//   const [editorState, setEditorState] = React.useState(contentState);
//   const {update, index} = props;

//   const onContentStateChange = (contentState) => {
//     setEditorState(contentState)
//   }

//   return (
//     <div>
//       <Editor
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//         // wrapperStyle={<wrapperStyleObject>}
//         // editorStyle={<editorStyleObject>}
//         // toolbarStyle={<toolbarStyleObject>}
//         onContentStateChange={onContentStateChange}
//         placeholder="Здесь можно печатать..."
//       />
//       <textarea
//         disabled
//         // value={JSON.stringify(editorState, null, 4)}
//         // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         // value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
//       />
//       <Grid container direction="row" justify="flex-end">
//         <Button variant="contained" color="default" style={{ margin: "10px"}}>Cancel</Button>
//         <Button 
//             onClick={() => update(JSON.stringify(editorState, null, 4), index)}
//             variant="contained" 
//             color="primary" 
//             style={{ margin: "10px"}}>
//           Save
//         </Button>
//       </Grid>
//     </div>
//   );
// }

// export default EditorConvertToJSON;



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
    const html = 'Hey this editor rocks';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        // isSaving: true
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
      this.props.update(draftToHtml(convertToRaw(editorState.getCurrentContent())), this.props.index);
      // this.setState({
      //   isSaving: false
      // });
      this.props.closeEditor();
    }

    return (
      <div>
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
            // onClick={saveMessage}
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



