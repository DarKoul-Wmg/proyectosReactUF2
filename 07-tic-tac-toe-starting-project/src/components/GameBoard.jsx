import { useState } from "react"

export default function GameBoard (){

    //Estado para el contenido de las celdas

    function clickCell(e){
        if (!e.target.value) {
            const randomValue = Math.random() < 0.5 ? "X" : "O";
            e.target.value = randomValue;
        }
    }
    return (
        <>
            <ol id="game-board">
                <li>
                    <ol>
                        <li><button onClick={clickCell}/></li>
                        <li><button onClick={clickCell}/></li>
                        <li><button onClick={clickCell}/></li>
                    </ol>
                </li>
                <li>
                    <ol>
                        <li><button onClick={clickCell}/></li>
                        <li><button onClick={clickCell}/></li>
                        <li><button onClick={clickCell}/></li>
                    </ol>
                </li>
                <li>
                    <ol>
                        <li><button onClick={clickCell}/></li>
                        <li><button onClick={clickCell}/></li>
                        <li><button onClick={clickCell}/></li>
                    </ol>
                </li>
            </ol>
        </>
    )
}