import Quiz from './components/Quiz'
function App() {

  return (
    <>
    <div className="bg-gradient-to-br from-custom-red-1 via-custom-red-4 to-custom-orange-4 h-screen flex justify-center items-center">
        {showQuiz ? (
          <Quiz />
        ) : (
          <div className="text-center">
            <h1 className="text-white text-4xl mb-8">Welcome to TechFest Quiz</h1>
            <button
              onClick={handleStartQuiz}
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
