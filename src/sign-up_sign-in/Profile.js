import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      margin: '20px 10px',
    },
  });

const Profile = () => {
    const classes = useStyles();
    return (
        <Grid
          container
          justify="center"
        >
            <Button className={classes.button} href='/profile/sign-up' variant="outlined" color="primary" size="large">Personal</Button>
            <Button className={classes.button} href='/profile/sign-up' variant="outlined" color="primary" size="large">Business</Button>
        </Grid>
    );
}

export default Profile;
