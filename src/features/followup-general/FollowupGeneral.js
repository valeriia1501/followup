import React from 'react';
import ImportantActions from './ImportantActions.js';
import NewNotifications from './NewNotifications.js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';



const useStyles = makeStyles({
  title: {
    fontSize: 18,
    paddingLeft: '25px'
  },
  subtitle: {
    fontSize: 14,
    paddingLeft: '20px' 
  },
  followup: {
    borderBottom: '1px solid #cccccc'
  },
  titleActiveFollowups: {
    borderBottom: '1px solid #cccccc',
    padding: '25px',
    fontSize: 18,
  }
});

const FollowupGeneral = () => {
    const userDataArr = {
        "userName": 'Valeriia',
        "notificationsAboutIssues": "We have a problem",
        "setupAccount": "",
        "subscriptionExpires": "Check your subscription",
        "newNotification" : "Followup expired for message X"
    }

    const dataArr = [
        {
          "from": "v.kovalkovska",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "cc",
          "date": "2020/01/25 00:00",
          "state": "active",
          "instructions": [
            {
              "instruction": "info about type 'cc'",
              "parameters": "parameters for details form",
              "state": "passes"
            }
          ]
        },
        {
          "from": "Bob Johnson",
          "subject": "Fill form",
          "target" : "Nick",
          "type": "to",
          "date": "2019/01/12 00:00",
          "state": "active",
          "instructions": [
            {
              "instruction": "info about type 'to'",
              "parameters": "parameters for form",
              "state": "failed"
            }
          ]
        },
        {
          "from": "Helen",
          "subject": "Form",
          "target" : "Ken",
          "type": "bcc",
          "date": "2020/02/02 00:00",
          "state": "active",
          "instructions": [
            {
              "instruction": "info about type 'bcc'",
              "parameters": "parameters for form",
              "state": "passes"
            }
          ]
        },
        {
          "from": "Emilia",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "replyto",
          "date": "2020/01/24 00:00",
          "state": "active",
          "instructions": [
            {
              "instruction": "info about type 'replyto'",
              "parameters": "parameters for details form",
              "state": "failed"
            }
          ]
        }
    ]

    const classes = useStyles();
    const [userData, setUserData] = React.useState(userDataArr);
    const [data, setData] = React.useState(dataArr);
    const [sortedData, setSortedData] = React.useState([]);

    // const sortArr = () => {
    //     let newData = [...data]
    //     newData.sort((a, b) => a.date > b.date ? 1 : -1);
    //     newData.reverse();
    //     setSortedData(newData)
    // }

    // sortArr();

    return (
        <div>
            <ImportantActions userData={userData}/><br/>
            <NewNotifications userData={userData}/>
            
            <Card>
              <div className={classes.titleActiveFollowups}>Active followups</div>
              {
                data.map((elem, index) => {
                    if (elem.state === 'active' && index < 3) {
                        return <CardContent className={classes.followup}>
                          <Grid container>
                            <Grid item xs={6}>
                              <Typography className={classes.subtitle} gutterBottom>
                                From: {elem.from}
                              </Typography>
                              <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                Subject: {elem.subject}
                              </Typography>
                              <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                Next followup on {elem.date}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography className={classes.subtitle} gutterBottom>
                                Target: {elem.target}
                              </Typography>
                              <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                Type: {elem.type}
                              </Typography>
                            </Grid>    
                          </Grid>
                        </CardContent>
                    }
                })
              }
            </Card>

            <Card>
              <div className={classes.titleActiveFollowups}>Recent followups</div>
              {
                data.map((elem, index) => {
                    if (index < 3) {
                        return <CardContent className={classes.followup}>
                          <Grid container>
                            <Grid item xs={6}>
                              <Typography className={classes.subtitle} gutterBottom>
                                From: {elem.from}
                              </Typography>
                              <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                Subject: {elem.subject}
                              </Typography>
                              <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                Next followup on {elem.date}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography className={classes.subtitle} gutterBottom>
                                Target: {elem.target}
                              </Typography>
                              <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                                Type: {elem.type}
                              </Typography>
                            </Grid>    
                          </Grid>
                        </CardContent>
                    }
                })
              }
            </Card>         
        </div>
    );
}

export default FollowupGeneral;
