import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { modules } from '../data/module_data'
import { quizzes } from '../data/quiz_data'
import { useProgress } from '../hooks/useProgress'

export default function QuizPage() {
  const { id } = useParams()
  const mod = modules.find(m => m.id === id)
  const quiz = quizzes[id]
  const { saveQuizScore, getQuizScore } = useProgress()

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)

  if (!mod || !quiz) return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <p className="text-gray-500">Quiz nicht gefunden.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 block">← Dashboard</Link>
    </div>
  )

  const frage = quiz.fragen[current]
  const progress = Math.round(((current + (selected !== null ? 1 : 0)) / quiz.fragen.length) * 100)

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
  }

  const handleNext = () => {
    const newAnswers = [...answers, { correct: selected === frage.richtig }]
    if (current + 1 >= quiz.fragen.length) {
      const score = newAnswers.filter(a => a.correct).length
      saveQuizScore(id, score, quiz.fragen.length)
      setAnswers(newAnswers)
      setFinished(true)
    } else {
      setAnswers(newAnswers)
      setCurrent(c => c + 1)
      setSelected(null)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    const score = answers.filter(a => a.correct).length
    const percent = Math.round((score / quiz.fragen.length) * 100)
    const bestScore = getQuizScore(id)
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">
            {percent >= 80 ? '🏆' : percent >= 60 ? '👍' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz abgeschlossen!</h2>
          <p className="text-gray-500 mb-6">{mod.icon} {mod.titel}</p>
          <div className="text-5xl font-bold text-blue-600 mb-2">{percent}%</div>
          <p className="text-gray-600 mb-8">
            {score} von {quiz.fragen.length} Fragen richtig
          </p>
          {percent >= 80 && <p className="text-green-600 font-medium mb-4">Ausgezeichnet! Du hast dieses Thema gut verstanden.</p>}
          {percent >= 60 && percent < 80 && <p className="text-yellow-600 font-medium mb-4">Gut gemacht! Wiederhole noch einige Lektionen.</p>}
          {percent < 60 && <p className="text-red-600 font-medium mb-4">Lerne die Lektionen nochmals durch und versuche es erneut.</p>}
          <div className="flex gap-3 justify-center">
            <button onClick={handleRestart} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">
              Nochmals
            </button>
            <Link to={`/module/${id}`} className="px-6 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50">
              Lektionen wiederholen
            </Link>
            <Link to="/" className="px-6 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600">Dashboard</Link>
        <span>›</span>
        <Link to={`/module/${id}`} className="hover:text-blue-600">{mod.titel}</Link>
        <span>›</span>
        <span>Quiz</span>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-6 py-4 text-white">
          <div className="flex justify-between text-sm mb-2">
            <span>{mod.icon} {quiz.titel}</span>
            <span>Frage {current + 1} / {quiz.fragen.length}</span>
          </div>
          <div className="h-2 bg-blue-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
            {frage.frage}
          </h2>

          <div className="space-y-3 mb-6">
            {frage.optionen.map((opt, i) => {
              let style = 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
              if (selected !== null) {
                if (i === frage.richtig) style = 'border-green-500 bg-green-50'
                else if (i === selected && selected !== frage.richtig) style = 'border-red-400 bg-red-50'
                else style = 'border-gray-200 opacity-60'
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${style}`}
                >
                  <span className="font-medium text-gray-500 mr-2">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <div className={`rounded-xl p-4 mb-4 text-sm ${
              selected === frage.richtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <p className={`font-semibold mb-1 ${selected === frage.richtig ? 'text-green-700' : 'text-red-700'}`}>
                {selected === frage.richtig ? '✓ Richtig!' : '✗ Falsch!'}
              </p>
              <p className="text-gray-700">{frage.erklaerung}</p>
            </div>
          )}

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">
              {answers.filter(a => a.correct).length} richtig bisher
            </span>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium disabled:opacity-40 hover:bg-blue-700 transition-colors"
            >
              {current + 1 >= quiz.fragen.length ? 'Auswertung anzeigen' : 'Nächste Frage →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
