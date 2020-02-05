import React from 'react';
import FollowupInfo from './FollowupInfo.js';

const FollowupsGroup = () => {
    const dataArr = [
        {
          "from": "v.kovalkovska",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "cc",
          "date": "24/01/2020 00:00",
          "instruction": "info about type 'cc'",
          "parameters": "parameters for details form",
          "state": "passes"
        },
        {
          "from": "Bob Johnson",
          "subject": "Fill form",
          "target" : "Nick",
          "type": "to",
          "date": "25/01/2020 00:00",
          "instruction": "info about type 'to'",
          "parameters": "parameters for form",
          "state": "failed"
        },
        {
          "from": "Helen",
          "subject": "Form",
          "target" : "Ken",
          "type": "bcc",
          "date": "26/01/2020 00:00",
          "instruction": "info about type 'bcc'",
          "parameters": "parameters for form",
          "state": "passes"
        },
        {
          "from": "Emilia",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "replyto",
          "date": "27/01/2020 00:00",
          "instruction": "info about type 'replyto'",
          "parameters": "parameters for details form",
          "state": "failed"
        }
    ]
    const [data, setData] = React.useState(dataArr);
    return (
        <div>
            {
                data.map((elem, index) => {
                    return <FollowupInfo
                        key={index}
                        followup={elem} 
                    />
                })
            }   
        </div>
    );
}

export default FollowupsGroup;
