import Card from "./Card"
import styles from '@/styles/Home.module.css'

//icon
//title
//description

export default function DesignCard({designitems}) {
  return (
    <>
        {designitems.map((item, idx) => {
            return (
                <Card className={`w-[300px] h-[375px] flex flex-col py-6 gap-2 transition hover:-translate-y-[5px] duration-700 duration-500 
                ${styles.customGradient} ${styles.customHover}`}
                    key={idx}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="mr-auto ml-auto">{item.icon}</div>
                        <div className="font-medium text-[1.75rem] ml-auto mr-auto">{idx + 1}{". "}{item.title}</div>
                    </div>
                    <div className="font-light ml-auto mr-auto text-justify px-6 text-[1.2rem]">{item.description}</div>
                </Card>
            )
        })}
    </>
  )
}
