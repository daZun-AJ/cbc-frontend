import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'

function App() {
  
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
