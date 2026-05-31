import { Link } from 'react-router-dom'
import { modules } from '../data/module_data'
import { useProgress } from '../hooks/useProgress'

const colorMap = {
  blue: 'bg-blue-100 border-blue-300 hover:border-blue-500',
  green: 'bg-green-100 border-green-300 hover:border-green-500',
  cyan: 'bg-cyan-100 border-cyan-300 hover:border-cyan-500',
  orange: 'bg-orange-100 border-orange-300 hover:border-orange-500',
  purple: 'bg-purple-100 border-purple-300 hover:border-purple-500',
  red: 'bg-red-100 border-red-300 hover:border-red-500',
  indigo: 'bg-indigo-100 border-indigo-300 hover:border-indigo-500',
  yellow: 'bg-yellow-100 border-yellow-300 hover:border-yellow-500',
  teal: 'bg-teal-100 border-teal-300 hover:border-teal-500',
  pink: 'bg-pink-100 border-pink-300 hover:border-pink-500',
}

const barColorMap = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  cyan: 'bg-cyan-500',
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  indigo: 'bg-indigo-500',
  yellow: 'bg-yellow-500',
  teal: 'bg-teal-500',
  pink: 'bg-pink-500',
}

export default function Dashboard() {
  const { getModuleProgress, getOverallStats, getQuizScore } = useProgress()
  const stats = getOverallStats(modules)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🇨🇭 Automatiker EFZ Lernplattform
        </h1>
        <p className="text-gray-600 text-lg">
          Alle Themen für die Berufslehre als Automatiker in der Schweiz – kompakt und interaktiv.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Lektionen gelernt', value: `${stats.completedLessons} / ${stats.totalLessons}`, icon: '📚' },
          { label: 'Fortschritt', value: `${stats.lessonPercent}%`, icon: '📈' },
          { label: 'Quiz abgeschlossen', value: `${stats.quizCount} / ${modules.length}`, icon: '✅' },
          { label: 'Ø Quiz-Score', value: stats.quizCount > 0 ? `${stats.avgQuizScore}%` : '–', icon: '🏆' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold text-blue-700">{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Module Grid */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Lernmodule</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {modules.map(mod => {
          const { completed, total, percent } = getModuleProgress(mod.id, mod.lektionen)
          const quizScore = getQuizScore(mod.id)
          return (
            <div
              key={mod.id}
              className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${colorMap[mod.farbe]}`}
            >
              <div className="text-3xl mb-2">{mod.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{mod.titel}</h3>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">{mod.beschreibung}</p>

              {/* Progress bar */}
              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{completed} / {total} Lektionen</span>
                  <span>{percent}%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${barColorMap[mod.farbe]}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>

              {quizScore && (
                <div className="text-xs text-gray-600 mb-3">
                  Quiz: {quizScore.percent}% ({quizScore.score}/{quizScore.total} richtig)
                </div>
              )}

              <div className="flex gap-2 mt-3">
                <Link
                  to={`/module/${mod.id}`}
                  className="flex-1 text-center text-xs font-medium bg-white rounded-lg py-1.5 border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Lernen
                </Link>
                <Link
                  to={`/quiz/${mod.id}`}
                  className="flex-1 text-center text-xs font-medium bg-blue-600 text-white rounded-lg py-1.5 hover:bg-blue-700 transition-colors"
                >
                  Quiz
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
