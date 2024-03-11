import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Theme } from './theme'
import Hero from './sections/hero'
import Benefits from './sections/benefits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Theme> 
        <Hero/>
        <Benefits/>
    </Theme>
  )
}

export default App
