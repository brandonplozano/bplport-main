export default function EduCard({eduitems}) {
  return (
    <div className="p-4 ml-auto mr-auto flex flex-col gap-[6rem]">
        {eduitems.map((item, idx) => {
            return (
                <div className="flex flex-row gap-[2rem] items-center" key={idx}>
                    <div className="p-7 border-[5px] rounded-full">
                        {item.icon}
                    </div>
                    
                    <div className="flex flex-col capitalize">
                        <div className="text-[2.5rem]">{item.school} {" "} {item.year}</div>
                        <div className="text-[2rem]">{item.education}</div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
