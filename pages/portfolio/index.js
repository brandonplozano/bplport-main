import { First } from "@/components/projects/First";
import { Second } from "@/components/projects/Second";
import { Third } from "@/components/projects/Third";
import { Fourth } from "@/components/projects/Fourth";
import Layout from "@/components/Layout";
import { useState } from "react";
import ImageModal from "@/components/modal/imageModal";

export default function index() {
  const [showModal, setShowModal] = useState(false);
  const [imageContent, setImageContent] = useState("");

  const onClose = () => setShowModal(false);
  const openModal = (image) => {
    setImageContent(image?.src); // Set image path here
    setShowModal(true);
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100">
        <div className="w-full">
          <First onClick={openModal} />
        </div>

        <div className="w-full border-t-2 border-gray-500 my-4"></div>

        <div className="w-full bg-gray-300">
          <Second onClick={openModal} />
        </div>

        <div className="w-full border-t-2 border-gray-500 my-4"></div>

        <div className="w-full">
          <Third onClick={openModal} />
        </div>

        <div className="w-full border-t-2 border-gray-500 my-4"></div>

        <div className="w-full bg-gray-300">
          <Fourth onClick={openModal} />
        </div>
      </div>
      <ImageModal
        onClose={onClose}
        visible={showModal}
        content={imageContent}
        width={500}
      />
    </Layout>
  );
}
