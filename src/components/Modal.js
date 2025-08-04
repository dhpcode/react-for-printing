import "./Modal.css"
import ReactDom from 'react-dom'

function Modal({ children }) {
  return ReactDom.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
        border: "4px solid",
        borderColor: "yellowgreen",
        textAlign: "center"
      }}>
        {children}
      </div>
    </div>
  ), document.body)
}

export default Modal