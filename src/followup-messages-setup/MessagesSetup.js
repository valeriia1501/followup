import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorConvertToJSON from './EditorConvertToJSON';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom:'10px',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  from_to: {
    fontSize: 14,
    padding: '10px'
  },
  message: {
    fontSize: 20,
    padding: '10px'
  },
});

export default function MessagesSetup(props) {
  const classes = useStyles();
  const {message, messageNumber, update, key} = props;
  const [isEditing, setIsEditing] = React.useState(false);


  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid container justify="space-between">
            <Grid>
              <Typography className={classes.title}>
                Bump {messageNumber}
              </Typography>
            </Grid>
            <Grid>
              <Button onClick={() => setIsEditing(true)} variant="contained" color="primary">
                Edit
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              If you don't receive a reply, this will be sent {message.followupAfter} days 
              after {messageNumber === 1 ? 'Your Original Email' : `Followup ${messageNumber - 1}`}
            </Typography>
          </Grid> 
          <Grid item xs={12}>
            <Typography color="textSecondary" className={classes.from_to}>
              To: {message.to} &nbsp;&nbsp;&nbsp;&nbsp; From: {message.from}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            {/* {isEditing === true ? <div><Editor/><textarea value={message.message} cols='150' rows='10'></textarea></div> */}
            {isEditing === true ? <EditorConvertToJSON update={update} key={key}/> 
                                  // <Editor 
                                  //   wrapperClassName="demo-wrapper"
                                  //   editorClassName="demo-editor"
                                  // /> 
                                                 
              : <Typography className={classes.message}>
                  {message.message}
                </Typography>}
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" className={classes.from_to}>
              Your original email will be here.
            </Typography>
          </Grid>  
        </Grid>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}