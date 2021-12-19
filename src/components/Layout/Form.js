import React, { Fragment, useRef, useContext, useState, useEffect } from 'react'
import classes from './Form.module.css'
import CardStyle from '../UI/CardStyle'
import { UtilityContext  } from '../../store/UtilityProvider'
const Form = (props) => {
    const formRef = useRef('');
    const dateOfReadingRef = useRef('');
    const readingRef = useRef(0);
    const utilityContext = useContext(UtilityContext);
    const [readings, setReadings] = useState([]);
    const filteredReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === props.activeUtility)
    const [firstReadingEntered, setFirstReadingEntered] = useState(false)
    useEffect (()=> {
        setReadings(filteredReadings)
    },[]);

    const getTotal = () => {
        switch (props.activeUtility){
            case 'Electricity' : {
                if (filteredReadings.length > 0){
                const total = (readingRef.current.value - filteredReadings[filteredReadings.length-1].reading) * .443
                return total.toFixed(2);}
                else return 0;
            }
            case 'Water' : {
                if (filteredReadings.length > 0){
                const total = (readingRef.current.value - filteredReadings[filteredReadings.length-1].reading) * 6.9
                console.log(filteredReadings[filteredReadings.length-1].reading)
                return total.toFixed(2);}
                else{
                    return 0;
                }
            }
            case 'Gas' : {
                if (filteredReadings.length > 0){
                const total = (readingRef.current.value - filteredReadings[filteredReadings.length-1].reading) * 2.9
                return total.toFixed(2);}
                else return 0;
            }
        }
    }
const submitHandler = (event) => {
    event.preventDefault();
    if (filteredReadings.length > 0){  
    props.setShowTotal(true);
    setFirstReadingEntered(false)
}
else{
    setFirstReadingEntered(true);
}

    const formInfo = {
    date: dateOfReadingRef.current.value,
    reading: readingRef.current.value,
    paid: false,
    amount: getTotal()
};
props.setCurrentReading(formInfo.reading)
props.addReading({...formInfo, utility : props.activeUtility});
 formRef.current.reset();
 setReadings([...readings, {...formInfo, utility : props.activeUtility}])
// utilityContext.setUtilitiesReadings(...utilityContext.utilitiesReadings, {...formInfo, utility: props.activeUtility });
// console.log(utilityContext(utilitiesReadings));
// }
}
    return (
        <Fragment>
            <div className={classes.topContent}></div>
                <h1 className={classes.formControl}> {props.activeUtility} Calculation</h1>
                <h4 className={classes.content}>please fill in the following fields</h4>
            
            <div className={classes.form}>
                <CardStyle>
                    <form onSubmit = {submitHandler} ref = {formRef}>
                        <div>
                            <div className={classes.input}>
                                <label htmlFor='date'>Enter Date: </label>
                                <div className={classes.dateInput}>
                                    <input id='date' type='date' ref={dateOfReadingRef}/></div>
                            </div>
                            <div className={classes.input}>
                                <label htmlFor='reading'>Enter Current Reading of <br />{props.activeUtility}: </label>
                                <input id='reading' type='number' ref={readingRef}/>
                            </div>

                            
                        </div>
                            {readings.length>0  && <div className={classes.buttonPosition}>
                                <button className={classes.button} type='submit'>Calculate</button>
                                <button className={classes.button2} onClick={()=>props.setGoToCalculation(false)}>Go Back</button>
                            </div>}
                            {!readings.length && <div className={classes.buttonPostion}>
                                <p>There are no readings yet for this utility</p>
                                <button className={classes.button} type = 'submit' >Enter First Reading</button>
                            </div>}
                    </form>
                </CardStyle></div>
        </Fragment>)
}

export default Form;