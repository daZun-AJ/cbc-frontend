import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {
  
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
