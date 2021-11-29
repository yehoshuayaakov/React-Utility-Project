import React, { useState } from 'react';
import Form from '../Layout/Form';
import OutputTotal from './OutputTotal';

const CalculationPage = (props) => {
    const [showTotal, setShowTotal] = useState(false);
return <>
{!showTotal && <Form 
    setGoToCalculation={props.setGoToCalculation}
    activeUtility={props.activeUtility}
    addReading = {props.addReading}
    setShowTotal={setShowTotal}
    setCurrentReading={props.setCurrentReading}/>}
{showTotal && <OutputTotal
    activeUtility={props.activeUtility}
    setShowTotal={setShowTotal}
    currentReading={props.currentReading}
/>}
</>
}
export default CalculationPage;