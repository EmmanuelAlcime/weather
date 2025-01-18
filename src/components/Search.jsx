import { useState } from 'react'

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    onSearch(searchValue)
  }

  const styles = {
    searchBar: {
      width: '100%',
      height: '100%',
      maxWidth: '400px',
      maxHeight: '50px',
    },
    searchIcon: {
      maxHeight: '50px',
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} // Corrected onChange handler
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          style={styles.searchIcon}
          onClick={handleSearch}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  )
}

export default Search
