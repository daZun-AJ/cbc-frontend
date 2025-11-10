import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './landingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path='/*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
