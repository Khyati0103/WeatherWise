import React, { useContext } from 'react'
//import {getCurrentWeather} from '../api';
// import CurrentWeather from './current-weather.json'
import WeatherContext from '../context/weather.context';
import '../styles/components/OtherInfo.scss';
//import CurrentWeather from './CurrentWeather';

const OtherInfo = ({title, data}) => {
    //const CurrentWeather = () => {
    const {
    uv_index,
    feels_like,
    pressure,
    wind,
    visibility,
    cloud_cover
  }=data;
 

  const { units } = useContext(WeatherContext);

  const otherinfoWidgets = [
    {
        id: 1,
        icon: 'sunglasses',
        name: 'UV index',
        value: Math.round(uv_index),
        unit: units.uv_index,

    },
    {
        id: 2,
        icon: 'moisture',
        name: 'Feels like',
        value: Math.round(feels_like),  // Handle undefined values
        unit: units.temperature, // Changed unit to Celsius since you're using metric
    },
    {
        id: 3,
        icon: 'speedometer2',
        name: 'Air Pressure',
        value: Math.round(pressure),  // Handle undefined values
        unit: units.pressure
    },
    {
        id: 4,
        icon: 'wind',
        name: 'Wind Direction',
        value: wind.dir,  // Handle undefined values
        unit: units.wind_dir,
    },
    {
        id: 5,
        icon: 'eye',
        name: 'Visibility',
        value: Math.round(visibility), // Convert from meters to kilometers
        unit: units.visibility,
    },
    {
        id: 6,
        icon: 'clouds-fill',
        name: 'Cloud Cover',
        value: Math.round(cloud_cover),  // Handle undefined values
        unit: units.cloud_cover,
    },
];

    return (
        <div className="CurrentWeather">
             <h2>{title}</h2>
            <div className="other-infos">
           
            {otherinfoWidgets.map(({ id, icon, name, value, unit }) => (
                    <div className='widget' key={id}>
                        <div className="widget-container">
                            <div className="info">
                                <div className="icon">
                                    <i className={`bi bi-${icon}`}></i>
                                </div>
                                <div className="value">
                                    {value} {unit}
                                </div>
                                <div className="name">{name}</div>
                            </div>
                        </div>
                    </div>
                ))}            
            </div>
        </div>
  )
}
//}
export default OtherInfo;