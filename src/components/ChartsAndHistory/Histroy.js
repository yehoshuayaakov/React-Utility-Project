import classes from './History.module.css'
import { useCallback, useContext, useEffect, useState } from 'react';
import { UtilityContext } from '../../store/UtilityProvider';
import CardStyle from '../UI/CardStyle'
import PaidButton from './PaidButton';

const History = (props) => {
    const [historyList, setHistoryList] = useState([]);
    const [totalDue, setTotalDue] = useState(0);
    const utilityContext = useContext(UtilityContext);
    console.log(props.readings)
   
    const waterReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Water");
    const gasReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Gas");

    const ElectricityReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Electricity");
    
   
    useEffect(()=>{
        const list = utilityContext.utilitiesReadings.filter(reading => reading.utility === utilityContext.activeUtility)
        setHistoryList(list);
        const total = list.reduce((sum, {amount})=>  sum + amount, 0);
        setTotalDue(total);
        console.log(total);
    },[utilityContext.activeUtility]);
//  const getTotal = useCallback(() => {
        
//     setTotalDue(total);
//     },[historyList])


    const renderData = () => {
        return historyList.map((utility, index) => {
            return (
                <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{utility.date.toLocaleString()}</td>
                    <td>{utility.reading}</td>
                    <td>{utility.amount}</td>
                    <td>
                        <PaidButton setTotalDue={setTotalDue} totalDue={totalDue} amount = {utility.amount}/>
                    </td>
                </tr>
            )
        })

    }
    return <>
        <div className={classes.topSpace}></div>
        <div className={classes.cardStyle}>
        <CardStyle >
            <h1 className={classes.header}>{utilityContext.activeUtility} History</h1>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Reading</th>
                        <th>Amount Due</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData()}
                </tbody>
            </table>
            <div>
            <h2 className={classes.header}>Total Due : {totalDue}</h2>
            <button onClick={()=>props.setGoToChartsAndHistory(false)}>Go back</button>
            </div>
        </CardStyle>
   </div>
    </>
}
export default History;