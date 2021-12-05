
import  UtilityProvider  from './store/UtilityProvider'
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Layout/Header';
import { useState } from 'react'
import RegAndLogInForm from './components/RegisterAndLogIn/RegAndLogInForm';
import Footer from './components/UI/Footer';
function App() {
 const [loggedIn, setLoggedIn]  = useState(false);
  return (
    <UtilityProvider >
      <div className="App">
        <Header/>
        {!loggedIn &&<RegAndLogInForm setLoggedIn = {setLoggedIn}/>}
        {loggedIn &&<HomePage/>}
        
      </div>
      <Footer/>
    </UtilityProvider>
  );
}

export default App;
