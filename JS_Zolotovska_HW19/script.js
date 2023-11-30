const weatherWidget = async () => {
    try {
        let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Druzhkivka&units=metric&appid=4eea125e2ac10781530e911c18aef32d");
        let data = await response.json();

        document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById('feels-like').innerText = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
        document.getElementById('humidity').innerText = `${data.main.humidity}%`;
        document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
        document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
        document.getElementById('wind-direction').innerText = `${data.wind.deg}°`;
        document.getElementById('description').innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        updateLastUpdatedTime();
    } catch (error) {
        console.error('Помилка отримання даних погоди:', error);
    }
}

const updateDateTime = () => {
    const now = new Date();
    document.getElementById('date').innerText = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', weekday: 'short' });
    document.getElementById('time').innerText = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

const updateLastUpdatedTime = () => {
    const now = new Date();
    document.getElementById('last-updated').innerText = `${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
}

document.getElementById('refresh-button').addEventListener('click', () => {
    weatherWidget();
    updateDateTime();
});

weatherWidget();
updateDateTime();
setInterval(updateDateTime, 1000);
