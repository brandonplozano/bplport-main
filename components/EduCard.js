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
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {item.school} {item.year}
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
                {item.education}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
