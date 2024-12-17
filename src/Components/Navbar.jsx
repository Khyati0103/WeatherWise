import React, { useState, useContext } from 'react'
//import { FaBars } from "react-icons/fa6";
// import './Navbar.css';
import '../styles/components/Navbar.scss';
import Settings from './Settings';
import WeatherContext from '../context/weather.context';
import user_icon from './Assets/user.png';
import logout_icon from "./Assets/logout.png"
import { useNavigate } from 'react-router-dom';

function Navbar({setShowLogin}) {
    const [isOpen, setIsOpen] = useState(false);
    const {token, setToken}= useContext(WeatherContext);

    const navigate = useNavigate();
    const logout = () => {
         localStorage.removeItem("token");
         setToken("");
         navigate("/");
        
    }
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };


  return (
  //  <header>
    
     <div className="container_nav"> 
     <nav>
     <div className="logo">
        <h2>WeatherWise</h2>
     </div>
     <ul className={isOpen ? "nav-link active" : "nav-link"}>
        <li className=''><a href="/" className="active">Home</a></li>
        <li><a href="/ContactUs">Contact Us</a></li>
        <li><a href="/AboutUs">About Us</a></li>
       {/* <li><a href="/Login">Login</a></li> */}

       <div className='btn'>
         {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:<div className='navbar-profile'>
            <img src={user_icon} alt=""/>
            <ul className='nav-profile_dropdown'>
               <li onClick={logout}><img src={logout_icon} alt=""/><p>Logout</p></li>
            </ul>
             </div>}
      </div>
        <li><Settings /></li>
     </ul>
   
     {/* <div className="icon_nav" onClick={toggleMenu}>
     <FaBars />
     </div> */}
     </nav>
   </div>
  // </header>
  
 
  )
}

export default Navbar
