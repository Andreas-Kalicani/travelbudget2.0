import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import {v4 as uuid4 } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import styled, { css} from 'styled-components';

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
  const sharedButtonStyles = css`
    background-color:${props=>props.theme.colors.button};
    font-size: .9rem;
    width:35%;
    height:auto;
    color: ${props=>props.theme.colors.secondary};
    text-transform:uppercase;
    /* font-weight:bold; */
    border:none;
    border-radius: 5px;
    margin-top:10px;
    padding: 10px;
    box-sizing: border-box;
    transition: background-color .3s ease;
  
    &:hover{
        background-color:${props=>props.theme.colors.buttonHover};
        cursor:pointer;
    }
  
`

  const Button = styled.button`
  display:block;
  ${sharedButtonStyles}
  
`

const ModalButton = styled.button`
  display:flex;
  justify-content:center;
  font-family:"Segoe UI";
  font-weight:bold;
  ${sharedButtonStyles}

  
`


const Input = styled.input`
    display:block;
    width:100%;
    padding:20px;
    background-color: #eee;
    height:40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 0px 0 20px 0;
    box-sizing: border-box;
`
const ButtonWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
 


`
const ModalContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  
`
const Select =styled.select`
  display:block;
    width:100%;
    padding-left:20px;
    background-color: #eee;
    height:40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 0px 0 20px 0;
    box-sizing: border-box;
`;

const Label =styled.label`
    font-family:"Verdana";
    font-size:0.9rem;
    
`;
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
    const { dispatch, categories } = useContext(AppContext);

    // States of expense
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');

    // On submit
    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuid4(),
            name: name,
            cost: parseInt(cost),
            category: category,
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
          Create a expense
        </DialogTitle>
        <DialogContent dividers>
        <form onSubmit={onSubmit}>
            <ModalContent>
                <div className="col-sm">
                    <Label htmlFor="name">Description</Label>
                    <Input 
                        required='required' 
                        type="text" 
                        className="form-control" 
                        id="name"
                        value={name}
                        onChange={event=> setName(event.target.value)}
                    />
                </div>
                <div className="col-sm">
                    <Label htmlFor="cost">Cost</Label>
                    <Input 
                        required="required" 
                        type="text" 
                        className="form-control" 
                        id="cost"
                        value={cost}
                        onChange={event=> setCost(event.target.value)}
                    />
                </div>
                <div className="col-sm">
                  <Label htmlFor="cost">Category</Label>
                  <Select 
                          required="required" 
                          type="text"
                          id="category" 
                          
                          
                          name={category}
                          onChange={event=> setCategory(event.target.value)}
                      >
                          <option value="">-Choose a category-</option>
                          {categories.map((category, index) => (
                              <option 
                                  key={index} 
                                  value={category} 
                              >{category}</option>
                          ))}
                  </Select>
                </div>

               
                <ButtonWrapper>
                    <ModalButton type="submit" onClick={handleClose} autoFocus>Save</ModalButton>
                </ButtonWrapper>
            </ModalContent>
        </form>
        </DialogContent>
      </Dialog>

        </>
    )
}
export default AddExpenseForm;