import { useState } from 'react'

function ListaCompra(){
    const [listaProductos, setListaProductos] = useState([]);

    const agregarProducto = (e) => {
        e.preventDefault();
        const myForm = e.target;
        const myInput = myForm.querySelector("input");
        setListaProductos([...listaProductos, myInput.value]);
    }

    return(
        <>
        <form onSubmit={(e) => agregarProducto(e)}>
            <input type ="text" />
            <button>Añadir producto</button>
        </form>
            <p>Productos: </p>
            <ul>
                {listaProductos.map(function (value, index){ //con el map, peudes btener en index y añadirlo como key para evitar que salga errores
                return <li key={index}>{value}</li>
                //Para devovler más de una cosa, se añade la key al fragment "<>" o se crea un padre y se mete en el: <div key>
            
                // {listaProductos.map((value, index) => { //otra estructura
                //     return <li key={index}>{value}</li>
                })}
            </ul>
        </>
    );
}

export default ListaCompra;