import { useState } from 'react'
import { modules } from '../data/module_data'
import { karteikarten } from '../data/karteikarten_data'
import { useProgress } from '../hooks/useProgress'

export default function KarteikartenPage() {
  const [selectedModule, setSelectedModule] = useState('alle')
  const [flipped, setFlipped] = useState(false)
  const [index, setIndex] = useState(0)
  const [filter, setFilter] = useState('alle') // alle | wiederholen | gewusst
  const { markFlashcard, getFlashcardStatus } = useProgress()

  const filtered = karteikarten.filter(k => {
    const moduleMatch = selectedModule === 'alle' || k.modul === selectedModule
    const statusMatch = filter === 'alle' || getFlashcardStatus(k.id) === filter ||
      (filter === 'wiederholen' && !getFlashcardStatus(k.id))
    return moduleMatch && statusMatch
  })

  const safeIndex = Math.min(index, Math.max(0, filtered.length - 1))
  const card = filtered[safeIndex]

  const handleNext = () => {
    setFlipped(false)
    setTimeout(() => setIndex(i => Math.min(filtered.length - 1, i + 1)), 150)
  }
  const handlePrev = () => {
    setFlipped(false)
    setTimeout(() => setIndex(i => Math.max(0, i - 1)), 150)
  }
  const handleMark = (known) => {
    if (card) markFlashcard(card.id, known)
    handleNext()
  }

  const knownCount = filtered.filter(k => getFlashcardStatus(k.id) === 'known').length
  const repeatCount = filtered.filter(k => getFlashcardStatus(k.id) !== 'known').length

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Karteikarten</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={selectedModule}
          onChange={e => { setSelectedModule(e.target.value); setIndex(0); setFlipped(false) }}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white"
        >
          <option value="alle">Alle Module</option>
          {modules.map(m => (
            <option key={m.id} value={m.id}>{m.icon} {m.titel}</option>
          ))}
        </select>
        <div className="flex rounded-xl overflow-hidden border border-gray-200">
          {[
            { val: 'alle', label: 'Alle' },
            { val: 'wiederholen', label: `Wiederholen (${repeatCount})` },
            { val: 'known', label: `Gewusst (${knownCount})` },
          ].map(f => (
            <button
              key={f.val}
              onClick={() => { setFilter(f.val); setIndex(0); setFlipped(false) }}
              className={`px-3 py-2 text-sm transition-colors ${
                filter === f.val ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <div className="text-4xl mb-3">🎉</div>
          <p>Keine Karteikarten für diese Auswahl.</p>
        </div>
      ) : (
        <>
          {/* Progress */}
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            <span>Karte {safeIndex + 1} von {filtered.length}</span>
            <span>
              ✓ {knownCount} gewusst · 🔄 {repeatCount} wiederholen
            </span>
          </div>

          {/* Card */}
          <div
            className="cursor-pointer mb-4"
            onClick={() => setFlipped(f => !f)}
            style={{ perspective: '1000px' }}
          >
            <div
              style={{
                transition: 'transform 0.4s',
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                position: 'relative',
                height: '220px',
              }}
            >
              {/* Front */}
              <div
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                className="absolute inset-0 bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white"
              >
                <div className="text-xs uppercase tracking-widest text-blue-200 mb-4">Frage / Begriff</div>
                <p className="text-xl font-bold text-center">{card?.vorderseite}</p>
                <div className="text-xs text-blue-200 mt-6">Klicken zum Umdrehen</div>
              </div>
              {/* Back */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
                className="absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-blue-200"
              >
                <div className="text-xs uppercase tracking-widest text-blue-400 mb-4">Antwort</div>
                <pre className="text-sm text-gray-800 font-sans text-center whitespace-pre-wrap leading-relaxed">
                  {card?.rueckseite}
                </pre>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 justify-center mb-4">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
              className="px-4 py-2 border rounded-xl text-sm disabled:opacity-40 hover:bg-gray-50"
            >
              ← Zurück
            </button>
            <button
              onClick={handleNext}
              disabled={safeIndex >= filtered.length - 1}
              className="px-4 py-2 border rounded-xl text-sm disabled:opacity-40 hover:bg-gray-50"
            >
              Weiter →
            </button>
          </div>

          {/* Mark buttons */}
          {flipped && (
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleMark(false)}
                className="flex-1 max-w-[160px] py-3 bg-red-100 text-red-700 rounded-xl font-medium text-sm hover:bg-red-200 transition-colors"
              >
                🔄 Wiederholen
              </button>
              <button
                onClick={() => handleMark(true)}
                className="flex-1 max-w-[160px] py-3 bg-green-100 text-green-700 rounded-xl font-medium text-sm hover:bg-green-200 transition-colors"
              >
                ✓ Gewusst!
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
