 import classes from './UtilityPageCard.module.css'
 import CardStyle from '../UI/CardStyle'
 const UtilityPageCard = (props) => {
return (
    <div className = {classes.card}> 
<CardStyle >
    <div className = {classes.message}>{props.message}</div>   
</CardStyle>
   </div>

 )}
 export default UtilityPageCard;