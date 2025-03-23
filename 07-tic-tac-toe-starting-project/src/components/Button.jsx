export default function Button ({text,handleFunction}){
    return (
    <button onClick={handleFunction}>{text}</button>
    )
}