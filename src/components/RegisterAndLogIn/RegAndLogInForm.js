import React, { Fragment, useRef, useContext } from 'react'
import classes from './RegAndLogInForm.module.css'
import CardStyle from '../UI/CardStyle'
import { UtilityContext } from '../../store/UtilityProvider'

const RegAndLogInForm = (props) => {
const utilityContext = useContext(UtilityContext);
const emailRef = useRef('');
const passwordRef = useRef('');

const submitHandler = (event)=> {
 event.preventDefault();
const emailName = emailRef.current.value.split('@')[0];
utilityContext.setActiveUser(emailName);
console.log(emailName);


//add logic for verification
props.setLoggedIn(true);
}
    return (
    <Fragment>
        <div className =  {classes.topContent}></div>
    <div className={classes.form}>
        <CardStyle>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>Log In</h2>
                    <div className={classes.input}>
                        <label htmlFor='email'>Enter Email: </label>
                        <div className={classes.emailInput}>
                            <input id='email' type='text' ref={emailRef} /></div>
                    </div>
                    <div className={classes.input}>
                        <label htmlFor='password'>Enter Password: </label>
                        <input id='password' type='password' ref={passwordRef} />
                    </div>


                </div>
                <div className={classes.buttonPostion}>
                    <button className={classes.button} type='submit'>Login</button>
                </div>
            </form>
        </CardStyle></div>
   </Fragment> )}
export default RegAndLogInForm;