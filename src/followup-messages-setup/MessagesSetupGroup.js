import React from 'react';
import MessagesSetup from './MessagesSetup.js';
import Button from '@material-ui/core/Button';

const MessagesSetupGroup = () => {
    let messageNumber = 0;
    const dataArr = [
        {
          "to": "v.kovalkovska",
          "from": "You",
          "message": "Hi - just wanted to make sure you got the email below. Thanks!",
          "followupAfter": "3"
        },
        {
          "to": "Peter",
          "from": "You",
          "message": "Just checking in. Wanted to make sure you got my email.",
          "followupAfter": "4"
        },
        {
          "to": "Ira",
          "from": "You",
          "message": "Just trying you again. Would love to hear back from you.",
          "followupAfter": "7"
        },
        {
          "to": "Paul",
          "from": "You",
          "message": "Thought I'd try you just one more time.",
          "followupAfter": "7"
        }
    ]
    const [data, setData] = React.useState(dataArr);

    const newData = () => {
      const newElem = {"to": "Paul", "from": "You", "message": "Thought I'd try you just one more time.", "followupAfter": "7"}
      const newData = [...data, newElem]
      return newData;
    }

    const addNewElem = () => {
      setData(
        newData()
      )
    };

    const updatedData = (editedText, index, editedFollowupAfter) => {
      const updatedData = [...data];
      const newEditedText = editedText.slice(3, -5);
      let newEditedSubstr;
      if (newEditedText.indexOf("&nbsp;") !== -1) {
        newEditedSubstr = newEditedText.slice(0, (newEditedText.indexOf("&nbsp;")));
        updatedData[index].message = newEditedSubstr;
      } else {
        updatedData[index].message = newEditedText;
      }
      updatedData[index].followupAfter = editedFollowupAfter;
      return updatedData;
    }

    const updateState = (editedText, index, editedFollowupAfter) => {
      setData(
        updatedData(editedText, index, editedFollowupAfter)
      )
      console.log(data)
      console.log(index)
      console.log(editedFollowupAfter);
    };

    return (
        <div>
            {
                data.map((elem, index) => {
                    return <MessagesSetup
                        data={data}
                        setData={setData}
                        dataLength={data.length}
                        update={updateState}
                        index={index}
                        key={index}
                        message={elem}
                        messageNumber={++messageNumber} 
                    />
                })
            } 
            
            <Button
              onClick={addNewElem} 
              variant="contained" 
              color="primary">
                + Add another followup
            </Button>
              
        </div>
    );
}

export default MessagesSetupGroup;