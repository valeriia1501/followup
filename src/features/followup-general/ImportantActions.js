import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    padding: '25px'
  },
  notifications: {
    backgroundColor: '#FFE4B5',
    fontSize: 14,
    padding: '25px',
    margin: '-5px',
  },
  setup: {
    backgroundColor: '#E0FFFF',
    fontSize: 14,
    padding: '25px',
    margin: '-5px',
  },
  subscription: {
    fontSize: 14,
    padding: '25px'
  },
  button: {
    marginTop: '10px'
  }
});

export default function ImportantActions(props) {
  const {userData} = props;
  const classes = useStyles();

  return (
    <Card>
        <Typography className={classes.title} gutterBottom>
          Welcome, {userData.userName} !
        </Typography>
        {
          userData.notificationsAboutIssues ? <Typography className={classes.notifications} gutterBottom>
            {userData.notificationsAboutIssues}<br/>
            <Button variant="contained" color="primary" size="small" className={classes.button}>View</Button>
          </Typography> : ''
        }

        {
          userData.setupAccount ? <Typography className={classes.setup} gutterBottom>
            {userData.setupAccount}<br/>
            <Button variant="contained" color="primary" size="small" className={classes.button}>Setup</Button>
          </Typography> : ''
        }

        {
          userData.subscriptionExpires ? <Typography className={classes.subscription} gutterBottom>
            {userData.subscriptionExpires}<br/>
            <Button variant="contained" color="primary" size="small" className={classes.button}>Check</Button>
          </Typography> : ''
        }
    </Card>
  );
}