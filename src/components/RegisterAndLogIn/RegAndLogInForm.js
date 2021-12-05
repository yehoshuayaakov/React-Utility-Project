import React, { Fragment, useRef, useContext, useReducer, useEffect, useState } from 'react'
import classes from './RegAndLogInForm.module.css'
import CardStyle from '../UI/CardStyle'
import { UtilityContext } from '../../store/UtilityProvider'
 
function userNameReducer(state, action){
    if (action.type === 'userNameInput'){
        console.log(state.isValid)
        return { value: action.value, isValid: action.value.trim().length>5}
    }
    // return {
    //     value: '', isValid: false
    // }
}
function userPasswordReducer(state, action){
    if (action.type === 'userPasswordInput'){
        console.log(state.isValid)
        return { value: action.value, isValid: action.value.trim().length>7}
    }
    // return {
    //     value: '', isValid: false
    // }
}
const RegAndLogInForm = (props) => {
    const utilityContext = useContext(UtilityContext);
    const userNameRef = useRef('');
    const passwordRef = useRef('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
        value: '',
        isValid: null
    })
    const [userPasswordState, dispatchPassword] = useReducer(userPasswordReducer, {
        value: '',
        isValid: null
    })

    useEffect(()=> {
        setTimeout(()=>{
            setFormIsValid(userNameState.isValid && userPasswordState.isValid)
        },500)
    },[userNameState, userPasswordState])
    const submitHandler = (event) => {
        event.preventDefault();
        const userName = userNameRef.current.value.charAt(0).toUpperCase() + userNameRef.current.value.slice(1);
        utilityContext.setActiveUser(userName);
        console.log(userName);


        //add logic for verification
        props.setLoggedIn(true);
    }
    const userNameInputHandler = (event) => {
        dispatchUserName({
            type: 'userNameInput',
            value: event.target.value
        })
    }
    const userPasswordHandler = event =>[
        dispatchPassword({
            type: 'userPasswordInput',
            value: event.target.value
        })
    ]
    return (
        <Fragment>
            <div className={classes.topContent}></div>
            <div className={classes.form}>
                <CardStyle>
                    <form onSubmit={submitHandler}>
                        <div>
                            <h2>Log In</h2>
                            <div className={classes.input}>
                                <label htmlFor='userName'>Enter User Name: </label>

                                <input id='userName' type='text' ref={userNameRef} onChange = {userNameInputHandler}/></div>
                                {userNameState.value !== '' && !userNameState.isValid && <p className = {classes.userNameWarning}>User name must be at least 6 chracters long</p>}
                            <div className={classes.input}>
                                <label htmlFor='password'>Enter Password: </label>
                                <div className={classes.passwordInput}>
                                    <input id='password' type='password' ref={passwordRef} onChange={userPasswordHandler}/>
                                    {userPasswordState.value !== '' && !userPasswordState.isValid && <p className = {classes.userNameWarning}>Password must be at least 8 chracters long</p>}
                                </div>
                            </div>


                        </div>
                        <div className={classes.buttonPostion}>
                            <button className={!formIsValid ? classes.disabledButton : classes.button} type='submit'>Login</button>
                        </div>
                    </form>
                </CardStyle></div>
        </Fragment>)
}
export default RegAndLogInForm;