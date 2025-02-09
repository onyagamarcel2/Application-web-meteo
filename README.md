# Application Web de Météo

## Description
Cette application web permet aux utilisateurs de récupérer des données météorologiques en temps réel pour n'importe quelle ville dans le monde. Elle utilise l'API OpenWeatherMap pour obtenir les informations météorologiques et l'API Unsplash pour afficher des images de paysages correspondant à la ville recherchée.

## Prérequis
- Node.js (v14.x ou supérieur)
- npm (v6.x ou supérieur)

## Installation

### 1. Cloner le Repository
```bash
git clone https://github.com/onyagamarcel2/weather-app.git
cd weather-app

## 2. Installer les Dépendances du Serveur Express
npm install
## 3. Créer le Fichier .env
 Créez un fichier .env dans le dossier racine du projet et ajoutez-y vos clés API :
 OPENWEATHERMAP_API_KEY=votre_clé_api_openweathermap
 UNSPLASH_API_KEY=votre_access_key_unsplash
## 4. Installer les Dépendances de l'Application React
 cd client
 npm install

Utilisation
Démarrer le Serveur Express
Dans le dossier racine du projet, exécutez :
 node server.js

Démarrer l'Application React
Dans le dossier client, exécutez :
 npm start
