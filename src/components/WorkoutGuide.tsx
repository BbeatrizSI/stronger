import { useState } from 'react'
import { type Routine } from '../data/routines'
import ExerciseCard from './ExerciseCard'
import RestTimer from './RestTimer'
import CycleRestTimer from './CycleRestTimer'

interface WorkoutGuideProps {
  routine: Routine
  onFinish: () => void
}

type WorkoutState = 'exercise' | 'rest-between-exercises' | 'rest-between-cycles' | 'finished'

export default function WorkoutGuide({ routine, onFinish }: WorkoutGuideProps) {
  const [currentCycle, setCurrentCycle] = useState(1)
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [state, setState] = useState<WorkoutState>('exercise')
  const [totalCycles] = useState(3) // Por defecto 3 ciclos, se puede ajustar

  const currentExercise = routine.exercises[currentExerciseIndex]
  const isLastExercise = currentExerciseIndex === routine.exercises.length - 1
  const isLastCycle = currentCycle === totalCycles

  const handleExerciseComplete = () => {
    if (isLastExercise && isLastCycle) {
      setState('finished')
    } else if (isLastExercise) {
      setState('rest-between-cycles')
    } else {
      setState('rest-between-exercises')
    }
  }

  const handleRestComplete = () => {
    if (state === 'rest-between-cycles') {
      setCurrentCycle(prev => prev + 1)
      setCurrentExerciseIndex(0)
      setState('exercise')
    } else {
      setCurrentExerciseIndex(prev => prev + 1)
      setState('exercise')
    }
  }

  const handleSkipRest = () => {
    handleRestComplete()
  }

  if (state === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¡Rutina Completada!
          </h2>
          <p className="text-gray-600 mb-6">
            Has completado {totalCycles} ciclos de {routine.name}
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

  if (state === 'rest-between-cycles') {
    return (
      <CycleRestTimer
        cycle={currentCycle + 1}
        totalCycles={totalCycles}
        onComplete={handleRestComplete}
        onSkip={handleSkipRest}
      />
    )
  }

  if (state === 'rest-between-exercises') {
    return (
      <RestTimer
        onComplete={handleRestComplete}
        onSkip={handleSkipRest}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{routine.name}</h1>
              <p className="text-sm text-gray-600">Ciclo {currentCycle} de {totalCycles}</p>
            </div>
            <button
              onClick={onFinish}
              className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-semibold"
            >
              Finalizar
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Ejercicio {currentExerciseIndex + 1} de {routine.exercises.length}</span>
            <span>Ciclo {currentCycle}/{totalCycles}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${((currentCycle - 1) * routine.exercises.length + currentExerciseIndex + 1) / (totalCycles * routine.exercises.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Exercise Card */}
        <ExerciseCard
          exercise={currentExercise}
          exerciseNumber={currentExerciseIndex + 1}
          totalExercises={routine.exercises.length}
          onComplete={handleExerciseComplete}
        />
      </div>
    </div>
  )
}
