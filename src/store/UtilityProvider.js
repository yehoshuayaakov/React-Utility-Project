import React, { useState } from 'react'

const UtilityContext = React.createContext( {
    activeUtility: '',
    activeUser: '',
    utilitiesReadings: [],
    setUtilitiesReadings: (utilitiesReadings) => {},
    setActiveUser: (user) => {},
    setActiveUtility: (utility) => {}
});
 export { UtilityContext }


const UtilityProvider = (props) => {
    const [utilitiesReadings, setUtilitiesReadings] = useState([]);
    const [activeUser, setActiveUser] = useState('');
    const [activeUtility, setActiveUtility] = useState('');
    const utilityContext = {
        utilitiesReadings: utilitiesReadings,
        setUtilitiesReadings: setUtilitiesReadings,
        setActiveUser: setActiveUser,
        activeUser: activeUser,
        activeUtility: activeUtility,
        setActiveUtility: setActiveUtility
    }    
    return <UtilityContext.Provider value = {utilityContext}>
        {props.children}
    </UtilityContext.Provider>
}
export default UtilityProvider