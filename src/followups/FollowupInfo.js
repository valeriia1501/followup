import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom:'10px',
  },
  title: {
    fontSize: 14,
  },
  info: {
    width: '200px',
  },
  wrap: {
    margin: '20px',
  }
});

export default function FollowupInfo(props) {
  const classes = useStyles();
  const {followup, followupInstr, setFollowupInstr} = props;
  const [isShowing, setIsShowing] = React.useState(true);

  return (
    <Card className={classes.card} onClick={() => setFollowupInstr(!followupInstr)}>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.title} gutterBottom>
              From: {followup.from}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Subject: {followup.subject}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Next followup on {followup.date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.title} gutterBottom>
              Target: {followup.target}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Type: {followup.type}
            </Typography>
          </Grid>    
        </Grid>
      </CardContent>
      <CardActions>
        {
        
          isShowing ? <Button size="small" onClick={() => setIsShowing(!isShowing)}>Show More</Button>
            : 
              <Table className={classes.wrap}>
                <TableHead>
                  <TableRow>
                    <TableCell>Instruction</TableCell>
                    <TableCell>Parameters</TableCell>
                    <TableCell>State</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{followup.instruction}</TableCell>
                    <TableCell>{followup.parameters}</TableCell>
                    <TableCell>{followup.state}</TableCell>
                  </TableRow>
                </TableBody>
              </Table> 
        }
      </CardActions>
    </Card>
  );
}
