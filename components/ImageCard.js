import ImageModal from "@/components/modal/imageModal"
import Image from "next/image"

export default function ImageCard({image, onClick, width, w, h}) {

    return (
        <div className={`flex items-center justify-center bg-white ${w ? `w-[${w}]` : "w-[400px]"} ${h ? `h-[${h}]` : "h-[250px]"} border border-black b-1`}>
            <Image
                src={image}
                className="p-2 transition hover:scale-150 duration-700 duration-500"
                onClick={onClick}
                width={width}
            />
        </div>
    )
}
  