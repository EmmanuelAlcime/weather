import { useState, useEffect } from 'react'
import Search from '../components/Search'
import Request from '../utils/Request'
import Keys from '../utils/Keys'
import Weather from '../components/Weather'
import NotFound from '../components/NotFound'
import Loading from '../components/Loading'

const Home = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (searchValue) => {
    setLoading(true)
    const request = new Request(Keys())
    const location = await request.getGeolocation(searchValue)
    setWeather(location)
    setLoading(false)
  }

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setLoading(true)
      const request = new Request(Keys())
      const defaultLocation = await request.getGeolocation('Bahamas') // Example default city
      console.log(defaultLocation)
      setWeather(defaultLocation)
      setLoading(false)
    }

    fetchDefaultWeather()
  }, [])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
      <div className="w-50 text-center mb-5">
        <h2 className="fw-bolder">Weather App</h2>
        <p>Search for a city to get the weather</p>
      </div>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Loading />
      ) : weather && weather.cod === 200 ? ( // Ensure weather is not null before accessing properties
        <Weather weather={weather} />
      ) : weather ? ( // If weather exists but cod !== 200
        <NotFound message="City not found" />
      ) : null}
    </div>
  )
}

export default Home
