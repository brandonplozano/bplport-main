import React from "react";

export default function Modal({ visible, onClose, title, children }) { 
  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose();
  }

  if (!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col gap-4 bg-white p-4 rounded">
        <div>{title}</div>
        <div>{children}</div>
      </div>
    </div>
  )
}