import { useState } from 'react'
import Registro from './components/Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro></Registro>
    </>
  )
}

export default App
