import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import QuizPage from './pages/QuizPage'
import FortschrittPage from './pages/FortschrittPage'
import KarteikartenPage from './pages/KarteikartenPage'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/:id" element={<ModulePage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/fortschritt" element={<FortschrittPage />} />
          <Route path="/karteikarten" element={<KarteikartenPage />} />
        </Routes>
      </main>
    </div>
  )
}
