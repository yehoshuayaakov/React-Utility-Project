import React, { useState, useEffect, useContext } from 'react'
import ElectricPage from './Electric/ElectricPage'
import Form from './Layout/Form';
import { UtilityContext } from '../store/UtilityProvider' 
import CalculationPage from './Calculations/CalcaulationPage';
import History from './ChartsAndHistory/Histroy';
const NavigationPage = props => {
    const utilityContext = useContext(UtilityContext);
    const [showCharts, setShowCharts] = useState(false);
    const [goToCalculation, setGoToCalculation] = useState(false);
    const [currentReading, setCurrentReading] = useState(0);
    const [goToChartsAndHistory, setGoToChartsAndHistory] = useState(false);

    async function addReading(reading) {
    try { const response =  await fetch(`https://utilities-react-app-default-rtdb.firebaseio.com/${utilityContext.activeUser}/${utilityContext.activeUtility}.json`, {
            method: 'Post',
            body: JSON.stringify(reading),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);}
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
    //  setGoToCalculation(false);
    //     setShowCharts(false);
        
    },[utilityContext.activeUtility]);
    return (
        <>
            {(!goToChartsAndHistory && !goToCalculation ) &&
                <ElectricPage
                    setGoToCalculation={setGoToCalculation}
                    setShowCharts={setShowCharts}
                    activeUtility={props.activeUtility} 
                    setGoToChartsAndHistory = {setGoToChartsAndHistory}/>}
            {goToCalculation &&
                <CalculationPage
                    setGoToCalculation={setGoToCalculation}
                    activeUtility={props.activeUtility}
                    addReading = {addReading}
                    currentReading={currentReading}
                    setCurrentReading={setCurrentReading}
                    readings = {utilityContext.utilitiesReadings}
                />}
            {goToChartsAndHistory && 
            <History
            readings = {utilityContext.utilitiesReadings}/>
            }
        </>
    )
}
export default NavigationPage;