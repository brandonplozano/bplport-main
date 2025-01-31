import { FaLightbulb } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { TbCircleXFilled } from "react-icons/tb";
import psalogo from "../../public/images/psalogo.webp";
import Image from "next/image";

export default function dummyaffiliation() {
  return [
    {
      icon: <Image src={psalogo} width={100} height={100} alt="PSA logo" />,
      title: "Philippine Statistics Authority",
      description:
        "The Philippine Statistics Authority (PSA) is the central statistical authority of the Philippines. It is responsible for collecting, analyzing, and publishing statistical data related to the country's economy, population, agriculture, and other sectors. The PSA also manages civil registration services, such as birth certificates, marriage certificates, and death certificates.",
    },
    {
      icon: <TbCircleXFilled size={100} />,
      title: "N/A",
      description: "N/A",
    },
    {
      icon: <TbCircleXFilled size={100} />,
      title: "N/A",
      description: "N/A",
    },
  ];
}
