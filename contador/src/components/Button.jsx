
export default function Button ({type, count, setCount}){

    if(type === "contador"){
    
        return (
            <button onClick={() => setCount((prevCount) => prevCount + 1)} disabled = {count >= 10}>
                Contador:  {count}
            </button>
        )
    } else if (type === "reset"){
        return (

            <button  onClick={() => setCount((0))}>
                Reset
            </button>
        )
    }
}


