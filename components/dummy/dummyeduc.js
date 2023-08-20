import { FaGraduationCap } from "react-icons/fa"
import { FaUniversity } from "react-icons/fa"

export default function dummyeduc() {
  return (
    [
      {
        "icon": <FaGraduationCap size={125}/>,
        "school": "San Beda University",
        "year": "(2017-2019)",
        "education": "Senior High School"
      },
      {
        "icon": <FaUniversity size={125} />,
        "school": "Dela Salle College of Saint Benilde",
        "year": "(2019-2023)",
        "education": "Bachelor's Degree - Information Systems"
      }
    ]
  )
}

