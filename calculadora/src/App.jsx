import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [item, setItem] = useState({op1: 0, op2:0, operador:"?",res:0});
  const [listaHistorico, setListaHistorico] = useState([]);

  //para forzar actualización de los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleClick = (operation) =>{
    console.log(operation);

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

    setItem((prev) =>({...prev, operador:operation, res:result}))

    const entrada = `${item.op1} ${item.operador} ${item.op2} = ${item.res}`;

    setListaHistorico([...listaHistorico, entrada]);
  }

//   const agregarEntrada = (e) => {
//     e.preventDefault();
//     //const operation = e.nativeEvent.submitter.value;
//     const myForm = e.target;
//     const num1 = myForm.querySelector("num1");
//     const num2 = myForm.querySelector("num2");
//     let entrada = "";


//     setListaHistorico([...listaHistorico, myInput.value]);
// }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Willydora</h1>

      <form onSubmit={(e) => agregarEntrada(e)}>
            <input type ="number" className='num1' placeholder='0'/>
            <input type ="number" className='num2' placeholder='0'/>
            <br/>
            <br/>
            <button onClick={() => handleClick("+")}>Suma</button>
            <button onClick={() => handleClick("-")}>Resta</button>
            <button onClick={() => handleClick("*")}>Multiplicación</button>
            <button onClick={() => handleClick("/")}>División</button>
      </form>
      <h3>Resultado: </h3>
      <p>{`${item.op1} ${item.operator} ${item.op2} = ${item.res}`}</p>
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
