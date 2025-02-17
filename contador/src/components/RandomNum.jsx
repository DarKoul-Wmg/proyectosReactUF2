import { useState } from "react";

export default function RandomNum() {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [randomNum, setRandomNum] = useState(null);

//Se puede aislar en una variable y usarla en el onchange de la variable
  const actualizaMin = (e) => e.target.value ? setMin(Number(e.target.value)) : setMin(0)

 
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    setRandomNum(getRandomNum(min, max));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Min:
          <input
            type="number"
            onChange={(actualizaMin)}
          />
        </label>
        <br />

        <label>
          Max:
          <input
            type="number"
            onChange={(e) => e.target.value ? setMax(Number(e.target.value)) : setMax(100)}
          />
        </label>
        <br />

        <button type="submit">Generar</button>
      </form>

      {randomNum !== null && (
        <p>
          Número aleatorio entre {min} y {max}: {randomNum}
        </p>
      )}
    </div>
  );
}
