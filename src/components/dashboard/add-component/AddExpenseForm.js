import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import {v4 as uuid4 } from 'uuid';
// material-ui imports below
import { withStyles } from '@material-ui/core/styles';
/* import Button from '@material-ui/core/Button'; */
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

// style components below
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  }); 

  const Button = styled.button`
  display:block;
  background-color:${props=>props.theme.colors.button};
  font-size: .9rem;
  width:35%;
  height:auto;
  color: ${props=>props.theme.colors.secondary};
  text-transform:uppercase;
  font-weight:bold;
  border:none;
  border-radius: 5px;
  margin-top:10px;
  padding: 20px;
  box-sizing: border-box;
  transition: background-color .3s ease;
 
  &:hover{
      background-color:${props=>props.theme.colors.buttonHover};
      cursor:pointer;
  }
`
// Dialog title
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  // Dialog content and action
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  // The component below
  
const AddExpenseForm = () => {

    // Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    //add expense action
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuid4(),
            name: name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }

    return (
        <>
        <Button onClick={handleClickOpen} className="btn-modal">
        Add an expense
        </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
        <form onSubmit={onSubmit}>
            <div className="content inside">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input 
                        required='required' 
                        type="text" 
                        className="form-control" 
                        id="name"
                        value={name}
                        onChange={event=> setName(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input 
                        required="required" 
                        type="text" 
                        className="form-control" 
                        id="cost"
                        value={cost}
                        onChange={event=> setCost(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <button type="submit" className="btn-modal" onClick={handleClose} autoFocus>Save</button>
                </div>
            </div>
        </form>
        </DialogContent>
      </Dialog>

        </>
    )
}
export default AddExpenseForm;