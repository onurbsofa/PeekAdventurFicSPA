import { useState } from 'react'

export default function Menu() {
    const [selectedItem, setSelectedItem] = useState(null)

    const items = ['juego de animales', 'hielo movil', 'el pinguino', 'el oso']
  return (
    <div>
        <h1>Menú</h1>
        <h2>Historias</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => setSelectedItem(item)}>
            {item}
          </li>
        ))}
      </ul>
      {selectedItem && <p>Historia Seleccionada: {selectedItem}</p>}
    </div>
  )
}
