import { FaLightbulb } from "react-icons/fa"
import { FaBrain } from "react-icons/fa"
import { FaList } from "react-icons/fa"
import { FaRobot } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
import { FaRedo } from "react-icons/fa"

export default function dummydesign() {
  return (
    [
      {
        "icon": <FaLightbulb size={75}/>,
        "title": "Research",
        "description": "I will research on the certain topic or subject that I need to develop on. This will help me connect with the client's expectations.",
      },
      {
        "icon": <FaBrain size={75}/>,
        "title": "Ideate",
        "description": "I will provide  solutions about the topic at hand. This will be in the process of generating unfiltered information and narrowing it down to the most important parts."
      },
      {
        "icon": <FaList size={75}/>,
        "title": "Validate",
        "description": "Validating these ideas by coordinating with the client or with my colleagues will positively impact the entire process by saving time, money, and effort at an early stage.",
      },
      {
        "icon": <FaRobot size={75}/>,
        "title": "Prototype",
        "description": "Make the initial design or application for the project, this is usually done in the form of FIGMA, or wireframes.",
      },
      {
        "icon": <FaCode size={75}/>,
        "title": "Develop",
        "description": "After gathering all the important points of the project, I'll now start to develop the main project with the prototype as a basis.",
      },
      {
        "icon": <FaRedo size={75}/>,
        "title": "Repeat",
        "description": "Along with the development's maintenance, the entire design process is usually just repeated until the person of interest is satisfied with the output.",
      }
    ]
  )
}

