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
              src= "/images/inarihan.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://ynahka.github.io/inarihan/index.html">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'Inarihan Farm Resort'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'A static website used for advertising and book an appointment from the resort'}
              </p>
          </div>
        </div>
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/oma.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://www.canva.com/design/DAGR7LGAUpI/aAG0wmgZdOYU8T-nMyaf_g/view?utm_content=DAGR7LGAUpI&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'E-commerce Agri-Market'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'A system for local farmers that enable them to market their localized produce and connect to a wide range of buyers.'}
              </p>
          </div>
        </div>
                <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/contact.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://ynahka.github.io/website-3/">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'Portfolio Design 2'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'Another portfolio design'}
              </p>
          </div>
        </div>
         <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/me-blog.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://3b80-2404-3c00-353f-be40-a8c7-bde8-da7f-371.ngrok-free.app/first-portfolio/">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'My Portfolio Design'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'My 2nd year college blog using PHP and SMTP'}
              </p>
          </div>
        </div>
         <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/nstp-blog.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://aguilar-blogsite.odoo.com/">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'NSTP Blog Internship'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'Blog for everyday shift in the NSTP office, doing troubleshooting and coding was our main tasks.'}
              </p>
          </div>
        </div>
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/tracking-system.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://www.canva.com/design/DAGR8s7Lc20/R9LJ_wXkrp9maxpACt06iw/view?utm_content=DAGR8s7Lc20&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'Tracking System'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'A centralized tracking system for student serial numbers and communication.'}
              </p>
          </div>
        </div>
        {/* <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/power-solution.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://0387-2404-3c00-353f-be40-1ce1-fa66-5f1d-fd4e.ngrok-free.app/power-solution/">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'Power Digital Solution'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'A system for digital solution project by my client'}
              </p>
          </div>
        </div> */}
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/poster.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://poster-making.my.canva.site/">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'Research Poster Design'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'A project based that showcase the research paper of my client.'}
              </p>
          </div>
        </div>
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src= "/images/fidelity.png"
              height={737}
              width={1153}
              alt=""
              className='h-full w-full group-hover:scale-110 transition-all duration-300'
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
              <Link href="https://drive.google.com/file/d/1fsF-uILHa4iGS1U-nSzJau5pAJ3bKcU1/view?usp=sharing">
                <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
                  {'High Fidelity Prototype'}
                </p>
              </Link>

              <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
                {'A proposed design for the development of sales report management system'}
              </p>
          </div>
        </div>
            
      </div>
    </div>
  );
};

export default page;