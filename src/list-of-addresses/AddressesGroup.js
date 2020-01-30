import React from 'react';
import Address from './Address.js';
import Button from '@material-ui/core/Button';

const AddressesGroup = () => {
    const dataArr = [
        {
          "name" : "Nick Bolton",
          "email": "nick.bolton@gmail.com",
          "opt_out": true
        },
        {
          "name": "Bob Johnson",
          "email": "bob.johnson@gmail.com",
          "opt_out": true
        },
        {
          "name": "Helen",
          "email": "helen@gmail.com",
          "opt_out": false
        },
        {
          "name": "Emilia",
          "email": "emilia@gmail.com",
          "opt_out": false
        }
    ]

    const [data, setData] = React.useState(dataArr);
    return (
        <div>
            {
                data.map((elem, index) => {
                    return <Address
                        key={index}
                        address={elem} 
                    />
                })
            } 

            <Button
              variant="contained" 
              color="primary">
                + Add new address
            </Button>  
        </div>
    );
}

export default AddressesGroup;