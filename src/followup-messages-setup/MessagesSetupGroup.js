import React from 'react';
import MessagesSetup from './MessagesSetup.js';

const MessagesSetupGroup = () => {
    let messageNumber = 0;
    const data = [
        {
          "to": "v.kovalkovska",
          "from": "You",
          "message": "Hi - just wanted to make sure you got the email below. Thanks!"
        },
        {
          "to": "Peter",
          "from": "You",
          "message": "Just checking in. Wanted to make sure you got my email."
        },
        {
          "to": "Ira",
          "from": "You",
          "message": "Just trying you again. Would love to hear back from you."
        },
        {
          "to": "Paul",
          "from": "You",
          "message": "Thought I'd try you just one more time."
        }
    ]
    return (
        <div>
            {
                data.map((elem, index) => {
                    return <MessagesSetup
                        key={index}
                        message={elem}
                        messageNumber={++messageNumber} 
                    />
                })
            }   
        </div>
    );
}

export default MessagesSetupGroup;