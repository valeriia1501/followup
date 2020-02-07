import React from 'react';
import FollowupInfo from './FollowupInfo.js';
import FollowupSingleInfo from './FollowupSingleInfo.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    opacity: '1',
  },
  cardDisabled: {
    opacity: '0.5',
  }
});

const FollowupsGroup = () => {
    const dataArr = [
        {
          "from": "v.kovalkovska",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "cc",
          "date": "24/01/2020 00:00",
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
          "date": "25/01/2020 00:00",
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
          "date": "26/01/2020 00:00",
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
          "date": "27/01/2020 00:00",
          "instructions": [
            {
              "instruction": "info about type 'replyto'",
              "parameters": "parameters for details form",
              "state": "failed"
            }
          ]
        }
    ]
    const [data, setData] = React.useState(dataArr);
    const [followupInstr, setFollowupInstr] = React.useState(false);
    const [curFollowup, setCurFollowup] = React.useState('');
    const classes = useStyles();

    return (
        <div>
            { !followupInstr ? 
                data.map((elem, index) => {
                    return <FollowupInfo
                        setCurFollowup={setCurFollowup}
                        setFollowupInstr={setFollowupInstr}
                        key={index}
                        followup={elem} 
                    />
                })
                : 
                  <FollowupSingleInfo 
                    curFollowup={curFollowup}
                    setCurFollowup={setCurFollowup}
                    setFollowupInstr={setFollowupInstr}
                    followupInstr={followupInstr}
                  />
            }   
        </div>
    );
}

export default FollowupsGroup;
