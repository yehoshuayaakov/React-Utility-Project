import React, { useContext } from 'react'
import { UtilityContext } from '../../store/UtilityProvider';
import CardStyle from '../UI/CardStyle'
import classes from './OutputTotal.module.css';
const OutputTotal = (props) => {
    const utilityContext = useContext(UtilityContext);
    const filteredReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === props.activeUtility)
    const getTotal = () => {
        switch (props.activeUtility){
            case 'Electricity' : {
                const total = (props.currentReading - filteredReadings[filteredReadings.length-1].reading) * .443
                return total.toFixed(2);
            }
            case 'Water' : {
                const total = (props.currentReading - filteredReadings[filteredReadings.length-1].reading) * 6.9
                console.log(filteredReadings[filteredReadings.length-1].reading)
                return total.toFixed(2);
            }
            case 'Gas' : {
                const total = (props.currentReading - filteredReadings[filteredReadings.length-1].reading) * 2.9
                return total.toFixed(2);
            }
        }
    }
return <>
<div className={classes.topMargin}></div>
<div className={classes.outputCard}>
    <CardStyle>
    
        <div className={classes.output}>
            <h1>{props.activeUtility} Bill</h1>
            <h3>Previous Reading on {filteredReadings[filteredReadings.length-1].date}: <br/> 
            <div className={classes.reading}>{filteredReadings[filteredReadings.length-1].reading} </div></h3>
            <h3>Current Reading : 
            <div className={classes.reading}>{props.currentReading}</div></h3>
            <h1>Total Due: {getTotal()}</h1>
        </div>
        <div className={classes.buttonPostion}>
                                <button className={classes.button} onClick={()=>props.setShowTotal(false)}>Go Back</button>
                            </div>
</CardStyle>
    </div>
</>
}

export default OutputTotal;