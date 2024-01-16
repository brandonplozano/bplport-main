import Layout from "@/components/Layout"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import one from "../../public/images/mytpass/1.png"
import two from "../../public/images/mytpass/2.png"
import three from "../../public/images/mytpass/3.png"
import four from "../../public/images/mytpass/4.png"
import five from "../../public/images/mytpass/5.png"
import six from "../..//public/images/mytpass/6.png"

export default function index() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center mt-auto mb-auto bg-gray-100">
        <div className="flex flex-col ml-auto mr-auto items-center justify-center w-[1200px] text-white gap-6 mt-[10rem]">
          <div className={`p-6 bg-[#262626] text-white text-[2rem] w-[90%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}>[CAPSTONE] MyT-Pass: Web Based Training Record and Document Management System for Manufacturing Businesses in the Philippines</div>
          <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg">MyT-Pass is a Web-Based Training Record and Document Management System designed for the Manufacturing Industry's Employees, Owners, and Human Resources. The Capstone's Main Objective is to create an Online platform for Manufacturing businesses' employees, human resources, and business owners to keep track of their training records and certifications, with the Specific Objectives of (1) Providing a Digital Repository for the Employees and Human Resources Users to Manage Training Records and Certificates. (2) Providing a Notification System to Monitor the Expiring Training Records and Certificates. (3) Providing Analytical Reports to Monitor the Scheduled Training Records. </div>
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
              <div></div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={one}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={two}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={three}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={four}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={five}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
              />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border border-black b-1">
              <Image
                src={six}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-[3rem] w-screen border b-2-black"></div>

        <div className="flex flex-col ml-auto mr-auto items-center justify-center w-[1200px] text-white gap-6 mt-[3rem] mt-[1.5rem]">
          <div className={`p-6 bg-[#262626] text-white text-[2rem] w-[90%] font-medium text-center rounded-lg shadow-xl ${styles.customGradient}`}>[PROJECT] Negociantes: An Online Marketplace</div>
          <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg mb-[1.5rem]">A place where small scale sellers can easily showcase their products, that way people who lost their jobs because of the pandemic can still have some sort of place to go to, or somewhere where they can generate some income. With an online market, buyers can easily canvas products and services they wish to have without the hassle of going out amidst the pandemic, they will have the privilege of browsing through different products and services at the comfort of their own home.</div>
        </div>
        <div className="p-6 bg-[#262626] text-white text-[1.3rem] text-justify rounded-lg mb-[3rem]">
            <div className="flex flex-row items-center justify-center gap-[5rem]">
              <div>Technologies Used:</div>
              <div className="flex flex-col">
                <div>- Kotlin</div>
                <div>- Android Studio</div>
              </div>
              <div></div>
            </div>
          </div>
      </div>
    </Layout>
  )
}
