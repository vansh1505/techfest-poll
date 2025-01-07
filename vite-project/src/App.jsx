import React from 'react'
import Quiz from './components/Quiz'
import Welcome from './Components/Welcome'
function App() {

  return (
    <>
    <div className="bg-gradient-to-br from-custom-red-1 via-custom-red-4 to-custom-orange-4 h-full justify-center items-center w-full">
        <Welcome />
        <Quiz />
      </div>
    </>
  )
}

export default App
