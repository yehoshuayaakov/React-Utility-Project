import { useState } from "react";
import classes from './PaidButton.module.css'
const PaidButton = (props) => {
    const [paid, setPaid] = useState(false);
    const handlePaidClick = ()=>{
        setPaid(true);
        const newTotal = props.totalDue - props.amount;
        props.setTotalDue(newTotal);
    }
return !paid ? <button onClick={handlePaidClick} className={classes.button}>click when paid</button> :
                            <p className={classes.paid}>PAID</p>

}
export default PaidButton;