import React, { useState, useEffect, useContext } from 'react'
import ElectricPage from './Electric/ElectricPage'
import Form from './Layout/Form';
import { UtilityContext } from '../store/UtilityProvider' 
const NavigationPage = props => {
    const utilityContext = useContext(UtilityContext);
    const [showCharts, setShowCharts] = useState(false);
    const [goToCalculation, setGoToCalculation] = useState(false);

    async function addReading(reading) {
     const response =  await fetch(`https://utilities-react-app-default-rtdb.firebaseio.com/${utilityContext.activeUser}/${utilityContext.activeUtility}.json`, {
            method: 'Post',
            body: JSON.stringify(reading),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
    //  setGoToCalculation(false);
    //     setShowCharts(false);
        
    },[utilityContext.activeUtility]);
    return (
        <>
            {(!showCharts && !goToCalculation) &&
                <ElectricPage
                    setGoToCalculation={setGoToCalculation}
                    setShowCharts={setShowCharts}
                    activeUtility={props.activeUtility} />}

            {goToCalculation &&
                <Form
                    setGoToCalculation={setGoToCalculation}
                    activeUtility={props.activeUtility}
                    addReading = {addReading}
                />}
        </>
    )
}
export default NavigationPage;