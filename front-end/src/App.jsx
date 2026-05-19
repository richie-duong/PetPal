import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import About from './webpages/About'
import Dashboard from './webpages/Dashboard'
import HealthRecords from './webpages/HealthRecords'
import Home from './webpages/Home'
import Login from './webpages/Login'
import PetProfile from './webpages/PetProfile'
import Schedule from './webpages/Schedule'
import Signup from './webpages/Signup'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className="nav-link" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/about">About Us</NavLink>
        <NavLink className="nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        <NavLink className="nav-link" to="/pet-profile">Pet Profile</NavLink>
        <NavLink className="nav-link" to="/schedule">Schedule</NavLink>
        <NavLink className="nav-link" to="/health-records">Health Records</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/health-records" element={<HealthRecords />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
