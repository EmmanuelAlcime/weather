import WeatherCard from './WeatherCard'

const Weather = ({ weather, bg = 'bg-light' }) => {
  const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div className="weather-container d-flex flex-column justify-content-center align-items-center w-100 mt-5">
      <WeatherCard bg={bg}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="card-title mb-2 fw-bold">{weather.name}</h2>
            <p className="card-subtitle text-muted">{weather.sys.country}</p>
          </div>
          <img
            src={weatherIconUrl}
            alt={weather.weather[0].description}
            className="weather-icon"
          />
        </div>
        <h1 className="display-1 mb-4">{Math.round(weather.main.temp)}°C</h1>
        <p className="card-text text-capitalize text-secondary fs-5">
          {weather.weather[0].description}
        </p>
        <div className="d-flex justify-content-around mt-4">
          <div>
            <p className="fw-bold mb-1">Humidity</p>
            <p>{weather.main.humidity}%</p>
          </div>
          <div>
            <p className="fw-bold mb-1">Wind</p>
            <p>{Math.round(weather.wind.speed)} m/s</p>
          </div>
          <div>
            <p className="fw-bold mb-1">Pressure</p>
            <p>{weather.main.pressure} hPa</p>
          </div>
        </div>
      </WeatherCard>
    </div>
  )
}

export default Weather
