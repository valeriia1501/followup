import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    card: {
      opacity: '1',
    },
    cardDisabled: {
      opacity: '0.5',
    },
    title: {
      fontSize: 14,
    },
    button: {
      margin: '20px 10px'
    },
    buttonEdit: {
      margin: '5px 10px'
    },
    buttonInstruction: {
      textTransform: 'none'
    },
    tableLeft: {
      width: '50%'
    },
    tableMiddle: {
      width: '25%'
    },
    tableRight: {
      width: '25%'
    },
    input: {
      width: '300px',
      padding: '10px',
      marginTop: '10px'
    },
    title: {
      minWidth: '300px'
    },
    strings: {
      padding: '5px',
      marginTop: '5px'
    },
    buttonInStrings: {
      padding: '5px',
      margin: '4px 6px'
    },
});

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
  
const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
  
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
  
const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const FollowupSingleInfo = (props) => {

    const instructionsArr = [
      {
        "instruction": "+containsDate",
        "description": "check email if it contains any date, identified by Machine Learning"
      },
      {
        "instruction": "+containsLink",
        "description": "check if email any link (except email) (may work poorly if email footer contains website link), to filter out links you can use script with same name"
      },
      {
        "instruction": "+notify",
        "description": "notify if reply received via all available notification channels"
      },
      {
        "instruction": "+workhours",
        "description": "will enforce email to be followed up only during working hours, so it won't be sent at 1A.M, instead it'll wait for start of working hours(e.g 8A.M, specified in settings)"
      },
      {
        "instruction": "+interval('duration')",
        "description": "specify the interval with which service will followup email"
      },
      {
        "instruction": "+days([day|..])",
        "description": "specify by which days email should be followed up"
      },
      {
        "instruction": "+contains(['string'|..])",
        "description": "check email if it replied message contains specific string. It'll continue following up unless required value found. e.g +contains ('about_trip') will send followup until about_trip string encountered. Dangerous function, better to consider next option"
      },
      {
        "instruction": "+containsAny(['string'|..])",
        "description": "same as above, but will stop after encountering any of strings"
      },
      {
        "instruction": "+containsLink('string')",
        "description": "checks if email contains link and string is in this link"
      },
      {
        "instruction": "+notify('channel')",
        "description": "notify via notification channel, should be set up before using or won't work otherwises"
      }
    ]

    const [instructions, setInstructions] = React.useState(instructionsArr);
    const [isActive, setISActive] = React.useState(true);
    const {curFollowup, setCurFollowup, setFollowupInstr, followupInstr} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [parameters, setParameters] = React.useState(false);
    const [whichParameters, setWhichParameters] = React.useState(false);
    const [newStrings, setNewStrings] = React.useState(['about_trip']);
    const [instrWithParams, setInstrWithParams] = React.useState('');
    const [descrWithParams, setDescrWithParams] = React.useState('');


    const [paramsDuration, setParamsDuration] = React.useState('20h');
    const [paramsString, setParamsString] = React.useState('about_trip');
    const [paramsChannel, setParamsChannel] = React.useState('about_trip_channel');

    const [paramsDayDom, setParamsDayDom] = React.useState([]);
    const [paramsStringDom, setParamsStringDom] = React.useState([]);
    const [isRemoving, setIsRemoving] = React.useState(false);
    const [curRemove, setCurRemove] = React.useState(true);
  
    const writeDayParams = (e) => {
      setParamsDayDom(e.target.parentNode.parentNode.children);
    }

    
    const addString = (e) => {
      let newStringsArr = [];
      for (let item of e.target.parentNode.parentNode.children) {
        if (item.className === 'singleString') {
          for (let subItem of item.children) {
            if (subItem.type == 'text') {
              newStringsArr.push(subItem.value);
            }
          }
        }
      }
      newStringsArr.push('');
      setNewStrings(newStringsArr);
      setCurRemove(true)
    }

    const saveString = (e) => {
      let newStringsArr = [];
      for (let item of e.target.parentNode.parentNode.children) {
        if (item.className === 'singleString') {
          for (let subItem of item.children) {
            if (subItem.type == 'text') {
              newStringsArr.push(subItem.value);
            }
          }
        }
      }
      setNewStrings(newStringsArr);
    }

    const removeString = (e) => {
      setIsRemoving(true);
      e.target.parentNode.parentNode.style.display = 'none';
      setParamsStringDom(e.target.parentNode.parentNode.parentNode.children);

      let newStringsArr = [];
          for (let item of e.target.parentNode.parentNode.parentNode.children) {
            if ((!item.style.display && item.className === 'singleString')) {
              newStringsArr.push(item.children[0].value);
            }
          }
          if (newStringsArr.length === 1) {
            setCurRemove(false)
          }
    }

    const saveAll = () => {

      let params;

      if (whichParameters == `duration`) {
        params = paramsDuration;
        setParamsDuration('20h');
      } else if (whichParameters == `[day|..]`) {
        let newDaysArr = [];
        for (let item of paramsDayDom) {
          if (item.className === 'singleDay' && item.children[0].checked) {
            newDaysArr.push(item.innerText);
          }
        }
        let strOfDays = newDaysArr.join(', ');
        params = strOfDays;
      } else if (whichParameters == `string`) {
        params = paramsString;
        setParamsString('about_trip');
      } else if (whichParameters == `channel`) {
        params = paramsChannel;
        setParamsChannel('about_trip_channel');
      } else if (whichParameters == `['string'|..]`) {
        let strOfStrings;
        if (isRemoving) {
          let newStringsArr = [];
          for (let item of paramsStringDom) {
            if ((!item.style.display && item.className === 'singleString')) {
              newStringsArr.push(item.children[0].value);
              strOfStrings = newStringsArr.join(', ');
              setIsRemoving(false)
            }
          }
        } else {
          strOfStrings = newStrings.join(', ')
        }
        params = strOfStrings;
        setNewStrings(['about_trip']);
      } 

      let newCurFollowup = Object.assign({}, curFollowup);

      newCurFollowup.instructions.push({
        "instruction": `${instrWithParams} - ${descrWithParams}`,
        "parameters": params,
        "state": "passes"
      });
      handleClose();
      setParameters(false);
    }


    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseAndSet = () => {
      setParameters(false);
      setParamsDuration('20h');
      setParamsString('about_trip');
      setParamsChannel('about_trip_channel');
      setNewStrings(['about_trip']);


      handleClose();
    }
    
    const parametersArr = [`duration`, `[day|..]`, `string`, `['string'|..]`, `channel`];

    const checkParameters = (e) => {
      if (e.target.innerText.includes('(')) {
        setParameters(!parameters);
        for (let elem of parametersArr) {
          if(e.target.innerText.includes(elem)) {
            setWhichParameters(elem);
          }
        }
        let instrDescriptionParams;
        for (let item of instructions) {
          if (item.instruction == e.target.innerText) {
            instrDescriptionParams = item.description;
          }
        }

        setInstrWithParams(e.target.innerText);
        setDescrWithParams(instrDescriptionParams);

      } else {
        let instrDescription;
        for (let item of instructions) {
          if (item.instruction == e.target.innerText) {
            instrDescription = item.description;
          }
        }
        let newCurFollowup = Object.assign({}, curFollowup);
        newCurFollowup.instructions.push({
          "instruction": `${e.target.innerText} - ${instrDescription}`,
          "parameters": '',
          "state": "passes"
        })

        handleClose();
      }
    }

    return (
        <div className={!isActive ? classes.cardDisabled : classes.card}>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Typography className={classes.title} gutterBottom>
                    From: {curFollowup.from}
                  </Typography>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Subject: {curFollowup.subject}
                  </Typography>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Next followup on {curFollowup.date}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.title} gutterBottom>
                    Target: {curFollowup.target}
                  </Typography>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Type: {curFollowup.type}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    onClick={() => setISActive(!isActive)}
                    className={classes.buttonEdit} 
                    variant="contained" 
                    color="primary" 
                    size="small">
                      {isActive ? 'Disable' : 'Enable'}
                  </Button>
                  <Button
                    className={classes.buttonEdit} 
                    variant="contained" 
                    color="primary" 
                    size="small">
                      Remove
                  </Button>
                  <Button
                    className={classes.buttonEdit} 
                    variant="contained" 
                    color="primary" 
                    size="small">
                      Edit
                  </Button> 
                </Grid>     
              </Grid>
            </CardContent>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableLeft}>Instruction</TableCell>
                  <TableCell className={classes.tableMiddle}>Parameters</TableCell>
                  <TableCell className={classes.tableRight}>State</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  curFollowup.instructions.map((elem, index) => {
                    return <TableRow key={index}>
                            <TableCell className={classes.tableLeft}>{elem.instruction}</TableCell>
                            <TableCell className={classes.tableMiddle}>{elem.parameters}</TableCell>
                            <TableCell className={classes.tableRight}>{elem.state}</TableCell>
                          </TableRow>
                  })
                }
              </TableBody>
            </Table>

            <Button
              onClick={() => setFollowupInstr(!followupInstr)}
              className={classes.button} 
              variant="contained" 
              color="primary" 
              size="large">
                Back
            </Button>

            <Button
              onClick={handleClickOpen}
              className={classes.button} 
              variant="contained" 
              color="primary" 
              size="large">
                +
            </Button> 
            
            <Dialog onClose={!parameters ? handleClose : handleCloseAndSet} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle 
                  id="customized-dialog-title" 
                  onClose={!parameters ? handleClose : handleCloseAndSet} 
                  className={classes.title}>
                    {!parameters ? 'Choose instruction' : 'Choose parameters'} 
                </DialogTitle>
                    {!parameters ? <div>
                                      <DialogContent dividers>
                                        {
                                          instructions.map((elem, index) => {
                                            return <Grid container spacing={4} alignItems="center" key={index}>
                                                      <Grid item xs={5}><Button onClick={checkParameters} className={classes.buttonInstruction} variant="outlined">{elem.instruction}</Button></Grid>
                                                      <Grid item xs={7}>
                                                        {elem.description}
                                                      </Grid>
                                                    </Grid>
                                            })
                                        }

                                      </DialogContent>
                                      <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                          Cancel
                                        </Button>
                                      </DialogActions>
                                    </div>
                                : 
                                    <div>
                                      <DialogContent dividers>
                                        
                                        {
                                          whichParameters == `duration` ? 
                                            <div>
                                              <label>
                                                Enter duration below <br/>
                                                <input 
                                                  onChange={(e) => setParamsDuration(e.target.value)}
                                                  className={classes.input} 
                                                  type="text" 
                                                  defaultValue={paramsDuration}/> 
                                              </label>
                                            </div>
                                          :
                                          whichParameters == `[day|..]` ? 
                                          <div>
                                            Choose days <br/><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Sunday</label><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Monday</label><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Tuesday</label><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Wednesday</label><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Thursday</label><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Friday</label><br/>
                                            <label className="singleDay"><input onChange={writeDayParams} type="checkbox"/>Saturday</label>
                                          </div>
                                          :
                                          whichParameters == `string` ? 
                                          <div>
                                            <label>
                                              Enter string below <br/>
                                              <input
                                                onChange={(e) => setParamsString(e.target.value)}
                                                className={classes.input} 
                                                type="text" 
                                                defaultValue={paramsString}/> 
                                            </label>
                                          </div>
                                          :
                                          whichParameters == `channel` ? 
                                          <div>
                                            <label>
                                              Enter channel below <br/>
                                              <input
                                                onChange={(e) => setParamsChannel(e.target.value)} 
                                                className={classes.input} 
                                                type="text" 
                                                defaultValue={paramsChannel}/> 
                                            </label>
                                          </div>
                                          :
                                          whichParameters == `['string'|..]` ? 
                                          <div>
                                            <label>
                                              Enter string below <br/><br/> 
                                              {
                                                newStrings.map((elem, index) => {
                                                  return <div key={index} className="singleString">
                                                          <input 
                                                            onChange={saveString}
                                                            className={classes.strings} 
                                                            type="text" 
                                                            defaultValue={elem}/>
                                                          {
                                                            newStrings.length == 1 || !curRemove ? 
                                                              <Button
                                                                style={{display: 'none'}}
                                                                id={index}
                                                                onClick={removeString}
                                                                size="small" 
                                                                color="primary" 
                                                                className={classes.buttonInStrings}>Remove</Button>
                                                              :
                                                              <Button
                                                                id={index}
                                                                onClick={removeString}
                                                                size="small" 
                                                                color="primary" 
                                                                className={classes.buttonInStrings}>Remove</Button>
                                                          }
                                                        </div>
                                                })
                                              }
                                              <Button
                                                onClick={addString} 
                                                size="small" 
                                                color="primary" 
                                                className={classes.strings}>+</Button> 
                                            </label>
                                          </div>
                                          : ''
                                        }
                                    

                                      </DialogContent>
                                      <DialogActions>
                                        <Button autoFocus onClick={saveAll} color="primary">
                                          Save
                                        </Button>
                                      </DialogActions>
                                    </div> }
                
            </Dialog>
        </div>
    );
}

export default FollowupSingleInfo;
