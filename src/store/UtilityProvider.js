import React, { useState } from 'react'

const UtilityContext = React.createContext( {
    activeUtility: '',
    activeUser: '',
    id: '',
    utilitiesReadings: [],
    setUtilitiesReadings: (utilitiesReadings) => {},
    setActiveUser: (user) => {},
    setId: (id) => {},
    setActiveUtility: (utility) => {}
});
 export { UtilityContext }


const UtilityProvider = (props) => {
    const [utilitiesReadings, setUtilitiesReadings] = useState([]);
    const [activeUser, setActiveUser] = useState('');
    const [activeUtility, setActiveUtility] = useState('');
    const [id, setId] = useState('')
    const utilityContext = {
        utilitiesReadings: utilitiesReadings,
        setUtilitiesReadings: setUtilitiesReadings,
        setActiveUser: setActiveUser,
        activeUser: activeUser,
        activeUtility: activeUtility,
        setActiveUtility: setActiveUtility,
        id,
        setId
    }    
    return <UtilityContext.Provider value = {utilityContext}>
        {props.children}
    </UtilityContext.Provider>
}
export default UtilityProvider