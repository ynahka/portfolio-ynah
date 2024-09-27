// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[5px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            {experiences.map(experience => (
              <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="w-auto overflow-hidden">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                  </div>

                  <div className="p-2 sm:p-4 flex flex-col items-center gap-x-8 px-3 py-2 ">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase pt-3">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {experience.company}
                      </p>
                      <p className="text-xs py-1 sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                      </p>
                    </div>
                  </div>
              </GlowCard>
            ))}
        </div>
    </div>
  );
};

export default Experience;