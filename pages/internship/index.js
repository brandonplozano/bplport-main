import Layout from "@/components/Layout"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import one from "../../public/images/office/8.jpg"
import two from "../../public/images/office/13.jpg"
import three from "../../public/images/sample.png"
import four from "../../public/images/office/1.jpg"
import five from "../../public/images/office/9.jpg"
import six from "../../public/images/office/4.jpg"
import seven from "../../public/images/office/12.jpg"

export default function index() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center mt-auto mb-auto bg-gray-100">
        <div className="flex flex-col ml-auto mr-auto items-center justify-center w-[1200px] text-white gap-6 mt-[10rem]">
          <div className={`p-6 bg-[#262626] text-white text-[3rem] w-[75%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}>Achieve Without Borders</div>
          <div className="p-6 bg-[#262626] text-white text-[1.5rem] w-[75%] text-justify rounded-lg">Achieve Without Borders is an an IT solutions company committed to help organizations achieve their full business potential by leveraging best business practices and information technology. </div>
          <div className="flex flex-wrap">
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={one}
                className="p-2 transition hover:scale-125 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={two}
                className="p-[3.5rem] transition hover:scale-125 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={four}
                className="p-[3.5rem] transition hover:scale-125 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={five}
                className="p-2 transition hover:scale-125 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={six}
                className="p-2 transition hover:scale-125 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={seven}
                className="p-[3.5rem] transition hover:scale-125 duration-700 duration-500"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#262626] text-white text-[1.5rem] w-[900px] font-medium text-center mt-[3rem] rounded-lg">Sample Work</div>

        <div className="flex flex-row items-center text-center justify-center gap-2 text-black mt-[3rem]">
          <div className="p-4">
            <Image
              src={three}
              className="w-[500px] transition hover:scale-150 duration-700 duration-500"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mb-[2rem]">
            <div className="p-6 bg-[#262626] text-white text-[1.2rem] w-[500px] rounded-lg">My role with my internship in Achieve Without Borders (AWB) was a Quality Assurance Engineer or better known as Quality Assurance Intern.</div>
            <div className="p-6 bg-[#262626] text-white text-[1.2rem] w-[500px] rounded-lg">With an unwavering commitment to maintaining the highest standards of product excellence, I immersed myself in assuring the good quality specifically the websites functionalities and appearance in this internship.</div>
            <div className="p-6 bg-[#262626] text-white text-[1.2rem] w-[500px] rounded-lg">The photo on the left is an example of how we made track of the test cases and scenarios that we made for specific requirements from the clients.</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
