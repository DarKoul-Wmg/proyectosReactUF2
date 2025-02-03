import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//en react todos los componentes son una función
//motor de react es asíncrono, no controlamos el orden
function App() {
  const [count, setCount] = useState(0); //variable de estado

  //ejemplo de estructura para llamar a una funcion de forma correcta (funcion anonima en variable)
  const updateCount = () =>{
    setCount((count) => count +1)
  } 

  return (
    // <> Esto convierte todo en un unico objeto (las funciones en react dentro de un componente solo pueden devolver un objeto)
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
          Decrementar
        </button>
      </div>
      <p>{count}</p>
    </>
    //estos elementos no son html, es JSX (javascript)
    // los { } contienen codigo js (variables o codigo js)
  )
}

export default App
