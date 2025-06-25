import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgetPasswordPage from './pages/forgetPasswordPage'
import AdminPage from './pages/adminPage'

function App() {
  
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
      <Toaster position='top-center' />
      <Routes path="/*">
        <Route path="/*" element={<Home />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgetPasswordPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )
  
}

export default App
