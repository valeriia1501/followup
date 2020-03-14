import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom:'10px',
  },
  title: {
    width: '25%',
    fontSize: 14,
    padding: '0 30px',
    margin: 0,
  },
});

export default function Address(props) {
  const classes = useStyles();
  const {address} = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="row" justify="flex-start">
            <Typography className={classes.title}>
              Name: {address.name}
            </Typography>
            <Typography className={classes.title}>
              Email: {address.email}
            </Typography> 
            <Typography className={classes.title} color="textSecondary">
              {address.opt_out ? 'User opted out' : ''}
            </Typography>    
        </Grid>
      </CardContent>
    </Card>
  );
}