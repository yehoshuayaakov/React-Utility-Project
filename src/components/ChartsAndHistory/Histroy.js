import classes from './History.module.css'
import { useContext } from 'react';
import { UtilityContext } from '../../store/UtilityProvider';
import CardStyle from '../UI/CardStyle'
const History = (props)=>{
const utilityContext = useContext(UtilityContext);
console.log(props.readings)
const waterReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Water");
const gasReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Gas");

const ElectricityReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Electricity");
const renderData = () => {
    return utilityContext.utilitiesReadings.map((utility, index)=> {
        return (
            <tr key = {index}>
                <th>{index+1}</th>
                <td>{utility.date.toLocaleString()}</td>
                <td>{utility.reading}</td>
                <td>{utility.amount}</td>
                <td>
                    <button>click when paid</button>
                </td>
            </tr>
        )
    })

}
    return <>
    <div className = {classes.topSpace}></div>
        
        <table className = {classes.table}>
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
    </>
}
export default History;