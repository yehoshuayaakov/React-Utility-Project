import React, { useState } from 'react'

const UtilityContext = React.createContext( {
    activeUtility: '',
    activeUser: '',
    setActiveUser: (user) => {},
    setActiveUtility: (utility) => {}
});
 export { UtilityContext }


const UtilityProvider = (props) => {
    const [activeUser, setActiveUser] = useState('');
    const [activeUtility, setActiveUtility] = useState('');
    const utilityContext = {
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