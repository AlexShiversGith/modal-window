const Modal = ({setIsModalOpen, children, modalHeader, modalBody}) => {
  return (
    <div className="overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2 className="modalHeader">{modalHeader}</h2>
            <div className="modalBody">{modalBody}</div>
            <div className="modalFooter">
              {children}
            </div>
          </div>
        </div>
  )
}

export default Modal