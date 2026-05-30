import { useState, useEffect } from 'react'

const STORAGE_KEY = 'automatiker_progress'

const defaultProgress = {
  completedLessons: {},
  quizScores: {},
  flashcardProgress: {},
  lastActivity: null,
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : defaultProgress
    } catch {
      return defaultProgress
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const markLessonComplete = (moduleId, lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: {
        ...prev.completedLessons,
        [`${moduleId}:${lessonId}`]: true,
      },
      lastActivity: new Date().toISOString(),
    }))
  }

  const isLessonComplete = (moduleId, lessonId) => {
    return !!progress.completedLessons[`${moduleId}:${lessonId}`]
  }

  const getModuleProgress = (moduleId, lektionen) => {
    const completed = lektionen.filter(l => isLessonComplete(moduleId, l.id)).length
    return { completed, total: lektionen.length, percent: Math.round((completed / lektionen.length) * 100) }
  }

  const saveQuizScore = (moduleId, score, total) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [moduleId]: { score, total, percent: Math.round((score / total) * 100), date: new Date().toISOString() },
      },
      lastActivity: new Date().toISOString(),
    }))
  }

  const getQuizScore = (moduleId) => progress.quizScores[moduleId] || null

  const markFlashcard = (cardId, known) => {
    setProgress(prev => ({
      ...prev,
      flashcardProgress: {
        ...prev.flashcardProgress,
        [cardId]: known ? 'known' : 'repeat',
      },
    }))
  }

  const getFlashcardStatus = (cardId) => progress.flashcardProgress[cardId] || null

  const getOverallStats = (modules) => {
    const totalLessons = modules.reduce((sum, m) => sum + m.lektionen.length, 0)
    const completedLessons = Object.keys(progress.completedLessons).length
    const quizCount = Object.keys(progress.quizScores).length
    const avgQuizScore = quizCount > 0
      ? Math.round(Object.values(progress.quizScores).reduce((sum, s) => sum + s.percent, 0) / quizCount)
      : 0
    return {
      totalLessons,
      completedLessons,
      lessonPercent: Math.round((completedLessons / totalLessons) * 100),
      quizCount,
      avgQuizScore,
    }
  }

  const resetProgress = () => {
    setProgress(defaultProgress)
  }

  return {
    progress,
    markLessonComplete,
    isLessonComplete,
    getModuleProgress,
    saveQuizScore,
    getQuizScore,
    markFlashcard,
    getFlashcardStatus,
    getOverallStats,
    resetProgress,
  }
}
