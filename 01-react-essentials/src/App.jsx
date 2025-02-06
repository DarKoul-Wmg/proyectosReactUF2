import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton.jsx";
import {CORE_CONCEPTS} from "./data.js";
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
    let selectedTab = "Click a Button";
    console.log("Estoy en App")
    function handleClick(selected){
        selectedTab = selected;
        console.log(selected);
    }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>

          <ul>
            {/* <CoreConcept 
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} 
            /> 

            <CoreConcept {...CORE_CONCEPTS[0]}/> si los nombres de los atributos (data.js) coinciden con 
            los del componente (CoreConcept), se puede usar esto.

            {CORE_CONCEPTS.map((value,index){
              <CoreConcept {...CORE_CONCEPTS[index]}/>
              return(
              )
            )}
            
            */}
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
            <menu>
                <TabButton onClick={() => handleClick("component")}>Component</TabButton>
                <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
                <TabButton onClick={() => handleClick("props")}>Props</TabButton>
                <TabButton onClick={( )=> handleClick("state")}>State</TabButton>
            </menu>
            
        </section>
      </main>
    </div>
  );
}

export default App;
