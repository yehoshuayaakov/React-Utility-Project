import React, { Fragment, useEffect, useState, useContext} from 'react'
import UtilityPageCard from '../Layout/UtitilyPageCard'
import classes from './ElectricPage.module.css'
import { Messages } from '../../assets/messages'
import { UtilityContext } from '../../store/UtilityProvider'
const ElectricPage = (props) => {
    const utilityContext = useContext(UtilityContext);
   const [showComponent, setShowComponent] =  useState(false);
// useEffect(()=>{
// setTimeout(()=> {
//     setShowComponent(true)
// },100)
// },[showComponent])
    return (
        <Fragment >
            { <div >
                <div className={classes.topContent}></div>
                <div className = {classes.cards}>
                    <div onClick = {()=>props.setShowCharts(true)}> 
                        <UtilityPageCard message={Messages.seeCharts.defaultMessage} />
                    </div>
                 <div onClick = {()=>props.setGoToCalculation(true)}>
                      <UtilityPageCard message={Messages.makeCalculation.defaultMessage} /></div>
                 </div>
            </div>}
        </Fragment>




    )
}

export default ElectricPage;