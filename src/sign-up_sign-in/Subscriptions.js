import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    block: {
      width: '15%',
      height: '300px',
      border: '2px solid #cccccc',
      padding: '20px',
      margin: '20px',
      textAlign: 'center'
    },
});

const Subscriptions = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="center">
                <div className={classes.block}>1st Subscription</div>
                <div className={classes.block}>2nd Subscription</div>
                <div className={classes.block}>3rd Subscription</div>
            </Grid>
        </div>
    );
}

export default Subscriptions;
