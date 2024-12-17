import React from 'react';
import '../styles/components/AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1><br></br>
      <p>
        Welcome to <strong>WeatherWise</strong>, your go-to platform for real-time and accurate weather predictions. Our mission is to provide you with precise and up-to-the-minute weather information to help you plan your day with confidence.
      </p>
      <p>
        At WeatherWise, we use cutting-edge technology, including advanced Weather APIs, to gather reliable data on temperature, humidity, wind speed, and direction. This allows us to provide detailed weather forecasts that cater to your location and preferences.
      </p>
      <p>
        Our team of experts is dedicated to delivering an easy-to-use and reliable platform that keeps you informed about any weather changes. Whether you’re planning a trip, preparing for your daily commute, or just curious about the current conditions, we’ve got you covered.
      </p>
      <p>
        <strong>Why Choose Us?</strong>
      </p>
      <ul>
        <li> Real-time weather updates with high accuracy</li>
        <li> Customized forecasts based on your location</li>
        <li> User-friendly interface accessible on all devices</li>
      </ul>
      <p>
        Thank you for choosing WeatherWise as your trusted weather forecasting partner. Stay prepared and stay safe with our timely updates!
      </p>
    </div>
  );
};

export default AboutUs;