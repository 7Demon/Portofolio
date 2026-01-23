import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className=''>home</nav>
      <section id="home" className="pt-20 bg-emerald-600 h-screen">
        <div className="container">
          <h1>Welcome to the Home Section</h1>
        </div>
      </section>
    </>
  )
}

export default App
