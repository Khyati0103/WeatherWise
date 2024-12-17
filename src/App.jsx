import React, { useContext, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
import LoginPopup from './Components/LoginPopup';
// import background from './Components/Assets/background.jpg';
import  Forecast  from './Components/Forecast';
// import {  getHourlyForecast ,  getDailyForecast } from './api';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CurrentWeather from './Components/CurrentWeather';
import ThemeContext from './context/theme.context'
import WeatherContext from './context/weather.context';
import Loader from './Components/Loader';
import NavBar from './Components/Navbar';
// import './App.scss';
import './styles/components/App.scss';
import OtherInfo from './Components/OtherInfo';
import Footer from './Components/Footer';
import BotpressChat from './Components/BotpressChat';
// import Background from './Components/Background.jsx';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const {loading, currentWeather, hourlyForecast, dailyForecast} = useContext(WeatherContext);
  const { dark } =useContext(ThemeContext);

  return (
  <div className={`App-${ dark ? 'dark' : 'light'}`}>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  
     {loading ? (
      <Loader />
     ) : (
      <>
      <Router>
      <NavBar setShowLogin={setShowLogin} />
      {/* <Background/> */}
      {/* <br/> <br/> */}
      <Routes>
      <Route path="/" element={<>
        {/* <CurrentWeather theme={dark ? 'dark' : 'light'} data={currentWeather} /> */}
        <CurrentWeather data={currentWeather} />
        <br/><br/>
        <BotpressChat/>
          <Forecast 
            type='hourly' 
            title='HOURLY FORECAST' 
            data={hourlyForecast}/>
          <br/><br/><br/>
          <OtherInfo 
            title='TODAY WEATHER DETAILS' 
            data={currentWeather}/>
            <br/>
          <Forecast 
          type='daily'
          title='21 DAYS FORECAST'
          data={dailyForecast}/>
          </>} />
           {/* route to Home */}
            <Route path="/AboutUs" element={<AboutUs />} /> {/* route to About Us */}
            <Route path="/ContactUs" element={<ContactUs />} /> {/* Contact Us route */}
            {/* <Route path="/Login" element={<Login />} /> 
            <Route path="/Signup" element={<Signup />} /> */}
      </Routes>
      <Footer/>
      </Router>
   </>
          
     )}
      </div>
     
  )
}
export default App;
