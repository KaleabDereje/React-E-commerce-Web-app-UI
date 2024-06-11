import React, {useEffect} from 'react';

 function Modal(modalContent, closeModal) {
    useEffect(()=>{
        setTimeout(()=>{
            closeModal;
        });
    });
    return (
        <article style={{marginLeft:'25%'}}>
          <h1>{modalContent}</h1>
        </article>
      );
}; 

export default Modal;