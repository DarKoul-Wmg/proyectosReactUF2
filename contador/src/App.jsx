
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button.jsx'
import RandomNum from './components/RandomNum.jsx'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [maxNum, setMaxNum] = useState(100)
  const [minNum, setMinNum] = useState(0)

  
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Contador Especial</h1>

      <div className="card">
        {/* <Button type = "contador" count={count} setCount={setCount} />
        <br/><br/>
        <Button type = "reset" count={count} setCount={setCount}/> */}
        <RandomNum min ={minNum} max ={maxNum}/>
      </div>
    </>
  )
}

export default App
