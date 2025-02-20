
import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples (){
    const [selectedTab, setSelectedTab] = useState();
    console.log("Estoy en App");

    function handleClick(selected){
        setSelectedTab (selected);
    }
    //tercera forma renderizacion condicional, variable 
    let content = <p>CLick a button</p>;

    if (selectedTab){
      content = (
        <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
        </div>
      );
    }

    const misBotones = Object.keys(EXAMPLES).map((example, index) => (
                      <TabButton
                          key={index}
                          onClick={() => handleClick(example)} 
                          isActive={selectedTab ===  example} >
                          
                          {example}
                      </TabButton>
                    ))

    return(
        <Section id="examples" titulo ="Examples">
            <Tabs botones={misBotones} Contendor="menu">{content} </Tabs>
                {/* <TabButton onClick={() => handleClick("components")} isActive={selectedTab === 'componets'} >Component</TabButton>
                <TabButton onClick={() => handleClick("jsx")} isActive={selectedTab === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleClick("props")} isActive={selectedTab === 'props'}>Props</TabButton>
                <TabButton onClick={( )=> handleClick("state")} isActive={selectedTab === 'state'}>State</TabButton> */}

                {/* keys transforma el objeto para poder iterarlo a traves de sus propiedades, trasnformandolo en un array asociativo
                cada vez que se recorre el map, se itera sobre cada "key", en este caso: components, jsx, props,state*/}
                

            {/* forma dos renderizacion condicional, ternario */}
            {/* {!selectedTab ? (<p>Click a button</p> :
            (selectedTab && (
              <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
            ))} */}

            {/* forma uno renderizacion condicional */}
            {/* {!selectedTab && <p>Click a button</p>}
            {selectedTab && (
              <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
            )} */}
        </Section>
    );
}