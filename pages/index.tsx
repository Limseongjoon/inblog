import CustomImage from '../components/CustomImage';
import Header from '../components/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <Header />
      <div>
        <div className="flex flex-col items-center bg-[#F4F4F4] px-6 lg:px-12">
          <div className="flex flex-col items-center w-screen">
            <div className="h-32 md:h-44" />
            <div className="font-galano text-4xl md:text-6xl lg:text-7xl">Build your <span className="text-[#10A42A]">Blog</span></div>
            <div className="font-galano text-4xl md:text-6xl lg:text-7xl -mt-4 md:-mt-8">on your own Website</div>
            <div className="h-3" />
            <div className="md:text-xl lg:text-2xl text-center">Inblog provides you SEO-friendly blog infra<br></br>
            to convert more leads into customers.</div>
            <div className="h-14"></div>
            <div className="flex gap-6 md:gap-8 lg:gap-10">
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-4 sm:w-5 h-3 sm:h-4 mr-2" />
                <span className="font-semibold text-sm sm:text-lg"> 1 Minute</span>
              </div>
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-4 sm:w-5 h-3 sm:h-4 mr-2" />
                <span className="font-semibold text-sm sm:text-lg"> No credit card required</span>
              </div>
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-4 sm:w-5 h-3 sm:h-4 mr-2" />
              <span className="font-semibold text-sm sm:text-lg"> Hassle-free</span>
              </div>
            </div>
            <div className="h-8" />
            <Link
              href="/#"
              className="font-light text-tiny md:text-base lg:text-xl text-white bg-black px-16 py-2 rounded-full"
              >
              Get Started for Free
            </Link>
            <div className="h-14 sm:h-16" />
            <CustomImage src="/images/searchconsole.gif" className="w-10/12 md:w-9/12 lg:w-2/3 xl:w-1/2" />
            <div className="h-8 sm:h-12 md:h-14 lg:h-48" />
            <CustomImage src="/images/blogexample.png" className="w-10/12 md:w-5/6 lg:w-4/6 rounded-2xl shadow-2xl" />
          </div>
          <div className="h-56" />
          <div className="lg:px-48">
            <div className="self-start">
              <div className="text-[#10A42A] font-medium">For Your Business</div>
              <div className="h-4" />
              <div className="font-galano text-2xl md:text-3xl lg:text-4xl">Blog-building a Must?</div>
              <div className="h-4" />
              <div className="text-gray-400 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</div>
            </div>
            <div className="h-16" />
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
              <div className="w-full rounded-md text-black px-12 md:px-14 py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Gain More Leads</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light">B2B marketers running a blog gain 67% more leads than those who do not run a business blog.</div>
                <div className="h-4" />
                <Link
                href="/#"
                className="text-[#FF247D]"
                >
                Read More →
              </Link>
              </div>
              <div className="w-full rounded-md text-black px-12 md:px-14 py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Higher Close Rate</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light">SEO leads have a 14.6% close rate compared to only 1.7% for outbound leads.</div>
                <div className="h-4" />
                <Link
                href="/#"
                className="text-[#FF247D]"
                >
                Read More →
              </Link>
              </div>
            </div>
            <div className="h-4" />
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
            <div className="w-full rounded-md text-black px-12 md:px-14 py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Higher Organic CTR</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light">Organic search offers higher click-through rates than paid search ads. (27.6% CTR for organic vs 3.17% CTR for paid)</div>
                <div className="h-4" />
                <Link
                href="/#"
                className="text-[#FF247D]"
                >
                Read More →
              </Link>
              </div>
              <div className="w-full rounded-md text-black px-12 md:px-14  py-8 border-gray-200 border-solid border-2 shadow-md bg-white">
                <div className="font-SourceSerifPro text-2xl md:text-3xl lg:text-3xl">Critical Sales Funnel</div>
                <div className="h-4" />
                <div className="text-gray-500 font-light">55% of B2B marketers consider articles as the most successful type of content for moving possible clients through the sales funnel.</div>
                <div className="h-4" />
                <Link
                href="/#"
                className="text-[#FF247D]"
                >
                Read More →
              </Link>
              </div>
            </div>
            <div className="h-48" />
            <div className="self-start">
              <div className="text-[#10A42A] font-medium">To Start a Blog</div>
              <div className="h-4" />
              <div className="font-galano text-2xl md:text-3xl lg:text-4xl">No-Time to Focus on the Contents</div>
              <div className="h-4" />
              <div className="text-gray-400 font-light">There are too many abstacles ahead to start and build a blog. <br></br>You are not a builder. Do not waste your precious time. </div>
              <div className="h-12" />
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-48 w-full text-black px-4 py-20 justify-center">
                <div className="flex lg:flex-col items-center gap-4">
                  <div className="w-48 md:w-64 h-48 md:h-64 bg-gray-300"></div>
                  <div className="text-lg font-semibold lg:text-center">High Cost in<br></br>Blog Building</div>
                </div>
                <div className="flex lg:flex-col items-center gap-4">
                  <div className="w-48 md:w-64 h-48 md:h-64 bg-gray-300"></div>
                  <div className="text-lg font-semibold lg:text-center">Not Straight Forward<br></br>to Contents Marketing</div>
                </div>
                <div className="flex lg:flex-col items-center gap-4">
                  <div className="w-48 md:w-64 h-48 md:h-64 bg-gray-300"></div>
                  <div className="text-lg font-semibold lg:text-center">Difficulties in Linking<br></br>Business Analytics</div>
                </div>
              </div>
            </div> 
          </div> 
          <div className="h-36" />
          <div className="h-48" />
          <div className="flex flex-col items-center w-screen">
              <div className="font-galano text-xl md:text-3xl lg:text-5xl">Focus Your Energy on What Really Matters</div>
              <div className="font-galano text-xl md:text-3xl lg:text-5xl">Let us Handle the Hassles</div>
          </div>
        </div>
        <div className="h-48" />
        <div className="w-full bg-black text-white px-6 lg:px-12">
          <div className="h-4"></div>
          <div className="flex">
            <div className="flex text-sm lg:text-tiny font-regular">
              Copyright © 2023 Inblog. All rights reserved.  | &nbsp;
              <Link
                href="https://www.freeprivacypolicy.com/live/0082aab2-a8ea-437e-b0e8-8aafebc0514b"
                target="_blank"
                className=""
              >
                Terms & Conditions  | &nbsp;
              </Link>
              <Link
                href="https://www.freeprivacypolicy.com/live/80f4aeef-fc29-48ee-80e5-d6531bd2c4bf"
                target="_blank"
                className=""
              >
                Privacy Policy
              </Link>
            </div>
            <div className="grow"></div>
            <div className="flex">
              <Link href="/">
                <CustomImage src="/images/twitter_logo.png" className="h-4 w-auto mt-1" />
              </Link>
            </div>
          </div>
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;