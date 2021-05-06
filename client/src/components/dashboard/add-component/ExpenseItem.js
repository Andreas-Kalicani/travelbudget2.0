import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../../../context/AppContext';
import styled from 'styled-components';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const ExpenseItemAmount = styled.span`
    /* display: inline-block;
    padding: .25em .5em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .50rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #007bff;
    margin-right: 1rem!important;
     */
    display: inline-block;
    padding: .25em .5em;
    font-size: 75%;
    font-weight: 900;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .50rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: ${props=>props.theme.colors.red};
    margin-right: 1rem!important;

`

const ItemLi = styled.li`
    text-align: -webkit-match-parent;
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    display: flex!important;
    justify-content: space-between!important;
    align-items: center!important;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    font-weight:bold;
    color:${props=>props.theme.colors.primary};
    
`

const DescriptionContainer = styled.div`
    
    margin-left:20%;

`

const ExpenseItem = (props) => {
    const { dispatch, destinationCurrencyCode } = useContext(AppContext);

    const selecIcon = {
        food: () => <RestaurantIcon />,
        transport: () => <DriveEtaIcon />,
        accomodation: () => <HotelIcon/>,
        activities: () => <LocalActivityIcon />,
        insurance:()=><LocalPharmacyIcon/>,
        gifts:()=> <CardGiftcardIcon/>,
        others:()=> <AttachMoneyIcon/>
    }

    const handleDeleteExpense = ()=> {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })

    }

    
    return (
        <ItemLi>
            {/* esto de abajo me hace un log de la categoria, que hereda de ExpenseList.js */}
            {console.log(props.category)} 

            {/* En este ejemplo se ve el icono pero siempre el de food */}
            {/* {selecIcon.food()} */}


            {/* {selecIcon.props.category} 

            esto me da error cannot read property 'category' of undefined
            */}



            {selecIcon[props.category]()} 
            {/* No sale el icono */}
           

            <DescriptionContainer>
                {props.name}
            </DescriptionContainer>
            <div>
                <ExpenseItemAmount>
                    - {props.cost}  {destinationCurrencyCode}   
                </ExpenseItemAmount>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
        </ItemLi>
    )
}

export default ExpenseItem;