import { useState } from 'react'

export default function Menu() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Menú</h1>
      <h2>Contador</h2>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  )
}
