
# Simple Weather App

This is a simple weather application built with React. The app allows users to search for a city's weather and displays details such as temperature, weather conditions, humidity, wind speed, and pressure. The app also includes a responsive UI with loading, error, and success states.

---

## Features
- **Search for a City**: Users can input a city name to fetch its current weather data.
- **Weather Details**: Displays temperature, weather description, humidity, wind speed, and pressure.
- **Default Weather**: Shows the weather of a default city (e.g., Bahamas) on initial load.
- **Error Handling**: Displays a custom "Not Found" screen for invalid city searches.
- **Loading State**: Shows a loading indicator while fetching data.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Usage
1. On the homepage, use the search bar to type the name of a city.
2. Click the search button to fetch weather details.
3. View the weather information or error messages (e.g., "City not found").
4. On initial load, the app displays the weather for the default city.

---

## Project Structure

```
src/
├── components/
│   ├── Search.jsx       // Search bar component
│   ├── Weather.jsx      // Displays weather details
│   ├── NotFound.jsx     // Error component for invalid cities
│   └── Loading.jsx      // Loading spinner component
├── utils/
│   ├── Keys.js          // Handles API key storage
│   └── Request.js       // API request utility
├── App.js               // Main app entry point
├── index.js             // Renders the React app
└── styles.css           // Optional global styles
```

---

## API Usage
This app uses the **OpenWeatherMap API**. To fetch weather data:

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api).
2. Obtain your API key and store it in the `Keys.js` file:
   ```javascript
   const Keys = () => "YOUR_API_KEY";
   export default Keys;
   ```

---

## Technologies Used
- **Frontend**: React, Bootstrap
- **API**: OpenWeatherMap
- **Styling**: CSS with Bootstrap utilities

---

## Screenshots

### Weather Display
![Weather Display](https://via.placeholder.com/800x400.png?text=Weather+Display)

### Error State
![Error State](https://via.placeholder.com/800x400.png?text=Error+State)

---

## Future Improvements
- Add support for additional weather metrics (e.g., forecast, UV index).
- Implement a location-based weather feature using geolocation.
- Enhance UI with animations and themes.
- Add unit conversion (Celsius/Fahrenheit).

---

## Contributing
Contributions are welcome! Please:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes and open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- [OpenWeatherMap](https://openweathermap.org/) for the weather data API.
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework.

Enjoy coding! 🚀
