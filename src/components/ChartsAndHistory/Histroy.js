import classes from './History.module.css'
import { useCallback, useContext, useEffect, useState } from 'react';
import { UtilityContext } from '../../store/UtilityProvider';
import CardStyle from '../UI/CardStyle'
import PaidButton from './PaidButton';

const History = (props) => {
    const [historyList, setHistoryList] = useState([]);
    const [totalDue, setTotalDue] = useState(0);
    const utilityContext = useContext(UtilityContext);
    const [id, setId] = useState('');
    console.log(props.readings)
    const waterReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Water");
    const gasReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Gas");

    const ElectricityReadings = utilityContext.utilitiesReadings.filter(reading => reading.utility === "Electricity");
     

    useEffect(() => {
        const list = utilityContext.utilitiesReadings.filter(reading => reading.utility === utilityContext.activeUtility)
        setHistoryList(list);
        const unPaidList = list.filter(entry=> !entry.paid);
        const total = unPaidList.reduce((sum, { amount }) => sum + +amount, 0).toFixed(2);
        setTotalDue(total);
        console.log("totatldue", totalDue);
    }, [utilityContext.activeUtility]);
    //  const getTotal = useCallback(() => {

    //     setTotalDue(total);
    //     },[historyList])
    useEffect(async () => {
        try {
                const response = await fetch(`https://utilities-react-app-default-rtdb.firebaseio.com/${utilityContext.activeUser}.json`);
                const data = await response.json();
                // console.log(data.Electricity);
                
                const utilitiesReadings = [];
                for (let info in data) {
                    switch (info) {
                        case "Electricity": {
                            for (let info in data.Electricity)
                                utilitiesReadings.push({ ...data.Electricity[info], utility: 'Electricity' })
                                
                            break;
                        }
                        case "Water": {
                            for (let info in data.Water){
                                utilitiesReadings.push({ ...data.Water[info], utility: 'Water', id: info })
                                console.log(data.Water[info])
                                console.log(Object.keys(data.Water)[0])
                            }
                            break;
                        }
                        case "Gas": {
                            for (let info in data.Gas)
                                utilitiesReadings.push({ ...data.Gas[info], utility: 'Gas' })
                            break;
                        }
                    }
                    utilityContext.setUtilitiesReadings(utilitiesReadings);
                }
                    console.log(utilitiesReadings)
            }
            catch (error){
                console.log(error.message)
            }
            }, [])
 const handlePaid = async(id)=>{
    const update = {
        paid: true
    }
    console.log("history", id)
const updatedReadingIndex = utilityContext.utilitiesReadings.findIndex(reading => reading.id ===id);
 
try { const response =  await fetch(`https://utilities-react-app-default-rtdb.firebaseio.com/${utilityContext.activeUser}/${utilityContext.activeUtility}/${id}/paid.json`, {
    method: 'Post',
    body: JSON.stringify(update),
    headers: {
        'Content-Type': 'application/json'
    }
})
const data = await response.json();
for(let info in data){
    console.log(data[info])
    if (updatedReadingIndex !== -1){
    const updatedReading = {...utilityContext.utilitiesReadings[updatedReadingIndex], id: data[info], paid: true};
    const updatedUtilities = [...utilityContext.utilitiesReadings]
    updatedUtilities[updatedReadingIndex]=updatedReading;
    utilityContext.setUtilitiesReadings(updatedUtilities);
}
}

;}
catch(error){
    console.log(error)

}
}
    const renderData = () => {

        return historyList.map((utility, index) => {
            
            console.log(utility.id)
            return (
                <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{utility.date}</td>
                    <td>{utility.reading}</td>
                    <td>{index === 0 ? `-` : utility.amount}</td>
                    <td>
                        <PaidButton 
                        index = {index}
                        setTotalDue={setTotalDue} 
                        totalDue={totalDue} 
                        amount={utility.amount} 
                        id={utility.id} 
                        list={historyList}
                        handlePaid={handlePaid}/>
                    </td>
                </tr>
            )
        })

    }
    return <>
        <div className={classes.topSpace}></div>
        <div className={classes.cardStyle}>
            <CardStyle >
                <div className={classes.maxHeight}>
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
                        <h2 className={classes.header}>Total Due : ${totalDue}</h2>
                        <button onClick={() => props.setGoToChartsAndHistory(false)}>Go back</button>
                    </div>
                </div>
            </CardStyle>
        </div>
    </>
}
export default History;