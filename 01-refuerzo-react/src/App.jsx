import { useState } from "react";
import UserInputs from "./components/UserInputs";

function App() {

    const [inputData, setInputData] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration:10,
    })

    function handleInputChange(id,value){
        setInputData((prevInputData)=>{
            //este objeto funciona como un array asociativo (puedes acceder por clave) -> busca en el objeto lo que quiere cambiar y lo reemplaza con el nuevo valor
            return {...prevInputData,[id]:value};
        });
    }

    return (
        <>
            <UserInputs data={inputData} onInputsChange={handleInputChange} />
            <p>Resultadoss</p>
        </>
    )
}

export default App;
