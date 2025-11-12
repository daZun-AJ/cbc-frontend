import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './landingPage'
import AdminPage from './adminPage'
import LoginPage from './loginPage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <BrowserRouter>
      <Toaster position='top-center' />
      <Routes path="/*">
        <Route path='/*' element={<LandingPage />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
