import { useState } from 'react'
import {Link, Router} from 'react-router-dom'

export default function Menu() {
    const [selectedItem, setSelectedItem] = useState(null)

    const items = ['juego de animales', 'hielo movil', 'el pinguino', 'el oso']
  return (
    <div>
        <h1>Menú</h1>
        <h2>Historias</h2>
        <p>{selectedItem && <p>Historia Seleccionada: {selectedItem}</p>}</p>
      <ul>
        
        {items.map((item, index) => (
          <li key={index} onClick={() => setSelectedItem(item)}>
            <Link to={`/historia/${item}`}>
              <button className='historias'>{item}</button> 
            </Link>
          </li>
        ))}
      </ul>

    </div>
  )
}
