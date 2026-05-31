import { Link } from 'react-router-dom'
import { modules } from '../data/module_data'
import { useProgress } from '../hooks/useProgress'

const barColorMap = {
  blue: 'bg-blue-500', green: 'bg-green-500', cyan: 'bg-cyan-500',
  orange: 'bg-orange-500', purple: 'bg-purple-500', red: 'bg-red-500',
  indigo: 'bg-indigo-500', yellow: 'bg-yellow-500', teal: 'bg-teal-500',
}

const achievements = [
  { id: 'elektro', label: 'Elektro-Profi', icon: '⚡', moduleId: 'elektrotechnik', threshold: 80 },
  { id: 'sps', label: 'SPS-Experte', icon: '🖥️', moduleId: 'sps', threshold: 80 },
  { id: 'pneumatik', label: 'Pneumatik-Ass', icon: '💨', moduleId: 'pneumatik', threshold: 80 },
  { id: 'antrieb', label: 'Antriebsprofi', icon: '⚙️', moduleId: 'antriebstechnik', threshold: 80 },
  { id: 'messen', label: 'Meistermesser', icon: '📏', moduleId: 'messtechnik', threshold: 80 },
  { id: 'mechanik', label: 'Mechanik-Meister', icon: '🔧', moduleId: 'mechanik', threshold: 80 },
  { id: 'digital', label: 'Digitaltechniker', icon: '💻', moduleId: 'digitaltechnik', threshold: 80 },
  { id: 'sicherheit', label: 'Sicherheitsprofi', icon: '🦺', moduleId: 'arbeitssicherheit', threshold: 80 },
  { id: 'elektriker', label: 'Elektriker-Profi', icon: '🔌', moduleId: 'elektriker', threshold: 80 },
]

export default function FortschrittPage() {
  const { getModuleProgress, getOverallStats, getQuizScore, resetProgress } = useProgress()
  const stats = getOverallStats(modules)

  const handleReset = () => {
    if (window.confirm('Gesamten Fortschritt zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      resetProgress()
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mein Fortschritt</h1>
        <button onClick={handleReset} className="text-sm text-red-500 hover:text-red-700 hover:underline">
          Zurücksetzen
        </button>
      </div>

      {/* Overall */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">{stats.lessonPercent}%</div>
            <div className="text-blue-200 text-sm">Gesamtfortschritt</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{stats.completedLessons}/{stats.totalLessons}</div>
            <div className="text-blue-200 text-sm">Lektionen</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{stats.quizCount}/{modules.length}</div>
            <div className="text-blue-200 text-sm">Quiz gemacht</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{stats.quizCount > 0 ? stats.avgQuizScore + '%' : '–'}</div>
            <div className="text-blue-200 text-sm">Ø Quiz-Score</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-3 bg-blue-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${stats.lessonPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Per Module */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Module im Detail</h2>
      <div className="space-y-3 mb-8">
        {modules.map(mod => {
          const { completed, total, percent } = getModuleProgress(mod.id, mod.lektionen)
          const quizScore = getQuizScore(mod.id)
          return (
            <div key={mod.id} className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{mod.icon}</span>
                  <span className="font-medium text-gray-900">{mod.titel}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{completed}/{total} Lektionen</span>
                  {quizScore && (
                    <span className={`font-medium ${quizScore.percent >= 80 ? 'text-green-600' : quizScore.percent >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
                      Quiz: {quizScore.percent}%
                    </span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${barColorMap[mod.farbe]}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex gap-2 mt-3">
                <Link to={`/module/${mod.id}`} className="text-xs text-blue-600 hover:underline">
                  Lernen →
                </Link>
                <span className="text-gray-300">|</span>
                <Link to={`/quiz/${mod.id}`} className="text-xs text-blue-600 hover:underline">
                  Quiz →
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Achievements */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Abzeichen</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {achievements.map(ach => {
          const score = getQuizScore(ach.moduleId)
          const earned = score && score.percent >= ach.threshold
          return (
            <div
              key={ach.id}
              className={`rounded-xl p-4 text-center border-2 ${
                earned ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-3xl mb-1">{ach.icon}</div>
              <div className="text-xs font-medium text-gray-700">{ach.label}</div>
              {earned && <div className="text-xs text-yellow-600 mt-1">✓ Erreicht</div>}
              {!earned && <div className="text-xs text-gray-400 mt-1">Quiz ≥ {ach.threshold}%</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
