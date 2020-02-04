import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import EditorConvertToJSON from './EditorConvertToJSON';
import Switcher from './Switcher';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom:'10px',
  },
  card_disabled: {
    minWidth: 275,
    marginBottom:'10px',
    opacity: 0.5
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  from_to: {
    fontSize: 14,
    paddingLeft: '20px',
    paddingTop: '20px',
  },
  message: {
    fontSize: 20,
    padding: '20px',
  },
  original: {
    fontSize: 14,
    paddingLeft: '20px',
    paddingBottom: '20px',
  },
  active: {
    display: 'inline-block',
  },
  disabled: {
    display: 'none',
  }
});

export default function MessagesSetup(props) {
  const classes = useStyles();
  const {message, messageNumber, update, index, dataLength, setData, data} = props;
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputState, setInputState] = React.useState(message.followupAfter);
  const [switchState, setSwitchState] = React.useState({
    checked: true,
  });
  const [activeFollowup, setActiveFollowup] = React.useState(dataLength - 1);

  const handleSwitch = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
    setActiveFollowup(activeFollowup - 1);
  };

  const closeEditor = () => {
    setIsEditing(false)
  };

  const newData = () => {
    data.pop();
    const newData = [...data];
    return newData;
  }

  const deleteElem = () => {
    setData(
      newData()
    )
    console.log(newData());
  };

  return (
    <div>
      <Card className={(switchState.checked) ? classes.card : classes.card_disabled} style={{ marginBottom: "50px"}}>
        <Grid container>
          <Grid container justify="space-between" style={{ backgroundColor: "#00284d", padding: "20px", color: "#ffffff"}}>
            <Grid>
              <Typography className={classes.title}>
                Followup {messageNumber}
              </Typography>
            </Grid>
            <Grid>
                {(!isEditing && switchState.checked) ? <Button onClick={() => setIsEditing(true)} variant="contained" color="primary" style={{ marginRight: "30px"}}>
                               Edit
                             </Button>
                            :''}

                  <FormControlLabel
                    className={(index === activeFollowup) ? classes.active : classes.disabled} 
                    control={
                      <Switcher
                        checked={switchState.checked}
                        onChange={handleSwitch('checked')}
                        value="checked"
                      />
                    }
                  />

                
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ backgroundColor: "#cccccc", padding: "20px"}}>
            <Typography>
              If you don't receive a reply, this will be sent
              <span> {!isEditing ? message.followupAfter : 
              <input
                onChange={(e) => setInputState(e.target.value)}
                type="number" 
                min="1" 
                max="90" 
                maxLength={2} 
                defaultValue={message.followupAfter} 
                style={{width: '45px', paddingLeft: '5px'}}/>} </span>
              days after {messageNumber === 1 ? 'Your Original Email' : `Followup ${messageNumber - 1}`}
            </Typography>
          </Grid> 
          <Grid item xs={12}>
            <Typography color="textSecondary" className={classes.from_to}>
              To: {message.to} &nbsp;&nbsp;&nbsp;&nbsp; From: {message.from}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            {isEditing ? <EditorConvertToJSON update={update} 
                                              index={index} 
                                              closeEditor={closeEditor} 
                                              message={message.message}
                                              inputState={inputState}/>                                   
              : <Typography className={classes.message}>
                  {message.message}
                </Typography>}
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" className={classes.original}>
              Your original email will be here.
            </Typography>
          </Grid>  
        </Grid>
      </Card>
      {index === dataLength - 1 ? 
        <Button color="primary" 
                style={{ marginTop: "-70px"}}
                onClick={deleteElem}>
                  Delete This Followup
        </Button> 
        : ''}  
    </div>
  );
}