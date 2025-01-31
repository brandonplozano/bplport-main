import React from "react";
import styles from "@/styles/Home.module.css";
import ImageCard from "../ImageCard";

import one from "../../public/images/negociantes/linkedinnegociantes1.png";
import two from "../../public/images/negociantes/linkedinnegociantes2.png";

export function Fourth({ onClick }) {
  const imageArray = [one, two];

  return (
    <div className="mb-[3rem]">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1200px] text-white gap-6 mt-[1.5rem]">
        <div
          className={`p-6 bg-[#262626] text-white text-lg sm:text-xl md:text-2xl w-[90%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}
        >
          [PROJECT] Negociantes: An Online Marketplace
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
          {imageArray.map((image, idx) => (
            <ImageCard
              w={500}
              h={1000}
              width={250}
              key={idx}
              image={image}
              onClick={() => onClick(image)}
            />
          ))}
        </div>
        <div className="p-6 bg-[#262626] text-white text-lg sm:text-xl md:text-2xl w-[90%] text-justify rounded-lg mb-[1.5rem]">
          A place where small-scale sellers can easily showcase their products,
          allowing people who lost their jobs because of the pandemic to have
          some place to go and generate income.
        </div>
      </div>
      <div className="p-6 bg-[#262626] w-fit text-white text-lg sm:text-xl md:text-2xl text-justify rounded-lg mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <div>Technologies Used:</div>
          <div className="flex flex-col">
            <div>- Kotlin</div>
            <div>- Android Studio</div>
          </div>
        </div>
      </div>
    </div>
  );
}
