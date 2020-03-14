import React from 'react';
import LineChartFollowup from './LineChartFollowup.js';
import BarChartFollowup from './BarChartFollowup.js';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    marginLeft: '60px',
    marginTop: '-10px',
  },
  block: {
    margin: '20px',
  },
});

const Charts = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
              <div className={classes.block}>
                <LineChartFollowup/>
                <Button className={classes.button} variant="outlined">More</Button>
              </div>
            </Grid>
            <Grid container>
              <div className={classes.block}>
                <BarChartFollowup/>
                <Button className={classes.button} variant="outlined">More</Button>
              </div>
              <div className={classes.block}>
                <BarChartFollowup/>
                <Button className={classes.button} variant="outlined">More</Button>
              </div>
            </Grid>
        </div>
    );
}

export default Charts;
