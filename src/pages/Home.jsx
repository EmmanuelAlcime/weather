import Search from '../components/Search'

const Home = () => {
  const handleSearch = (searchValue) => {
    console.log(searchValue)
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100 w-100">
      <div className="w-50 text-center mb-5">
        <h2 className="fw-bolder">Weather App</h2>
        <p>Search for a city to get the weather</p>
      </div>
      <Search onSearch={handleSearch} />
    </div>
  )
}

export default Home
