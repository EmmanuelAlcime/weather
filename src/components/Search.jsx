import { useState } from 'react'

const Search = ({ onSearch, onLocation, setSearchValue, searchTerm }) => {
  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      onSearch(searchTerm)
    }
  }

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        await onLocation(latitude, longitude)
      },
      (error) => {
        alert('Error fetching location. Please enable location access.')
        console.error('Geolocation error:', error)
      },
    )
  }

  const styles = {
    searchBar: {
      width: '100%',
      maxWidth: '400px',
    },
    searchIcon: {
      border: 'none',
    },
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={styles.searchBar}
    >
      <div className="d-flex justify-content-center align-items-center">
        <i className="bi bi-pin-map mb-3 me-2"></i>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          id="search-input"
          className="form-control border-0"
          placeholder="Enter a city name"
          aria-label="Enter a city name"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={(e) => setSearchValue(e.target.value)} // Updating state via props
          onKeyDown={handleKeyPress}
        />
        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            style={styles.searchIcon}
            onClick={handleSearch}
          >
            <i className="bi bi-search"></i>
          </button>
          <button
            id="button-addon3"
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleLocation}
          >
            <i className="bi bi-crosshair2"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
