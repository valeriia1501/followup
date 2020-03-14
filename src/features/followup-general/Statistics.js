import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const useStyles = makeStyles({
    title: {
      borderBottom: '1px solid #cccccc',
      padding: '25px',
      fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        paddingLeft: '40px',
    },
    statisticsTitle: {
        fontSize: 16,
        padding: '20px 60px'  
    }
});


const Statistics = (props) => {
    const {statistics} = props;
    const classes = useStyles();
    return (
        <Card>
            <div className={classes.title}>Statistics</div>
            <Grid container>
              <Grid item xs={6}>
                  <div className={classes.statisticsTitle}>Followup rate per each followup</div>
                  <LineChart
                    width={600}
                    height={250}
                    data={statistics.followupRate}
                    margin={{
                      top: 5, right: 30, left: 10, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
              </Grid>
              <Grid item xs={6}>
                  <div className={classes.statisticsTitle}>Followup vs dates</div>
                  <LineChart
                    width={600}
                    height={250}
                    data={statistics.followupVsDates}
                    margin={{
                      top: 5, right: 30, left: 10, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="followupAmount" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
              </Grid>
            </Grid><br/>
        </Card>
    );
}

export default Statistics;
