// Weather.jsx
import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/search.png";
import searchByCity from "../utils/searchByCity";
import humidity from "../assets/humidity.png";
import windSpeed from "../assets/wind.png";
import mapIcons from "../utils/mapIcons";
import './weather.css'

const Weather = () => {
  const [city, setCity] = useState("London"); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Function to capitalize city name properly
  const capitalizeCity = (cityName) => {
    return cityName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to handle search
  const handleSearch = async () => {
    setError(""); // Clear previous errors
    const formattedCity = capitalizeCity(city);
    const data = await searchByCity(formattedCity);
    
    if (data && data.cod === 200) {
      setWeatherData(data);
      setError("");
    } else if (data && data.cod === "404") {
      setError("Please enter a correct city name.");
      setWeatherData(null);
    } else {
      setError("Error fetching weather data. Please try again.");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    handleSearch(); // Load default city weather
  }, []);

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input 
          type='text' 
          placeholder="Search" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img src={SearchIcon} alt="search" onClick={handleSearch}/>
      </div>
      
      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}
      
      {/* Weather Icon - dynamically updated based on API data */}
      <img 
        src={weatherData ? mapIcons(weatherData.weather[0].icon) : mapIcons("01d")} 
        alt="weather icon" 
        className="weather-icon"
      />
      
      {/* Temperature in Celsius */}
      <p className="temperature">{weatherData ? Math.round(weatherData.main.temp) : 0}°C</p>
      
      {/* Location */}
      <p className="location">{weatherData ? weatherData.name : city}</p>
      
      {/* Weather Description */}
      <p className="weather-description">
        {weatherData ? weatherData.weather[0].description : "Loading..."}
      </p>
      
      {/* Coordinates */}
      <p className="coordinates">
        {weatherData ? `Lat: ${weatherData.coord.lat}, Lon: ${weatherData.coord.lon}` : "Loading..."}
      </p>
      
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="humidity" />
          <div>
            <p>{weatherData ? weatherData.main.humidity : 0}%</p>
            <span>HUMIDITY</span>
          </div>
        </div>
         <div className="col">
          <img src={windSpeed} alt="wind-speed" />
          <div>
            <p>{weatherData ? Math.round(weatherData.wind.speed * 3.6) : 0} km/h</p>
            <span>WIND SPEED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
