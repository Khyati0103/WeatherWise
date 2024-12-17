import axios from 'axios';

const APP_KEY = process.env.REACT_APP_API_KEY;

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: 'en',
      units: measurementSystem,
    },
    headers: {
      'x-rapidapi-key': APP_KEY,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status code out of the range of 2xx
      alert("Request limit Exceed");
      throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || "Unexpected error"}`);
    } else if (error.request) {
      // Request was made but no response was received
      alert("No response received from the server. Please check your connection.")
      throw new Error("No response received from the server. Please check your connection.");
    } else {
      // Something else happened while setting up the request
      alert("Request setup failed: " + error.message);
      throw new Error(`Request setup failed: ${error.message}`);
    }
  }
}

export async function searchPlaces(text) {
  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
    params: {
      text,
      language: 'en'
    },
    headers: {
      'x-rapidapi-key': APP_KEY,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw new Error(`Place search failed: ${error.response.status} - ${error.response.data.message || "Invalid input"}`);
    } else if (error.request) {
      throw new Error("Place search request failed. No response received.");
    } else {
      throw new Error(`Error occurred during place search: ${error.message}`);
    }
  }
}
