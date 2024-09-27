// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 mt:12 ">
        <div className="order-2 lg:order-2 sm:pt-7 lg:col-span-2">
          <p className="font-extrabold mb-5 text-[#16f2b3] text-xl uppercase">
            About Me
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex order-1 lg:order-1 lg:col-span-1 pb-5">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Ynah"
            className="rounded-lg transition-transform duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;