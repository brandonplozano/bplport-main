import Card from "./Card";
import styles from "@/styles/Home.module.css";

export default function AffiliationCard({ affiliationitems }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem] px-4 sm:px-6 md:px-8 w-full">
      {affiliationitems.map((item, idx) => {
        return (
          <Card
            className={`w-full h-[500px] flex flex-col py-6 gap-2 transition hover:-translate-y-[5px] duration-700 duration-500 
          ${styles.customHover}`}
            key={idx}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="mr-auto ml-auto">{item.icon}</div>
              <div className="font-medium text-[1.75rem] ml-auto mr-auto text-center">
                {item.title}
              </div>
            </div>
            <div className="font-light ml-auto mr-auto text-justify px-6 text-[1.2rem]">
              {item.description}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
