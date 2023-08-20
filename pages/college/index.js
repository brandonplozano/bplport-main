import Layout from "@/components/Layout"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import one from "../../public/images/csb.jpg"
import two from "../../public/images/mates.jpg"

export default function index() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen justify-center items-center mt-auto mb-auto mt-[10rem] bg-gray-100">
        <div className="flex flex-col ml-auto mr-auto items-center justify-center w-[1200px] text-white gap-6">
          <div className={`p-6 bg-[#262626] text-white text-[3rem] w-[90%] font-medium text-center mt-[10rem] rounded-lg shadow-xl ${styles.customGradient}`}>De La Salle - College of Saint Benilde</div>
          <div className="flex items-center justify-center p-5 border border-black b-1 bg-white">
            <Image
              src={one}
              className="w-[500px]"
            />
          </div>
          <div className="p-4 bg-[#262626] text-white text-[1.5rem] w-[90%] font-medium text-center rounded-lg">About</div>
          <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg">De La Salle–College of Saint Benilde, also known as Benilde and abbreviated DLS–CSB   or simply CSB, is a private, Catholic research higher education institution established by De La Salle Brothers located in Malate district of Manila, Philippines. It operates four campuses all of which are located within the vicinity of Malate. The college is a member institution of De La Salle Philippines (DLSP), a network of 16 Catholic Lasallian institutions. DLS–CSB is also a member of a 350-year-old international network of over 1,100 Lasallian educational institutions globally established by the De La Salle Christian Brothers in 80 countries. 
          <br/><br/>- "The International Lasallian Mission". La Salle. Retrieved August 17, 2023.
          </div>
        

        <div className="flex flex-row justify-center items-center w-[1200px] gap-4 mt-[1.5rem] mb-[2rem]">
          <div className="flex flex-col gap-4">
            <div className="p-6 bg-[#262626] text-white text-[1.1rem] w-[600px] text-justify rounded-lg">As a graduating Information Systems student from the College of Saint Benilde, I am both excited and grateful for the transformative journey I've undertaken. Throughout my time at CSB, I have gained a comprehensive understanding of the intricate interplay between technology and business processes. The curriculum's emphasis on combining technical prowess with strategic thinking has equipped me with the skills to analyze complex data, design efficient information systems, and contribute meaningfully to organizational growth. </div>
            <div className="p-6 bg-[#262626] text-white text-[1.1rem] w-[600px] text-justify rounded-lg">Collaborating with diverse peers and engaging in real-world projects has nurtured my ability to work seamlessly in cross-functional teams, mirroring the dynamic nature of the professional world. With the guidance of dedicated faculty and exposure to industry trends, I am primed to embark on a career where I can harness the power of technology to drive innovation and address contemporary challenges in the ever-evolving landscape of information systems.</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-6 bg-[#262626] text-white text-[1.1rem] w-[600px] text-justify rounded-lg">My journey throughout my stay in CSB has been a remarkable chapter of personal and intellectual growth. As I reflect on my entire stay, I am flooded with memories of challenging coursework, inspiring interactions, and transformative experiences. The institution's emphasis on holistic development has sculpted me into a well-rounded individual, instilling in me a profound sense of purpose and commitment to excellence. </div>
            <div className="p-6 bg-[#262626] text-white text-[1.1rem] w-[600px] text-justify rounded-lg">The Benildean teachings have ingrained in me the importance of not only acquiring knowledge but also using it to uplift others and make a positive impact on society. Moving forward, I aim to preserve the values I've imbibed by staying curious, embracing diversity, and continuously seeking opportunities for self-improvement. By maintaining an open mind and a willingness to adapt, I can ensure that the spirit of innovation, collaboration, and compassion that defines a Benildean remains alive in my endeavors beyond the college walls. Just as the institution has nurtured my potential, I am determined to pay it forward by embodying the principles I've learned and contributing meaningfully to the world around me.</div>
          </div>
        </div>

        <div className="p-4 bg-[#262626] text-white text-[1.5rem] w-[90%] font-medium text-center rounded-lg">Reflections</div>

        <div className="flex items-center justify-center p-5 border border-black b-1 bg-white">
            <Image
              src={two}
              className="w-[500px]"
            />
          </div>

          <div className="p-6 bg-[#262626] text-white text-[1.3rem] w-[90%] text-justify rounded-lg mb-[2rem]">The memories that stand out the most are the countless interactions I've had with my past classmates, capstone groupmates, and the friends I made along the way. These connections have been the heart and soul of my college experience, shaping me in ways I could never have foreseen. Collaborating with diverse individuals in my capstone project and past projects exposed me to a spectrum of perspectives and approaches, pushing me to think creatively and work harmoniously as a team. The late-night brainstorming sessions, the shared triumphs, and even the challenges we faced together have all contributed to my personal and professional growth. Beyond the projects, my interactions with classmates in various courses have broadened my horizons, allowing me to appreciate the richness of different cultures and backgrounds. These interactions have taught me patience, empathy, and the art of effective communication, skills that I know will serve me well in any future endeavor. As I step away from the academic realm, I carry with me the lessons learned from these interactions – the importance of cooperation, the value of diverse perspectives, and the significance of forging meaningful connections. These memories will forever remind me that my journey was not just about the lessons in textbooks, but also about the indelible mark left by the people I've shared this remarkable journey with.</div>

        </div>
      </div>
    </Layout>
  )
}
