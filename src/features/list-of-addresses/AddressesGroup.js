import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Address from './Address.js';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles({
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '300px'
  },
});

const AddressesGroup = () => {
    const classes = useStyles();
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
    const [open, setOpen] = React.useState(false);
    const [inputName, setInputName] = React.useState('');
    const [inputEmail, setInputEmail] = React.useState('');
    const [inputOptOut, setInputOptOut] = React.useState(false);

    const newData = () => {
      const newElem = {"name": inputName, "email": inputEmail, "opt_out": inputOptOut}
      const newData = [...data, newElem]
      return newData;
    }

    const addNewElem = () => {
      setData(
        newData()
      )
      handleClose();
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

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
              onClick={handleClickOpen}
              variant="contained" 
              color="primary">
                + Add new address
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {/* <DialogTitle id="alert-dialog-title">{"Enter some info below"}</DialogTitle> */}
              <DialogContent>
                <input className={classes.input} type="text" placeholder="Name.." onChange={(e) => setInputName(e.target.value)}/><br/>
                <input className={classes.input} type="email" placeholder="Email.." onChange={(e) => setInputEmail(e.target.value)}/><br/>
                <input type="checkbox" onChange={(e) => setInputOptOut(e.target.checked)}/> Opt out
              </DialogContent>
              <DialogActions>
                <Button onClick={addNewElem} color="primary">
                  Add
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>    
        </div>
    );
}

export default AddressesGroup;