import { useState, useEffect } from 'react'

interface RestTimerProps {
  onComplete: () => void
  onSkip: () => void
}

const REST_DURATION = 30 // 30 segundos de descanso entre ejercicios

export default function RestTimer({ onComplete, onSkip }: RestTimerProps) {
  const [timeLeft, setTimeLeft] = useState(REST_DURATION)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setTimeout(() => onComplete(), 100)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, isPaused, onComplete])

  const formatTime = (seconds: number) => {
    return `${seconds}s`
  }

  const progress = ((REST_DURATION - timeLeft) / REST_DURATION) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
        <div className="text-6xl mb-4">⏸️</div>
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          Descanso
        </h2>
        <p className="text-gray-600 mb-6">
          Descansa antes del siguiente ejercicio
        </p>

        {/* Timer Circle */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 88}`}
              strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
              className="text-blue-500 transition-all duration-1000"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold text-gray-800">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            {isPaused ? '▶️ Reanudar' : '⏸️ Pausar'}
          </button>
          <button
            onClick={onSkip}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            ⏭️ Saltar
          </button>
        </div>
      </div>
    </div>
  )
}
