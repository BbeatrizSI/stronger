import { useState } from 'react'
import { type Exercise } from '../data/routines'

interface ExerciseCardProps {
  exercise: Exercise
  exerciseNumber: number
  totalExercises: number
  onComplete: () => void
}

export default function ExerciseCard({ exercise, exerciseNumber, totalExercises, onComplete }: ExerciseCardProps) {
  const [showProVersion, setShowProVersion] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
      {/* Exercise Header */}
      <div className="mb-6 flex flex-col items-center">
        <div className="flex items-center justify-between mb-2 w-full">
          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
            {exercise.id}
          </span>
          <span className="text-sm text-gray-500">
            {exerciseNumber}/{totalExercises}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {exercise.name}
        </h2>
        
        {/* Exercise Image */}
        {exercise.imageUrl && (
          <div className="mb-4 rounded-full overflow-hidden shadow-md h-40 w-40">
            <img 
              src={`${import.meta.env.BASE_URL}${exercise.imageUrl.replace(/^\//, '')}`}
              alt={exercise.name}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>

      {/* Exercise Info */}
      <div className="space-y-4 mb-6">
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📋</span>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Repeticiones:</p>
              <p className="text-gray-600">{exercise.repetitions}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Músculos trabajados:</p>
              <p className="text-gray-600">{exercise.muscles}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🧰</span>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Material necesario:</p>
              <p className="text-gray-600">{exercise.material}</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Descripción:</p>
              <p className="text-gray-600">{exercise.img}</p>
            </div>
          </div>
        </div>

        {exercise['pro-version'] && (
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border-2 border-orange-200">
            <button
              onClick={() => setShowProVersion(!showProVersion)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <p className="font-semibold text-gray-700">Versión Pro</p>
              </div>
              <span className="text-gray-600">{showProVersion ? '▲' : '▼'}</span>
            </button>
            {showProVersion && (
              <p className="text-gray-600 mt-3 pl-11">{exercise['pro-version']}</p>
            )}
          </div>
        )}
      </div>

      {/* Complete Button */}
      <button
        onClick={onComplete}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 text-lg"
      >
        ✓ Ejercicio Completado
      </button>
    </div>
  )
}
