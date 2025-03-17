import { useEffect, useState } from "react";

const TIMER = 3000; // ya que se usa para el settimeout Y LA PROGRESS BAR, LA DEFINIMOS CONSTATE
export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() =>{
    const idSetInterval = setInterval(() => {
      console.log('SETINTERVAL')
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () =>{
      clearInterval(idSetInterval);
    }
  },[])

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      console.log("TIMEOUT");
      onConfirm();
    }, TIMER);
    
    //parar el useEffect con un return
    return () => {
      clearTimeout(idTimeOut);
    }

  },[onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER}/>
    </div>
  );
}
