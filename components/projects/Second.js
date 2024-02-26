import React from "react";
import styles from '@/styles/Home.module.css'
import ImageCard from "../ImageCard";

import one from "../../public/images/notes/notes1.png"
import two from "../../public/images/notes/notes2.png"
import three from "../../public/images/notes/notes3.png"
import four from "../../public/images/notes/notes4.png"

export function Second({
  onClick
}) 

{
    const imageArray = [
        one,
        two,
        three,
        four
      ]
      
  return <div className="mb-[3rem]">
          <div className="flex flex-col ml-auto mr-auto items-center justify-center w-[1200px] text-white gap-6 mt-[3rem] mt-[1.5rem]">
          <div className={`p-6 bg-[#262626] text-white text-[2rem] w-[90%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}>Notes Web App</div>
          <div className="flex flex-wrap cursor-pointer ml-[6rem]">
          {imageArray.map((image, idx) => (
                <ImageCard w={500} h={1500} width={500} key={idx} image={image} onClick={() => onClick(image)} />
          ))}
          </div>
          <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg mb-[1.5rem]">A basic note taking application which makes use of Folders and Notes. Image can also be attached to notes and images are automatically saved in an online Image Hosting</div>
        </div>
        <div className="p-6 bg-[#262626] w-fit text-white text-[1.3rem] text-justify rounded-lg ml-auto mr-auto">
          <div className="flex flex-row items-center justify-center gap-[5rem]">
            <div>Technologies Used:</div>
            <div className="flex flex-col">
              <div>- ReactJS</div>
              <div>- NextJS</div>
              <div>- Tailwind CSS</div> 
            </div>
            <div className="flex flex-col">
              <div>- MongoDB Cloud</div>
              <div>- UploadThing</div>
              <div>- REST APIs</div>
            </div>
          </div>
        </div>
        </div>
}
  