import { useState, useEffect } from 'react'
import Search from '../components/Search'
import Request from '../utils/Request'
import Keys from '../utils/Keys'
import Weather from '../components/Weather'
import NotFound from '../components/NotFound'
import Loading from '../components/Loading'
import Dropdown from '../components/Dropdown'

const Home = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [metrics, setMetrics] = useState('imperial') // Default to imperial
  const [searchTerm, setSearchTerm] = useState('Bahamas') // Store last searched term

  const handleSearch = async (searchValue) => {
    setLoading(true)
    try {
      const request = new Request(Keys())
      const location = await request.getWeatherByCity(searchValue, metrics)
      setWeather(location)
      setSearchTerm(searchValue) // Save the searched value
    } catch (error) {
      console.error('Error fetching weather data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLocation = async (latitude, longitude) => {
    setLoading(true)
    try {
      const request = new Request(Keys())
      const location = await request.getWeatherByCoordinates(
        latitude,
        longitude,
        metrics,
      )

      if (location && location.name) {
        setSearchTerm(location.name) // Update input with location name
      }

      setWeather(location)
    } catch (error) {
      console.error('Error fetching weather by coordinates:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm) // Re-fetch weather data when metric changes
    }
  }, [metrics]) // Run effect when `metrics` changes

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
      <div className="w-50 text-center mb-5">
        <h2 className="fw-bolder">Weather App</h2>
        <p>Search for a city to get the weather</p>
      </div>
      <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-center align-items-center gap-2">
        <Search
          onSearch={handleSearch}
          onLocation={handleLocation}
          searchTerm={searchTerm}
          setSearchValue={setSearchTerm}
        />
        <Dropdown
          options={['Metric', 'Imperial']}
          onSelect={(value) => setMetrics(value.toLowerCase())}
          selectedOption={metrics === 'metric' ? 'Metric' : 'Imperial'}
        />
      </div>
      {loading ? (
        <Loading />
      ) : weather && weather.cod === 200 ? (
        <Weather weather={weather} metrics={metrics} />
      ) : weather ? (
        <NotFound message="City not found" />
      ) : null}
    </div>
  )
}

export default Home
