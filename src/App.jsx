import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewSlider from './Components/NewSlider/NewSlider.jsx';
import Section1 from './Components/Sections/Section1/Section1.jsx';
import Login from '../src/Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const Toggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <>

      <div className='app'>
        {
          isLoggedIn ? <Login setIsLoggedIn={Toggle} /> : <Signup setIsLoggedIn={Toggle} />
        }

        <NewSlider />
        <Section1 />
      </div>
    </>
  )
}

export default App
