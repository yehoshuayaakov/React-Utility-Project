import { useState, useEffect, useContext } from "react";
import { UtilityContext } from '../../store/UtilityProvider'
import classes from './PaidButton.module.css'
const PaidButton = (props) => {
    const utilityContext = useContext(UtilityContext);
    const [paidBill, setPaidBill] = useState(false);
    const paidAlready = props.list.filter(reading => reading.id === props.id);
    const [amount] = paidAlready;
console.log(amount.paid)


    const handlePaidClick = ()=>{
        setPaidBill(true);
        const id = props.id ? props.id : utilityContext.id
        const newTotal = (props.totalDue - props.amount).toFixed(2);
        console.log(newTotal)
        props.setTotalDue(newTotal);
        props.handlePaid(id);
        console.log("button", props.id)
    }
    useEffect (()=> {
    if (amount.paid != false){
    setPaidBill(true)
} },[])
return props.index === 0 ? '-' :
!paidBill ? <button onClick={handlePaidClick} className={classes.button}>click when paid</button> :
                            <p className={classes.paid}>PAID</p>

}
export default PaidButton;