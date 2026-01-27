import { useState } from 'react'
import { routineA, routineB, routineC, type Routine } from './data/routines'
import RoutineSelector from './components/RoutineSelector'
import WorkoutGuide from './components/WorkoutGuide'
import OfficeRoutineGuide from './components/OfficeRoutineGuide'
import './App.css'

type AppState = 'selecting' | 'working-out'

function App() {
  const [state, setState] = useState<AppState>('selecting')
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null)

  const routines = [routineA, routineB, routineC]

  const handleStartRoutine = (routine: Routine) => {
    setSelectedRoutine(routine)
    setState('working-out')
  }

  const handleFinishWorkout = () => {
    setState('selecting')
    setSelectedRoutine(null)
  }

  if (state === 'selecting') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
            💪 Stronger
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Tu entrenadora de fuerza personal
          </p>
          <RoutineSelector 
            routines={routines} 
            onSelectRoutine={handleStartRoutine}
          />
        </div>
      </div>
    )
  }

  if (selectedRoutine) {
    // La Rutina C es especial: ejercicios en orden aleatorio para pausas laborales
    const isOfficeRoutine = selectedRoutine.name.includes('Pausas Activas')
    
    if (isOfficeRoutine) {
      return (
        <OfficeRoutineGuide 
          routine={selectedRoutine} 
          onFinish={handleFinishWorkout}
        />
      )
    }
    
    return (
      <WorkoutGuide 
        routine={selectedRoutine} 
        onFinish={handleFinishWorkout}
      />
    )
  }

  return null
}

export default App
