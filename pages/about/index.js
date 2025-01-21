import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import EduCard from "@/components/EduCard";
import DesignCard from "@/components/DesignCard.js";
import AffiliationCard from "@/components/AffiliationCard.js";
import dummyeduc from "@/components/dummy/dummyeduc.js";
import dummydesign from "@/components/dummy/dummydesign.js";
import dummyaffiliation from "@/components/dummy/dummyaffiliation.js";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function index() {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen flex flex-col gap-[5rem] justify-center bg-[#262626]">
        <div className="text-white text-[2rem] sm:text-[3rem] md:text-[4rem] uppercase flex items-center justify-center gap-3 font-bold mt-[1rem]">
          Educational Attainment
        </div>

        <div className="flex flex-col ml-auto mr-auto items-center sm:w-[800px] md:w-[900px] lg:w-[1200px] text-white">
          <EduCard eduitems={dummyeduc()} />
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-[1rem] bg-white">
        <div className="text-[#262626] text-[2rem] sm:text-[3rem] md:text-[4rem] uppercase flex font-bold ml-auto mr-auto mt-[3rem]">
          Design Process
        </div>
        <div className="flex flex-wrap gap-[2rem] ml-auto mr-auto items-center justify-center w-full md:w-[1200px] text-white font-medium">
          <DesignCard designitems={dummydesign()} />
        </div>
      </div>

      <div className="min-h-screen flex flex-col gap-[1rem] bg-[#262626]">
        <div className="text-white text-[3rem] uppercase flex font-bold ml-auto mr-auto mt-[3rem]">
          Affiliation
        </div>
        <div className="flex flex-wrap gap-[2rem] ml-auto mr-auto items-center justify-center w-full md:w-[1200px] px-4 sm:px-6 md:px-8 text-[#262626] font-medium">
          <AffiliationCard affiliationitems={dummyaffiliation()} />
        </div>
      </div>
    </Layout>
  );
}
