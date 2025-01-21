import { Open_Sans } from '@next/font/google'
import { ImDownload3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import selfie from "../public/images/2.jpg"
import selfie2 from "../public/images/selfie.jpg"
import Link from 'next/link';

const roboto = Open_Sans({
  weight: "300",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-6 items-center bg-[#262626]">
      <div className="w-full max-w-[1200px] px-4">
        {/* Header */}
        <div className="flex flex-row flex-wrap gap-1 text-white text-[3rem] sm:text-[2.5rem]">
          <div className="font-bold">BRANDON</div>
          <div className="font-light">LOZANO</div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center text-white py-2 gap-5">
          {/* Profile Image */}
          <Image
            src={selfie2}
            className="object-cover w-[275px] h-[275px] sm:w-[200px] sm:h-[200px] rounded-full shadow-2xl mt-[4rem]"
            alt="Selfie"
          />

          <span className="font-light text-[1.5rem]">
            / bran-duhn /
          </span>

          {/* Description */}
          <span className="text-[1.75rem] sm:text-[1.25rem] font-light text-white text-justify max-w-[90%] sm:max-w-full">
            Hi! My name is <span className="font-bold">Brandon</span> and welcome to my personal website. 
            Currently, I am an undergraduate at De La Salle-College of Saint Benilde 
            taking up Bachelor of Science in Information Systems. I am a tech enthusiast in general 
            but my primary interests are on ReactJS, NextJS, and other basic programming applications,
            libraries, and dependencies.
          </span>

          {/* Social Links and Buttons */}
          <div className="flex flex-row justify-between items-center w-full mt-5 flex-wrap gap-5">
            {/* Social Icons (Left on Larger Screens) */}
            <div className="flex flex-row items-center gap-6 sm:justify-start justify-center w-full sm:w-auto">
              <a 
                href="https://facebook.com/bdonl"
                target="_blank"
              >
                <FaFacebook
                  className="text-[3rem] hover:opacity-[50%] duration-200"
                />
              </a>
              <a 
                href="https://github.com/brandonplozano"
                target="_blank"
              >
                <FaGithub
                  className="text-[3rem] hover:opacity-[50%] duration-200"
                />
              </a>
              <a
                href="https://ph.linkedin.com/in/brandon-lozano-3b00621b4"
                target="_blank"
              >
                <FaLinkedin
                  className="text-[3rem] hover:opacity-[50%] duration-200"
                />
              </a>
            </div>

            {/* Buttons (Right on Larger Screens, Centered on Small Screens) */}
            <div className="flex flex-col gap-5 items-center sm:items-end w-full sm:w-auto">
              <Link 
                target="_blank" 
                href="https://drive.google.com/drive/folders/1Q9IK_M3Uno1hnRaM5Hsi-192SKWu5qm0?usp=sharing"
              >
                <button 
                  className="p-2 w-[350px] h-[75px] rounded-full hover:opacity-[80%] shadow-xl transition hover:-translate-y-1 duration-700 bg-white"
                >
                  <h1 
                    className="text-[1.5rem] text-gray-800 font-bold flex justify-center items-center gap-2"
                  >
                    DOWNLOAD RESUME
                    <ImDownload3 />
                  </h1>
                </button>
              </Link>

              <Link href="/about">
                <button 
                  className="p-2 w-[350px] h-[75px] rounded-full hover:opacity-[80%] shadow-xl transition hover:-translate-y-1 duration-700 bg-white"
                >
                  <h1 
                    className="text-[1.5rem] text-gray-800 font-bold flex justify-center items-center gap-2"
                  >
                    Learn more
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

