import React from 'react';
import FollowupInfo from './FollowupInfo.js';

const FollowupsGroup = () => {
    const dataArr = [
        {
          "from": "v.kovalkovska",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "cc",
          "date": "24/01/2020 00:00"
        },
        {
          "from": "Bob Johnson",
          "subject": "Fill form",
          "target" : "Nick",
          "type": "to",
          "date": "25/01/2020 00:00"
        },
        {
          "from": "Helen",
          "subject": "Form",
          "target" : "Ken",
          "type": "bcc",
          "date": "26/01/2020 00:00"
        },
        {
          "from": "Emilia",
          "subject": "Fill details form",
          "target" : "Nick Bolton",
          "type": "replyto",
          "date": "27/01/2020 00:00"
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
