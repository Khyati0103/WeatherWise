import { createContext, useState, useEffect } from 'react';
import { DEFAULT_PLACE, UNITS, } from '../utils';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({ children }){

    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const[units, setUnits] = useState({});
    const url ='http://localhost:4000'
    const [token,setToken]= useState("")
    useEffect(() =>{
        if(localStorage.getItem("token")) {
              setToken(localStorage.getItem("token"));
        }
    },[])
    

    useEffect(()=>{
        async function _getWeatherData(){
            setLoading(true);
            
            const cw = await getWeatherData(
                'current',
                place.place_id,
                'auto'
            );
            setCurrentWeather(cw.current);
            setUnits(UNITS[cw.units]);

            const hf = await getWeatherData(
                'hourly',
                place.place_id,
                'auto'
            );
            setHourlyForecast(hf.hourly.data);

            const df = await getWeatherData(
                'daily',
                place.place_id,
                'auto'
            );
            setDailyForecast(df.daily.data);

            setLoading(false);
        }
        _getWeatherData();
    }, [place]);

    return(
        <WeatherContext.Provider 
            value={{
                place, 
                setPlace,
                loading, 
                currentWeather, 
                hourlyForecast, 
                dailyForecast,
                units,
                url,
                token,
                setToken
                }}>
        {children}
        </WeatherContext.Provider>
    );
}

export { WeatherProvider };
export default WeatherContext;