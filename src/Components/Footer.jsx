// import React, { useState } from 'react'
import React from 'react';
// import './Footer.css'
import '../styles/components/Footer.scss';

function Footer() {

    return (
        <footer>
        <div className='footerContainer'>
              
               <div className="logo1">
                    <h1>WeatherWise</h1>
                </div>
           <br></br>
            <div className='text'>
                <p>A weather app that provides accurate and up-to-date weather information for users.</p>
            </div>
            <div className="FooterNav"> 
                <ul>
                    <li className=''><a href="/" className="active">Home</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    {/* <li><a href="/login">Login</a></li> */}
                </ul>
            </div>

           
        </div>
        <div className='footerBottom'>
                <p>@2024 WeatherWise, All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
