import React from "react";
import styles from "@/styles/Home.module.css";
import ImageCard from "../ImageCard";

import one from "../../public/images/vincecv/Untitled.png";

export function Third({ onClick }) {
  const imageArray = [one];

  return (
    <div className="mb-[3rem]">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1200px] text-white gap-6 mt-[3rem] mt-[1.5rem]">
        <div
          className={`p-6 bg-[#262626] text-white text-[2rem] w-[90%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}
        >
          CV Design Copy (Front-end)
        </div>
        <div className="flex flex-wrap cursor-pointer">
          {imageArray.map((image, idx) => (
            <ImageCard
              w={500}
              h={1000}
              width={400}
              key={idx}
              image={image}
              onClick={() => onClick(image)}
            />
          ))}
        </div>
        <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg mb-[1.5rem]">
          A CV copy of my friend and transforming it into a front-end design
          using Tailwind CSS. This is also available to view at{" "}
          <a
            href="https://vincecv.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.vincecv.vercel.app
          </a>
        </div>
      </div>
      <div className="p-6 bg-[#262626] w-fit text-white text-[1.3rem] text-justify rounded-lg mx-auto">
        <div className="flex flex-row items-center justify-center gap-[5rem]">
          <div>Technologies Used:</div>
          <div className="flex flex-col">
            <div>- NextJS</div>
            <div>- Tailwind CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
