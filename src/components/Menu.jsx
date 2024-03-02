import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    const [selectedItem, setSelectedItem] = useState(null)

    const items = ['juego de animales', 'hielo movil', 'el pinguino', 'el oso']
  return (
    <div>
      <div className='banner'>
        <h1>Historias</h1>
      </div>
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
