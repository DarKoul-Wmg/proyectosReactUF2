import { forwardRef, useEffect, useImperativeHandle, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children , isOpen }) {
  const myComponente = useRef();

  //? porque hay que comporbar que este definido antes de llamar a los metodos 
  if (isOpen){
    myComponente.current?.showModal();
    
  } else{
    myComponente.current?.close();
  }

 
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
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
