import { useState, useEffect } from 'react'
import { type Routine, type Exercise } from '../data/routines'
import ExerciseCard from './ExerciseCard'

interface OfficeRoutineGuideProps {
  routine: Routine
  onFinish: () => void
}

// Función para mezclar array aleatoriamente (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function OfficeRoutineGuide({ routine, onFinish }: OfficeRoutineGuideProps) {
  const [shuffledExercises, setShuffledExercises] = useState<Exercise[]>([])
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())

  // Mezclar ejercicios al iniciar
  useEffect(() => {
    setShuffledExercises(shuffleArray(routine.exercises))
  }, [routine.exercises])

  const currentExercise = shuffledExercises[currentExerciseIndex]
  const totalExercises = shuffledExercises.length
  const allCompleted = completedExercises.size === totalExercises

  const handleExerciseComplete = () => {
    if (!currentExercise) return
    
    const newCompleted = new Set(completedExercises).add(currentExercise.id)
    setCompletedExercises(newCompleted)
    
    // Si todos están completados, no hacer nada más (el efecto mostrará la pantalla final)
    if (newCompleted.size === totalExercises) {
      return
    }
    
    // Ir al siguiente ejercicio con el nuevo estado
    handleNextExercise(newCompleted)
  }

  const handleNextExercise = (completedSet?: Set<string>) => {
    const completed = completedSet || completedExercises
    
    // Encontrar el siguiente ejercicio no completado
    const remainingExercises = shuffledExercises.filter(
      ex => !completed.has(ex.id)
    )
    
    if (remainingExercises.length === 0) {
      return
    }

    // Mezclar de nuevo los ejercicios restantes y tomar el primero
    const newShuffled = shuffleArray(remainingExercises)
    const nextExercise = newShuffled[0]
    const nextIndex = shuffledExercises.findIndex(ex => ex.id === nextExercise.id)
    
    setCurrentExerciseIndex(nextIndex)
  }

  if (shuffledExercises.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Preparando ejercicios...</p>
        </div>
      </div>
    )
  }

  if (allCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¡Pausa Activa Completada!
          </h2>
          <p className="text-gray-600 mb-6">
            Has completado todos los ejercicios de {routine.name}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Recuerda hacer estos ejercicios cada 90-120 minutos durante tu jornada laboral
          </p>
          <button
            onClick={onFinish}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
          >
            Volver al Menú
          </button>
        </div>
      </div>
    )
  }

  if (!currentExercise) {
    return null
  }

  const remainingCount = totalExercises - completedExercises.size

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{routine.name}</h1>
              <p className="text-sm text-gray-600">Pausa activa laboral</p>
            </div>
            <button
              onClick={onFinish}
              className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-semibold"
            >
              Finalizar
            </button>
          </div>
        </div>

        {/* Progress Info */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>Ejercicios restantes: {remainingCount}</span>
            <span>Completados: {completedExercises.size}/{totalExercises}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${(completedExercises.size / totalExercises) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Exercise Card */}
        <ExerciseCard
          exercise={currentExercise}
          exerciseNumber={completedExercises.size + 1}
          totalExercises={totalExercises}
          onComplete={handleExerciseComplete}
        />

        {/* Next Exercise Button */}
        {!completedExercises.has(currentExercise.id) && (
          <div className="mt-4 text-center">
            <button
              onClick={handleNextExercise}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              🔀 Siguiente Ejercicio Aleatorio
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
