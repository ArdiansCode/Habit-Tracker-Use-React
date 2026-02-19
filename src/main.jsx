import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Welcome from './App.jsx'
import App from './features/mainPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="Habit-Tracker" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
