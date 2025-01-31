import React from "react";

export default function ImageModal({ visible, onClose, content, width }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="flex items-center justify-center ml-auto mr-auto">
        <div className="bg-white p-2 rounded max-w-full max-h-full">
          <img
            src={content}
            alt="Modal Image"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
