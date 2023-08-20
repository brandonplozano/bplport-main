import { FaLightbulb } from "react-icons/fa"
import { FaBrain } from "react-icons/fa"
import { FaList } from "react-icons/fa"
import { FaRobot } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
import { FaRedo } from "react-icons/fa"
import { TbCircleXFilled } from "react-icons/tb"
import aim from "../../public/images/aim.jpg"
import Image from "next/image"

export default function dummyaffiliation() {
  return (
    [
      {
        "icon": <Image src={aim} width={100} height={100} alt="AIM picture"/>,
        "title": "Association of Information Management",
        "description": "The Association of Information Management (AIM) is the accredited academic organization of the Bachelor of Science in Information Systems program in De La Salle-College of Saint Benilde.",
      },
      {
        "icon": <TbCircleXFilled size={100}/>,
        "title": "N/A",
        "description": "N/A"
      },
      {
        "icon": <TbCircleXFilled size={100}/>,
        "title": "N/A",
        "description": "N/A",
      }
    ]
  )
}

