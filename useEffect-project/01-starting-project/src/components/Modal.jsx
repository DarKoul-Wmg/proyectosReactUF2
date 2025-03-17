import { forwardRef, useEffect, useImperativeHandle, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children , isOpen }) {
  const myComponente = useRef();

  // use efect porque necesito que exista el moda
  useEffect(() =>{
    if (isOpen){
      myComponente.current.showModal();
      
    } else{
      myComponente.current.close();
    }
  },[isOpen]); //ejecuta el codigo cada vez que la variale de estado cambie


  // const dialog = useRef();
  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  return createPortal(
    // <dialog className="modal" ref={dialog}>
    <dialog className="modal" ref={myComponente}>
      {isOpen && children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
