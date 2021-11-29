import React, { useContext }from 'react'
import classes from './Header.module.css'
import HeaderUtilityButton from './HeaderUtilityButton'
import { UtilityNames} from '../../Enums'
import { UtilityContext } from '../../store/UtilityProvider' 
const Header = () => {
    const utilityContext = useContext(UtilityContext);
    const activeUtility = utilityContext.activeUtility;
    return (
        <div>
            <header className={classes.header}>
                <h1>Divide Utilities App</h1>
                <div className={classes.center}>
                <HeaderUtilityButton 
                utility = {UtilityNames.water} 
                
                activeUtility = {activeUtility}/>
                <HeaderUtilityButton 
                utility = {UtilityNames.gas} 
                
                activeUtility = {activeUtility}/>
                <HeaderUtilityButton
                 utility = {UtilityNames.electric }
                 
                activeUtility = {activeUtility}/>
                <div className = {classes.userName}>{utilityContext.activeUser}</div>
                </div>
            </header>

        </div>
    )
}

export default Header;