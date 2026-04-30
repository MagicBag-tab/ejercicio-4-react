import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Saga from './pages/Saga.jsx'
import Song from './pages/Song.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sagas/:id" element={<Saga />} />
      <Route path="/sagas/:id/songs/:songId" element={<Song />} />
    </Routes>
  )
}

export default App