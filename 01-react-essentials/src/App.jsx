import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
/**
 * 1. Crear un nuevo componente Header +
 *
 * 2. Dinamizar contenido const reactDescriptions = ["Fundamental", "Crucial", "Core"];
 *    function genRandomInt(max) {return Math.floor(Math.random() * (max + 1));}
 *
 * 3. Importar imagenes para preparar la subida a pro
 *
 * 4. Crear componente nuevo CoreConceps (li -> img, h2, p)
 *
 * 5. Obtener datos de CoreConcepts desde data.js
 *
 **/

function App() {
    
  return (
    <div>
        <Header />
        <main>
            <CoreConcepts />
            <Examples />
      </main>
    </div>
  );
}

export default App;
