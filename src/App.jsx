import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import AdminPage from './pages/adminPage'
import LoginPage from './pages/loginPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/registerPage'

function App() {

  return (
    <BrowserRouter>
      <Toaster position='top-center' />
      <Routes path="/*">
        <Route path='/*' element={<LandingPage />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
