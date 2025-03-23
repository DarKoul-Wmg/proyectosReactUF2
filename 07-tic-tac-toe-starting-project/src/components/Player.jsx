import { useState } from "react"
import Button from "./Button";

export default function Player ({name,symbol}){
    const [textName, setTextName] = useState(name);
    //alterna entre modo de edición(input) y visualización(span) 
    const [isEditing,setIsEditing] = useState(false); 

    function handleEdit (){
        setIsEditing(true);
    }
    function handleTextChange (e){
        setTextName(e.target.value);
    }
    // Guarda el texto y vuelve al modo visualización cuando se presiona Enter
    function handleKeyPress(e) {
        if (e.key === "Enter") {
        setIsEditing(false);
        }
    }

    return (
        <>
        <li>
            <div className="player">
                {/* <p className="player-name">{text}</p> */}

                {/* Ternario --> {isAlgo ? () : () }*/}

                {isEditing ? (
                    <input
                    type="text"
                    value={textName}
                    onChange={handleTextChange}
                    onKeyUp={handleKeyPress}
                    autoFocus  // Enfoca automáticamente el input al editar
                    
                    />
                ): (
                    <span className="player-name">{textName}</span>
                )}
                <p className="player-symbol">{symbol}</p>
                <Button text="Edit" handleFunction = {handleEdit} />
                {/* <button onClick={handleEdit}>Edit</button> */}
            </div>
        </li>
        </>
    )
}