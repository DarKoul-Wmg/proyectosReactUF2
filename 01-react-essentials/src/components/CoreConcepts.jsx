import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from "../data";
import Section from "./Section";


export default function CoreConcepts(){
    return (
    <Section id="core-concepts" titulo="Time to get started!">
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
            /* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
            {CORE_CONCEPTS.map((concept,index) => (
              <CoreConcept key={index} {...concept}/>
              )
            )}
          </ul>
          </Section>
    );
}