import React, { Fragment, useRef, useContext } from 'react'
import classes from './Form.module.css'
import CardStyle from '../UI/CardStyle'
import { UtilityContext  } from '../../store/UtilityProvider'
const Form = (props) => {
    const formRef = useRef('');
    const dateOfReadingRef = useRef('');
    const readingRef = useRef(0);
    const utilityContext = useContext(UtilityContext);
const submitHandler = (event) => {
    event.preventDefault();
    if (props.readings.length > 0){  
    props.setShowTotal(true);
}
else {
    formRef.current.reset();
    // props.setGoToCalulate(false);
}
    const formInfo = {
    date: dateOfReadingRef.current.value,
    reading: readingRef.current.value,
    paid: false
};
props.setCurrentReading(formInfo.reading)
props.addReading({...formInfo, utility : props.activeUtility});
// formRef.current.reset();
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
                            {props.readings.length>0 && <div className={classes.buttonPostion}>
                                <button className={classes.button} type='submit'>Calculate</button>
                            </div>}
                            {!props.readings.length && <div className={classes.buttonPostion}>
                                <p>There are no readings yet for this utility</p>
                                <button className={classes.button} type = 'submit' >Enter First Reading</button>
                            </div>}
                    </form>
                </CardStyle></div>
        </Fragment>)
}

export default Form;