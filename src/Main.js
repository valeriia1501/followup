import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    padding: '5px 20px',
    width: '300px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
});

export default function Main() {

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="column"
      >
        <a className={classes.link} href='/profile'>Registration</a>
        <a className={classes.link} href='/'>Select profile to use </a>
        <a className={classes.link} href='/'>Payment</a>
        <a className={classes.link} href='/'>Fill in basic information </a>
        <a className={classes.link} href='/'>Select subscription</a>
      </Grid>
    </div>  
  );
}


