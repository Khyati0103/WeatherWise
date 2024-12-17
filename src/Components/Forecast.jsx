import React from 'react';
import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';
import '../styles/components/Forecast.scss';
import HorizontallyScrollable from './HorizontallyScrollable';

export const Forecast = ({ title, type, data }) => {
  // Get the current date and time
  const now = new Date();
  
  // Set minutes and seconds to 0 to round down to the start of the hour (e.g., 11:00 if now is 11:43)
  now.setMinutes(0, 0, 0);

  // Function to filter hourly forecast to start from the current hour
  const filterHourlyData = (data) => {
    return data.filter((singleData) => {
      const forecastDate = new Date(singleData.date);
      return forecastDate >= now; // Only return forecasts that are at or after the current hour
    });
  };

  // Apply the filter if it's an hourly forecast, otherwise use the full data
  const forecastData = type === 'hourly' ? filterHourlyData(data) : data;

  return (
    <div className='Forecast'>
      <div className='forecast-container'>
        <h2>{title}</h2>
        <HorizontallyScrollable className='widget-container'>
          {forecastData.length > 0 ? (
            forecastData.map((singleData) => (
              <div key={singleData.date || singleData.day}>
                {type === 'hourly' ? (
                  <HourlyForecastWidget data={singleData} />
                ) : (
                  <><br/><DailyForecastWidget data={singleData} /></>
                )}
              </div>
            ))
            
          ) : (
            <div>No upcoming forecasts available.</div>
          )}
        </HorizontallyScrollable>
      </div>
    </div>
  );
};

export default Forecast;
