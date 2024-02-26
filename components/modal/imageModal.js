import Image from "next/image";
import React from "react";

export default function ImageModal({ visible, onClose, content, width }) { 
  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose();
  }

  if (!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex items-center justify-center ml-auto mr-auto">
        <div className="full-height-image bg-white p-2 rounded">
            <img
                src={content}
                alt="image from uploadthing.com"
            />
        </div>
      </div>
    </div>
  )
}