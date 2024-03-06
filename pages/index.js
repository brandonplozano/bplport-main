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
    <div className={`min-h-screen flex flex-col p-6 items-center bg-[#262626]`}>
      <div className='w-[1200px]'>
        <div className={`flex flex-row gap-1 text-white text-[3rem] mr-auto`}>
          <div className='font-bold'>BRANDON</div>
          <div className='font-light'>LOZANO</div>
        </div>

        <div 
          className={`flex flex-col ml-auto mr-auto 
           text-[3rem] text-white font-normal py-2 gap-5`}
        >
          <Image
            src={selfie2}
            className="object-cover max-w-[275px] max-h-[275px] rounded-full shadow-2xl mt-[4rem] ml-auto mr-auto "
          />
          <span className='font-light ml-auto mr-auto '>
            / bran-duhn /
          </span>
          <span className={`text-[1.75rem] font-light text-white text-justify`}>
            Hi! My name is <span className='font-bold'>Brandon</span> and welcome to my personal website. 
            Currently, I am an undergraduate at De La Salle-College of Saint Benilde 
            taking up Bachelor of Science in Information Systems. I am a tech enthusiast in general 
            but my primary interests are on ReactJS, NextJS, and other basic programming applications,
            libraries, and dependencies.
          </span>
          <div className='flex flex-row'>
            <div className='flex flex-row items-center mr-auto gap-12'>
              <a 
                href="https://facebook.com/bdonl"
                target="_blank"
              >
                <FaFacebook
                  className='text-[3rem] hover:opacity-[50%] duration-200'
                />
              </a>
              <a 
                href="https://github.com/brandonplozano"
                target="_blank"
              >
                <FaGithub
                  className='text-[3rem] hover:opacity-[50%] duration-200'
                />
              </a>
              <a
                href="https://ph.linkedin.com/in/brandon-lozano-3b00621b4"
                target="_blank"
              >
                <FaLinkedin
                  className='text-[3rem] hover:opacity-[50%] duration-200'
                />
              </a>
            </div>

            <div className='flex flex-col ml-auto gap-5'>
            <Link target="_blank" href="https://drive.google.com/drive/folders/1Q9IK_M3Uno1hnRaM5Hsi-192SKWu5qm0?usp=sharing">
                <button className='p-2 w-[350px] h-[75px] 
                rounded-full hover:opacity-[80%] shadow-xl
                transition hover:-translate-y-1 duration-700 bg-white'
                >
                  <h1 
                  className={`${roboto.className} text-[1.5rem] uppercase text-gray-800 
                    font-normal flex flex-row gap-4 items-center justify-center`}
                  >
                    <span className='font-bold'>
                      Download Resume
                    </span>
                    <ImDownload3/>
                  </h1>
                </button>
              </Link>

              <Link href="/about">
                <button className='p-2 w-[350px] h-[75px] 
                rounded-full hover:opacity-[80%] shadow-xl
                transition hover:-translate-y-1 duration-700 bg-white'
                >
                  <h1 
                  className={`${roboto.className} text-[1.5rem] uppercase text-gray-800 
                    font-normal flex flex-row gap-4 items-center justify-center`}
                  >
                    <span className='font-bold'>
                      Dive In
                    </span>
                    <ImDownload3/>
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
