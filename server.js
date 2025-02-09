const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Clés API
const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

// Middleware pour parser JSON
app.use(express.json());

// Route pour récupérer les données météorologiques
app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    try {
        // Appel à l'API OpenWeatherMap
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`);
        const weatherData = weatherResponse.data;

        // Appel à l'API Unsplash pour récupérer une image de paysage
        const unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`);
        const imageData = unsplashResponse.data.results[0];

        // Renvoyer les données combinées au client
        res.json({
            weather: weatherData,
            image: imageData
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});