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
    const [isActive, setISActive] = React.useState(true);
    const {curFollowup, setFollowupInstr, followupInstr} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
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
                    // onClick={() => setFollowupInstr(!followupInstr)}
                    className={classes.buttonEdit} 
                    variant="contained" 
                    color="primary" 
                    size="small">
                      Remove
                  </Button>
                  <Button
                    // onClick={() => setFollowupInstr(!followupInstr)}
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
                  <TableCell>Instruction</TableCell>
                  <TableCell>Parameters</TableCell>
                  <TableCell>State</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{curFollowup.instruction}</TableCell>
                  <TableCell>{curFollowup.parameters}</TableCell>
                  <TableCell>{curFollowup.state}</TableCell>
                </TableRow>
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
            
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  Choose instruction
                </DialogTitle>
                <DialogContent dividers>
                  
                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+containsDate</Button></Grid>
                      <Grid item xs={7}>
                        check email if it contains any date, identified by Machine Learning
                      </Grid>
                    </Grid>
                
                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+containsLink</Button></Grid>
                      <Grid item xs={7}>
                        check if email any link (except email) (may work poorly if email footer contains 
                        website link), to filter out links you can use script with same name
                      </Grid>
                    </Grid>
                
                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+notify</Button></Grid>
                      <Grid item xs={7}>
                        notify if reply received via all available notification channels
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+workhours</Button></Grid>
                      <Grid item xs={7}>
                        will enforce email to be followed up only during working hours, so it won't be sent at 1A.M, 
                        instead it'll wait for start of working hours(e.g 8A.M, specified in settings)
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+interval('duration')</Button></Grid>
                      <Grid item xs={7}>
                        specify the interval with which service will followup email
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+days([day|..])</Button></Grid>
                      <Grid item xs={7}>
                        specify by which days email should be followed up
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+!days([day|..])</Button></Grid>
                      <Grid item xs={7}>
                        specify by which days email should not be sent, send it in all the other days
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+contains(['string'|..])</Button></Grid>
                      <Grid item xs={7}>
                        check email if it replied message contains specific string. It'll continue following 
                        up unless required value found. e.g +contains ('about_trip') 
                        will send followup until about_trip string encountered. Dangerous function, 
                        better to consider next option
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+containsAny(['string'|..])</Button></Grid>
                      <Grid item xs={7}>
                        same as above, but will stop after encountering any of strings
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+containsLink('string')</Button></Grid>
                      <Grid item xs={7}>
                        checks if email contains link and string is in this link
                      </Grid>
                    </Grid>

                    <Grid container spacing={7} alignItems="center">
                      <Grid item xs={5}><Button className={classes.buttonInstruction} variant="outlined">+notify('channel')</Button></Grid>
                      <Grid item xs={7}>
                        notify via notification channel, should be set up before using or won't work otherwise
                      </Grid>
                    </Grid>
                
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FollowupSingleInfo;
