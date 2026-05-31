import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { modules } from '../data/module_data'
import { useProgress } from '../hooks/useProgress'
import { diagramMap } from '../components/Diagram'

export default function ModulePage() {
  const { id } = useParams()
  const mod = modules.find(m => m.id === id)
  const [activeLesson, setActiveLesson] = useState(0)
  const { markLessonComplete, isLessonComplete, getModuleProgress } = useProgress()

  if (!mod) return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <p className="text-gray-500">Modul nicht gefunden.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 block">← Zurück zum Dashboard</Link>
    </div>
  )

  const lesson = mod.lektionen[activeLesson]
  const { completed, total, percent } = getModuleProgress(mod.id, mod.lektionen)
  const done = isLessonComplete(mod.id, lesson.id)

  const formatContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold text-gray-900 mt-5 mb-2 border-b pb-1">{line.slice(3)}</h2>
      if (line.startsWith('### ')) return <h3 key={i} className="font-semibold text-gray-800 mt-4 mb-1">{line.slice(4)}</h3>
      if (line.startsWith('- ')) return <li key={i} className="ml-4 text-gray-700 list-disc">{line.slice(2)}</li>
      if (line === '') return <div key={i} className="my-1" />
      return <p key={i} className="text-gray-700 leading-relaxed">{line}</p>
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600">Dashboard</Link>
        <span>›</span>
        <span className="text-gray-800 font-medium">{mod.icon} {mod.titel}</span>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-white rounded-xl shadow p-4 sticky top-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{mod.icon}</span>
              <div>
                <div className="font-bold text-sm text-gray-900">{mod.titel}</div>
                <div className="text-xs text-gray-500">{completed}/{total} gelernt</div>
              </div>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${percent}%` }} />
            </div>
            <nav className="space-y-1">
              {mod.lektionen.map((l, i) => {
                const isDone = isLessonComplete(mod.id, l.id)
                return (
                  <button
                    key={l.id}
                    onClick={() => setActiveLesson(i)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                      i === activeLesson
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center text-xs ${
                      isDone ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'
                    }`}>
                      {isDone ? '✓' : ''}
                    </span>
                    <span className="truncate">{l.titel}</span>
                  </button>
                )
              })}
            </nav>
            <div className="mt-4 pt-4 border-t">
              <Link
                to={`/quiz/${mod.id}`}
                className="block w-full text-center text-sm font-medium bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors"
              >
                Quiz starten →
              </Link>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="md:col-span-3">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">{lesson.titel}</h1>
              {done && (
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                  ✓ Gelernt
                </span>
              )}
            </div>
            <div className="prose prose-sm max-w-none space-y-1">
              {formatContent(lesson.inhalt)}
            </div>
            {lesson.diagramId && diagramMap[lesson.diagramId] && (
              <div className="mt-6 pt-4 border-t">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Visualisierung</div>
                {diagramMap[lesson.diagramId]()}
              </div>
            )}
            <div className="mt-8 pt-4 border-t flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveLesson(i => Math.max(0, i - 1))}
                  disabled={activeLesson === 0}
                  className="px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50"
                >
                  ← Zurück
                </button>
                <button
                  onClick={() => setActiveLesson(i => Math.min(mod.lektionen.length - 1, i + 1))}
                  disabled={activeLesson === mod.lektionen.length - 1}
                  className="px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50"
                >
                  Weiter →
                </button>
              </div>
              <button
                onClick={() => markLessonComplete(mod.id, lesson.id)}
                disabled={done}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  done
                    ? 'bg-green-100 text-green-700 cursor-default'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {done ? '✓ Gelernt' : 'Als gelernt markieren'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
