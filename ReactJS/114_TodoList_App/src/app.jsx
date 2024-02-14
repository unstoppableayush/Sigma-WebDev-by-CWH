import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="continer">
    <div className="bg-red-600">
      Hey I am red
    </div>
      </div>
    </>
  )
}
