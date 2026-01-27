import { type Routine } from '../data/routines'

interface RoutineSelectorProps {
  routines: Routine[]
  onSelectRoutine: (routine: Routine) => void
}

export default function RoutineSelector({ routines, onSelectRoutine }: RoutineSelectorProps) {
  const mainRoutines = routines.filter(r => !r.name.includes('Pausas Activas'))
  const officeRoutine = routines.find(r => r.name.includes('Pausas Activas'))

  return (
    <div className="max-w-4xl mx-auto">
      {/* Rutinas principales (A y B) */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {mainRoutines.map((routine) => (
          <div
            key={routine.name}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-transparent hover:border-purple-300"
            onClick={() => onSelectRoutine(routine)}
          >
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {routine.name}
            </h2>
            <div className="space-y-2 mb-4 text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-purple-500">⏱️</span>
                <span>{routine['estimated-time']}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-500">🔄</span>
                <span>{routine['number-cycles']}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-500">💪</span>
                <span>{routine.exercises.length} ejercicios</span>
              </p>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Comenzar Rutina
            </button>
          </div>
        ))}
      </div>

      {/* Rutina C - Más pequeña y distintiva */}
      {officeRoutine && (
        <div className="max-w-md mx-auto">
          <div
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-200 hover:border-blue-300"
            onClick={() => onSelectRoutine(officeRoutine)}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">💼</span>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {officeRoutine.name}
                </h2>
                <p className="text-xs text-gray-500 mb-2">Pausas activas laborales</p>
              </div>
            </div>
            <div className="space-y-1.5 mb-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="text-blue-500">⏱️</span>
                <span>{officeRoutine['estimated-time']}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-500">🔄</span>
                <span className="text-xs">{officeRoutine['number-cycles']}</span>
              </p>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all text-sm">
              Comenzar Pausa Activa
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
