import { useState } from 'react'

const Dropdown = ({ options, onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle mb-3"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: '#abd9e8', border: 'solid 1px #abd9e8' }}
      >
        {selectedOption}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {options.map((option) => (
          <li key={option}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => {
                onSelect(option.toLowerCase()) // Ensure lowercase values for consistency
                setIsOpen(false)
              }}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
