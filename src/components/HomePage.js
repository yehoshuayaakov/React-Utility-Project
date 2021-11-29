import { useContext, Fragment, useEffect } from 'react'
import Header from './Layout/Header'


import WelcomePage from './Layout/WelcomePage'
import { UtilityContext } from '../store/UtilityProvider'

import classes from './HomePage.module.css'
import Form from './Layout/Form'
import ElectricPage from './Electric/ElectricPage';
import NavigationPage from './NavigationPage';
import RegAndLogInForm from './RegisterAndLogIn/RegAndLogInForm';
const HomePage = props => {
    const utilityContext = useContext(UtilityContext);
    useEffect (async ()=> {
    const response =  await fetch(`https://utilities-react-app-default-rtdb.firebaseio.com/${utilityContext.activeUser}.json`);
    const data = await response.json();
    console.log(data);
    const utilityInfo = [];
     for (let info in data){
         console.log(data[info])
     }

    },[])
const renderForm = ()=> {
    switch (utilityContext.activeUtility){
        case "Gas": 
        return <Form activeUtility = {utilityContext.activeUtility}/>
        break;
        case "Water": 
        return <Form activeUtility = {utilityContext.activeUtility}/>
        break;
        case "Electricity": 
        return <Form activeUtility = {utilityContext.activeUtility}/>
        break;
    }
}

return (
    <Fragment>
        {/* <Header />
        <RegAndLogInForm/> */}
        {!utilityContext.activeUtility && <WelcomePage/>}
        {/* {utilityContext.activeUtility === 'Gas' && <Form activeUtility = {utilityContext.activeUtility}/>} */}
        {utilityContext.activeUtility && <div>
            {/* <Form activeUtility = {utilityContext.activeUtility}/> */}
    <NavigationPage activeUtility ={utilityContext.activeUtility}/></div>}
        {/* {utilityContext.activeUtility === 'Water' && <Form activeUtility = {utilityContext.activeUtility}/>} */}
    <footer className = {classes.footer}>
    <div >

    </div>
    </footer>
    </Fragment>
)
}

export default HomePage;