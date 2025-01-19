const WeatherCard = ({ children, bg = 'bg-light' }) => {
  return (
    <div
      className={`weather-card card ${bg} rounded-2 shadow-sm text-center w-75`}
    >
      <div className="card-body">{children}</div>
    </div>
  )
}

export default WeatherCard
