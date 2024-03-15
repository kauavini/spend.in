import { useState } from 'react'
import './App.css'
import Benefits from './sections/benefits'
import Hero from './sections/hero'
import HowWorks from './sections/howitworks'
import WhatSay from './sections/whatsay'
import WithoutSpendin from './sections/withoutspendin'
import WithSpendin from './sections/withspendin'
import { Theme } from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Theme> 
        <Hero/>
        <Benefits/>
        <HowWorks/>
        <WithSpendin/>
        <WithoutSpendin/>
        <WhatSay/>
    </Theme>
  )
}

export default App
