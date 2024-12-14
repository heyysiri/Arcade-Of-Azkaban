import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Game from './Game'
import SpellsPage from './Spells'
import CharactersPage from './Characters'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/characters" element={<CharactersPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)