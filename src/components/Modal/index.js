import { useState } from "react";
import "./Modal.scss"
function Modal() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = ()=>{
    setShowModal(true)
  }
  const handleUnShow = ()=>{
    setShowModal(false)
  }
  return (
    <>
      <button onClick={handleShow}>Click</button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <button onClick={handleUnShow} className="modal__close">Close</button>
            <div className="modal__content">Nội dung...</div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
