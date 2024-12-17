import { useContext, useState } from 'react';
import { searchPlaces } from '../api';
import WeatherContext from '../context/weather.context';
import '../styles/components/Search.scss';

function Search() {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [error, setError] = useState(null); // State for error handling

  async function onSearch(e) {
    const query = e.target.value;
    setText(query);

    // If the query is empty, clear results and errors
    if (!query.trim()) {
      setSearchResults([]);
      setOpenSearchResults(false);
      setError(null);
      return;
    }

    try {
      setError(null); // Reset errors before fetching
      const data = await searchPlaces(query);

      if (data && data.length > 0) {
        setSearchResults(data);
        setOpenSearchResults(true);
      } else {
        setSearchResults([]);
        setOpenSearchResults(false);
        setError('No matching locations found. Please try a different name.');
      }
    } catch (err) {
      setError('An error occurred while searching for places. Please try again later.');
      setSearchResults([]);
      setOpenSearchResults(false);
    }
  }

  const changePlace = (place) => {
    setPlace(place);
    setText('');
    setOpenSearchResults(false);
    setError(null); // Clear error after selecting a place
  };

  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city ..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {error && <div className="error-message">{error}</div>} {/* Error message */}
        {openSearchResults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className="result"
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {place.name}, {place.adm_area1}, {place.country}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
