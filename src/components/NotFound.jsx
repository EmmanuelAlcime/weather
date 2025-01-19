import notFoundImage from '../assets/weather-app.png'

const NotFound = ({ message }) => {
  return (
    <div className="not-found-container d-flex flex-column justify-content-center align-items-center w-100 mt-5">
      <img
        src={notFoundImage}
        alt="Not Found"
        className="not-found-image mb-4"
      />
      <div className="not-found-card card shadow-sm text-center p-4 w-50">
        <div className="card-body">
          <h1 className="display-4 fw-bold text-danger mb-3">Oops!</h1>
          <p className="fs-5 text-secondary">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
