// script.js

// Replace 'YOUR_API_KEY' with your actual WeatherAPI key
const apiKey = 'f71b3360cbf3491aa68175027242609'; 

async function fetchWeather() {
    // Get the city name from the input field
    const city = document.getElementById('cityInput').value.trim();
    
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    // Construct the API URL with the city entered by the user
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            document.getElementById('weather').innerHTML = `<p>${data.error.message}</p>`;
            return;
        }

        // Display weather data
        document.getElementById('weather').innerHTML = `
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c} °C</p>
            <p>Weather: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = '<p>Failed to load weather data.</p>';
    }
}
