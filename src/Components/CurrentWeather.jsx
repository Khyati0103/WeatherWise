import React, { useContext } from 'react'
// import { getCurrentWeather } from '../api'
import WeatherIcon from './WeatherIcon';
// import './CurrentWeather.css';
import '../styles/components/CurrentWeather.scss';
import Place from './Place';
import Search from './Search';
import WeatherContext from '../context/weather.context';
import ThemeContext from '../context/theme.context';

const CurrentWeather = ({data}) => {
    const{
    temperature, 
    humidity, 
    icon_num, 
    summary, 
    precipitation, 
    wind, 
  }=data;

const{units} =useContext(WeatherContext);
const { dark } = useContext(ThemeContext);

    return (
        // <div className="container_bg no-select">
        <div className={`container_bg no-select ${dark ? 'dark-mode-bg' : 'light-mode-bg'}`}>
            <br></br><br></br>
      {/* <div className="container no-select">    */}
      <div className={`container no-select ${dark ? 'dark-mode' : 'light-mode'}`}>
      <div className="CurrentWeather no-select">
          <div className="temperature_curr"></div>
          <Search />
          <br/>
          <div className="weather-icon">
              <WeatherIcon iconNumber={icon_num} summary={summary} />
              <div className="summary">{summary}</div>
              <Place/>
          </div>
          <div className="value">
              <div className="real">{Math.floor(temperature)} {units.temperature}</div>
              <div className="humidity">
                  <i className="bi bi-moisture"></i> Humidity {humidity} {units.humidity}
              </div>
              <div className="precipitation">
                  <i className="bi bi-droplet-half"></i> Precipitation {precipitation.total} {units.precipitation}
              </div>
              <div className="wind">
                  <i className="bi bi-wind"></i> Wind {wind.speed} {units.wind_speed}
              </div>
          </div>
      </div>
  </div>
 <br /> <br /> <br />
 </div>
  )
}

export default CurrentWeather;