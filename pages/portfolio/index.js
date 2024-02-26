import { First } from '@/components/projects/First';
import { Second } from '@/components/projects/Second';
import { Third } from '@/components/projects/Third';
import { Fourth } from '@/components/projects/Fourth';
import Layout from "@/components/Layout"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import ImageModal from "@/components/modal/imageModal"
import ImageCard from "@/components/ImageCard"
import { useEffect, useState } from "react"


export default function index() {

  const [showModal, setShowModal] = useState(false);
  const [imageContent, setImageContent] = useState("");

  const onClose = () => setShowModal(false);
  const openModal = (image) => {
      setImageContent(image?.src); // Set image path here
      setShowModal(true);
      console.log(image)
  };
  
  return (
    <Layout>
      <div className="flex flex-col min-h-screen w-fit justify-center items-center mt-auto mb-auto bg-gray-100">

        <div className=''>
          <First onClick={openModal} />
        </div>

        <div className="w-screen border b-2-black"></div>

        <div className='w-screen bg-gray-300'>
          <Second onClick={openModal} />
        </div>

        <div className="w-screen border b-2-black"></div>

        <div>
          <Third onClick={openModal} />
        </div>

        <div className="w-screen border b-2-black"></div>

        <div className='w-screen bg-gray-300'>
          <Fourth onClick={openModal} />
        </div>

      </div>
      <ImageModal onClose={onClose} visible={showModal} content={imageContent} width={500}/>
    </Layout>
  )
}
