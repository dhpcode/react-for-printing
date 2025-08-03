import "./Modal.css"
import ReactDom from 'react-dom'

function Modal({ children, closeModal }) {
  return ReactDom.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  ), document.body)
}

export default Modal