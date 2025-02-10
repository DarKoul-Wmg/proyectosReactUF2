import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [item, setItem] = useState({op1: 0, op2:0, operador:"?", res:0});
  const [listaHistorico, setListaHistorico] = useState([]);

  //manejar cambio en inputs
  const handleInputChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleClick = (operation) =>{
    console.log(operation);
    let result = "";
    switch (operation) {
      case "+":
        result = item.op1 + item.op2;
        break;

      case "-":
        result = item.op1 - item.op2;
        break;

      case "*":
        result = item.op1 * item.op2;
        break;

      case "/":
        result = item.op2 !== 0 ? item.op1 / item.op2 : "Error";
        break;

      default:
        break;
    }

    // Crear una copia actualizada del estado antes de aplicarlo
    const newItem = {
      ...item,
      operador: operation,
      res: result,
    };

    // Actualizar el estado con los nuevos valores
    setItem(newItem);

    const entrada = `${newItem.op1} ${newItem.operador} ${newItem.op2} = ${newItem.res}`;
    setListaHistorico((prevHistorico) => [...prevHistorico, entrada]);
  };


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Willydora</h1>

      <form onSubmit={(e) => e.preventDefault()}>
            <input type ="number" name='op1' value={item.op1} onChange={handleInputChange}/>
            <input type ="number" name='op2' value={item.op2} onChange={handleInputChange}/>
            <br/>
            <br/>
            <button onClick={() => handleClick("+")}>Suma</button>
            <button onClick={() => handleClick("-")}>Resta</button>
            <button onClick={() => handleClick("*")}>Multiplicación</button>
            <button onClick={() => handleClick("/")}>División</button>
      </form>
      <h3>Resultado: </h3>
      <p>{item.operador !== '?' ? `${item.op1} ${item.operador} ${item.op2} = ${item.res}` : ""}</p>
      <br/>
      <h3>Histórico: </h3>
      <ul>
        {[...listaHistorico].reverse().map((entrada, index) => (
            <li key={index}>{entrada}</li>
          ))}
      </ul>
       
    </>
  )
}

export default App
