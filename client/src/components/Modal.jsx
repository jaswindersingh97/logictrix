import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-stone-500/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-900  rounded-2xl  relative  flex"
        onClick={(e) => e.stopPropagation()}
      >
        
        {children}
      </div>
    </div>
  );
}

export default Modal;
