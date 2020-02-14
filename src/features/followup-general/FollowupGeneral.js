import React from 'react';
import ImportantActions from './ImportantActions.js';
import NewNotifications from './NewNotifications.js';
import Statistics from './Statistics.js';
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
  },
  card: {
    marginBottom: '20px'
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

    const statisticsArr = {
      "followupRate": [
        {
          "key": "1",
          "rate": "3"
        },
        {
          "key": "2",
          "rate": "4"
        },
        {
          "key": "3",
          "rate": "10"
        },
        {
          "key": "4",
          "rate": "6"
        },
        {
          "key": "5",
          "rate": "9"
        },
        {
          "key": "6",
          "rate": "2"
        },
        {
          "key": "7",
          "rate": "1"
        },
        {
          "key": "8",
          "rate": "8"
        },
      ],
      "followupVsDates" : [
        {
          "date": "Fri, Feb 1, 2020",
          "followupAmount" : "4"
        },
        {
          "date": "Fri, Feb 2, 2020",
          "followupAmount" : "8"
        },
        {
          "date": "Fri, Feb 3, 2020",
          "followupAmount" : "5"
        },
        {
          "date": "Fri, Feb 4, 2020",
          "followupAmount" : "3"
        },
        {
          "date": "Fri, Feb 5, 2020",
          "followupAmount" : "4"
        },
        {
          "date": "Fri, Feb 6, 2020",
          "followupAmount" : "4"
        },
        {
          "date": "Fri, Feb 7, 2020",
          "followupAmount" : "8"
        },
        {
          "date": "Fri, Feb 8, 2020",
          "followupAmount" : "2"
        },
      ]
    }
      

    const dataArr = [
        {
          "from": "v.kovalkovska",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "cc",
          "date": "Fri, Feb 14, 2020 11:21 AM",
          "nextFollowup": "Fri, Feb 15, 2020 11:21 AM",
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
          "date": "Thu, Feb 13, 2019 11:21 AM",
          "nextFollowup": "Thu, Feb 16, 2019 11:21 AM",
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
          "date": "Thu, Feb 13, 2020 11:10 AM",
          "nextFollowup": "Thu, Feb 17, 2020 11:10 AM",
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
          "date": "Thu, Feb 13, 2019 11:00 AM",
          "nextFollowup": "Thu, Feb 18, 2020 11:10 AM",
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
    const [statistics, setStatistics] = React.useState(statisticsArr);


    let sortedDataArr;
    const sortArr = () => {
      sortedDataArr = [...data];
      sortedDataArr.sort((a, b) => Date.parse(a.date) < Date.parse(b.date)  ? 1 : -1);
    }
    sortArr();

    const [sortedData, setSortedData] = React.useState(sortedDataArr);

    


    return (
        
        <div>
            <ImportantActions userData={userData}/><br/>
            <NewNotifications userData={userData}/>
            
            <Card className={classes.card}>
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

            <Card className={classes.card}>
              <div className={classes.titleActiveFollowups}>Recent followups</div>
              {
                sortedData.map((elem, index) => {
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
            <Statistics statistics={statistics}/>       
        </div>
    );
}

export default FollowupGeneral;
