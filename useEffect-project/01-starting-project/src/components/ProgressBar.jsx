export default function ProgressBar(props){
    return (
        <progress 
            value={props.remainingTime} 
            max={props.maxTime}
        />
    )
}