// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from 'next/image';
import Link from 'next/link';
// import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src={''}
              height={1080}
              width={1920}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://poster-making.my.canva.site/">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'poster making'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'asdasada'}
              </p>
          </div>
        </div>
         
         <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src={''}
              height={1080}
              width={1920}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://poster-making.my.canva.site/bookanize">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'Bookanize'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'asdnasldhalsddalshdals'}
              </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default page;