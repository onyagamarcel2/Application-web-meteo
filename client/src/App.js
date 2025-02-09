import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [imageData, setImageData] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
            setWeatherData(response.data.weather);
            setImageData(response.data.image);
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la récupération des données');
        }
    };

    return (
        <div className="App">
            <h1>Météo en Direct</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Entrez le nom de la ville"
            />
            <button onClick={fetchWeather}>Rechercher</button>
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>Température : {weatherData.main.temp} °C</p>
                    <p>Humidité : {weatherData.main.humidity}%</p>
                    <p>Conditions : {weatherData.weather[0].description}</p>
                    {imageData && (
                        <img src={imageData.urls.small} alt={`${weatherData.name} landscape`} />
                    )}
                </div>
            )}
        </div>
    );
}

export default App;