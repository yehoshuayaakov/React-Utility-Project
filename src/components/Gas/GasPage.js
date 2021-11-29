import React, { Fragment } from 'react'
import Form from '../Layout/Form';
import classes from './GasPage.module.css'
const GasForm = (props) => {
    return (
        <Fragment>
            <div className={classes.formControl}>
                <h1 > Gas Calculation</h1>
                <h4 className={classes.content}>please fill in the following fields</h4>
                <div className={classes.form}>
                <Form activeUtility={props.activeUtility} /></div>
            </div>
        </Fragment>
    )
}

export default GasForm;