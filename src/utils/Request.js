class Request {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  async getWeatherByCoordinates(latitude, longitude) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`,
    )
    const data = await response.json()
    return data
  }

  async getWeatherByCity(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`,
    )
    const data = await response.json()
    return data
  }
}

export default Request
