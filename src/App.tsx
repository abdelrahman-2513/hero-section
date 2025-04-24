
import './App.css'
import Hero from './components/Hero'

function App() {

  return (
  <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16">
        <Hero />
      </div>
    </div>

  )
}

export default App
