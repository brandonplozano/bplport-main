export default function EduCard({ eduitems }) {
    return (
      <div className="p-4 ml-auto mr-auto flex flex-col gap-[6rem]">
        {eduitems.map((item, idx) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-[2rem] items-center md:gap-[3rem] md:px-6"
              key={idx}
            >
              <div className="p-7 border-[5px] rounded-full mb-4 md:mb-0">
                {item.icon}
              </div>
  
              <div className="flex flex-col text-center md:text-left capitalize">
                <div className="text-[2.5rem] md:text-[3rem]">{item.school} {" "} {item.year}</div>
                <div className="text-[2rem] md:text-[2.5rem]">{item.education}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  