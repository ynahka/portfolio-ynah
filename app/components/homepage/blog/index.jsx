// @flow strict
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';


function Blog({ blogs }) {

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/4 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[5px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
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
                {''}
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
                {''}
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
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;