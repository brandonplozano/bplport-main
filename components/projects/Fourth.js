import React from "react";
import styles from '@/styles/Home.module.css'
import ImageCard from "../ImageCard";

import one from "../../public/images/negociantes/linkedinnegociantes1.png"
import two from "../../public/images/negociantes/linkedinnegociantes2.png"

export function Fourth({
  onClick
}) 

{
    const imageArray = [
        one,
        two
      ]
      
  return <div className="mb-[3rem]">
          <div className="flex flex-col ml-auto mr-auto items-center justify-center w-[1200px] text-white gap-6 mt-[3rem] mt-[1.5rem]">
          <div className={`p-6 bg-[#262626] text-white text-[2rem] w-[90%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}>[PROJECT] Negociantes: An Online Marketplace</div>
          <div className="flex flex-wrap cursor-pointer">
          {imageArray.map((image, idx) => (
                <ImageCard w={500} h={1000} width={250} key={idx} image={image} onClick={() => onClick(image)} />
          ))}
          </div>
          <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg mb-[1.5rem]">A place where small scale sellers can easily showcase their products, that way people who lost their jobs because of the pandemic can still have some sort of place to go to, or somewhere where they can generate some income. With an online market, buyers can easily canvas products and services they wish to have without the hassle of going out amidst the pandemic, they will have the privilege of browsing through different products and services at the comfort of their own home.</div>
        </div>
        <div className="p-6 bg-[#262626] w-fit text-white text-[1.3rem] text-justify rounded-lg ml-auto mr-auto">
          <div className="flex flex-row items-center justify-center gap-[5rem]">
            <div>Technologies Used:</div>
            <div className="flex flex-col">
              <div>- Kotlin</div>
              <div>- Android Studio</div> 
            </div>
          </div>
        </div>
        </div>
}
  