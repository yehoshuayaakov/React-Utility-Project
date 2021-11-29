import React, { Fragment, useRef } from 'react'
import classes from './Form.module.css'
import CardStyle from '../UI/CardStyle'

const Form = (props) => {
    const formRef = useRef('');
    const dateOfReadingRef = useRef('');
    const readingRef = useRef(0);
const submitHandler = (event) => {
event.preventDefault();
 
const formInfo = {
    date: dateOfReadingRef.current.value,
    reading: readingRef.current.value
};

props.addReading(formInfo);
formRef.current.reset();

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
                            <div className={classes.buttonPostion}>
                                <button className={classes.button} type='submit'>Calculate</button>
                            </div>
                    </form>
                </CardStyle></div>
        </Fragment>)
}

export default Form;