import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom:'10px',
  },
  title: {
    fontSize: 14,
  },
});

export default function CardOwn(props) {
  const classes = useStyles();
  const {from, subject, target, type, date} = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.title} gutterBottom>
              From: {from}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Subject: {subject}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Next followup on {date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.title} gutterBottom>
              Target: {target}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Type: {type}
            </Typography>
          </Grid>    
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Show More</Button>
      </CardActions>
    </Card>
  );
}
