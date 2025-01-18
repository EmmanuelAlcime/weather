import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/citylist" element={<CityList />} />
    </Routes>
  )
}

export default App
