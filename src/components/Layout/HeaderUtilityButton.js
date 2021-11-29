import React, { useContext } from 'react'
import classes from './HeaderUtilityButton.module.css'
import { UtilityContext } from '../../store/UtilityProvider' 

const HeaderUtilityButton = props => {
    const utilityContext = useContext(UtilityContext);
const handleSetUtitility = () => {
    utilityContext.setActiveUtility(props.utility);
    console.log(props.utility)
}
    return (
        <button className = {utilityContext.activeUtility === props.utility ? classes.activeButton : classes.button} onClick = {handleSetUtitility}>
            {props.utility}
        </button>
    )
}

export default HeaderUtilityButton;