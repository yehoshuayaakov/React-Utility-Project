import React, { Fragment } from 'react'
import Form from '../Layout/Form';
import classes from './WaterPage.module.css'
const WaterForm = (props) => {
    return (
        <Fragment>
            <div >
                <h1 className={classes.formControl}> Water Calculation</h1>
                <h4>please fill in the following fields</h4>
                <div className={classes.form}>
                <Form activeUtility={props.activeUtility} /></div>
            </div>
        </Fragment>
    )
}

export default WaterForm;