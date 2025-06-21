import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'

function App() {
  
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
