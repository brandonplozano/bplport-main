import React from "react";
import styles from "@/styles/Home.module.css";
import ImageCard from "../ImageCard";

import one from "../../public/images/mytpass/1.png";
import two from "../../public/images/mytpass/2.png";
import three from "../../public/images/mytpass/3.png";
import four from "../../public/images/mytpass/4.png";
import five from "../../public/images/mytpass/5.png";
import six from "../../public/images/mytpass/6.png";

export function First({ onClick }) {
  const imageArray = [one, two, three, four, five, six];

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[1200px] text-white gap-6 mt-[10rem] mb-[3rem]">
      <div
        className={`p-6 bg-[#262626] text-white text-[1.5rem] w-[75%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}
      >
        [CAPSTONE] MyT-Pass: Web Based Training Record and Document Management
        System for Manufacturing Businesses in the Philippines
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer justify-center">
        {imageArray.map((image, idx) => (
          <ImageCard
            key={idx}
            image={image}
            onClick={() => onClick(image)}
            w={500}
            h={500}
          />
        ))}
      </div>
      <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg">
        MyT-Pass is a Web-Based Training Record and Document Management System
        designed for the Manufacturing Industry's Employees, Owners, and Human
        Resources. The Capstone's Main Objective is to create an Online platform
        for Manufacturing businesses' employees, human resources, and business
        owners to keep track of their training records and certifications, with
        the Specific Objectives of (1) Providing a Digital Repository for the
        Employees and Human Resources Users to Manage Training Records and
        Certificates. (2) Providing a Notification System to Monitor the
        Expiring Training Records and Certificates. (3) Providing Analytical
        Reports to Monitor the Scheduled Training Records.
      </div>
      <div className="p-6 bg-[#262626] text-white text-[1.3rem] text-justify rounded-lg">
        <div className="flex flex-row items-center justify-center gap-[5rem]">
          <div>Technologies Used:</div>
          <div className="flex flex-col">
            <div>- JavaScript</div>
            <div>- Laravel</div>
            <div>- ReactJS</div>
          </div>
          <div className="flex flex-col">
            <div>- Amazon AWS</div>
            <div>- MySQL DB</div>
            <div>- Tailwind (UI)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
