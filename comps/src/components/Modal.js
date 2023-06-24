import ReactDOM from "react-dom";

//create this jsx inside a new div out of root div
function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-80 p-10 bg-white ">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
