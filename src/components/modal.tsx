// import { createPortal } from 'react-dom';
// import { Event } from '../types/Event';

import { ModalProps } from '../types/modal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
 const Modal = ( {children, isOpen, onClose}: ModalProps) => {

    useEffect(() => {
      document.body.style.overflow = 'hidden';
      function handler(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          onClose();
        }
      }
      window.addEventListener('keydown', handler);

      return () => {
        window.removeEventListener('keydown', handler);
        document.body.style.overflow = 'auto';
      }
    }
    , [onClose]);

  return isOpen? createPortal(
    <div className="modal">
    <div className="overlay" onClick={onClose}/>
    <div className="modal-body">
      {children}
    </div>
  </div>, document.getElementById('modal-container') as HTMLElement
  ) : null;
}

export default Modal;
