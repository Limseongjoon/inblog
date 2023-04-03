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
            <div className="h-44" />
            <div className="font-galano text-4xl md:text-6xl lg:text-7xl">Build your <span className="text-[#10A42A]">Blog</span></div>
            <div className="font-galano text-4xl md:text-6xl lg:text-7xl -mt-8">on your own Website</div>
            <div className="h-3" />
            <div className="md:text-xl lg:text-2xl text-center">Inblog provides you SEO-friendly blog infra<br></br>
            to convert more leads into customers.</div>
            <div className="h-14"></div>
            <div className="flex gap-6 md:gap-8 lg:gap-10">
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-5 h-4 mr-2" />
                <span className="font-semibold text-lg"> 1 Minute</span>
              </div>
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-5 h-4 mr-2" />
                <span className="font-semibold text-lg"> No credit card required</span>
              </div>
              <div className="flex items-center">
                <CustomImage src="/images/check.png" className="w-5 h-4 mr-2" />
              <span className="font-semibold text-lg"> Hassle-free</span>
              </div>
            </div>
            <div className="h-8" />
            <Link
              href="/#"
              className="font-normal text-tiny md:text-base lg:text-xl text-white bg-black px-28 py-3 rounded-full"
              >
              Get Started for Free
            </Link>
            <div className="h-16" />
            <CustomImage src="/images/searchconsole.gif" className="w-10/12 md:w-8/12 lg:w-1/2" />
            <div className="h-24" />
            <CustomImage src="/images/blogexample.png" className="w-4/6 rounded-lg shadow-2xl" />
          </div>
          <div className="h-48" />
          <div className="self-start">
            <div className="text-[#FF247D] font-bold">Is building a Blog a Must?</div>
            <div className="h-6" />
            <div className="font-galano text-2xl md:text-3xl lg:text-4xl">Is building a Blog a Must?</div>
            <div className="h-4" />
            <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</div>
          </div>
          <div className="h-16" />
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
            <div className="w-full rounded-md text-black px-10 py-6 border-gray-300 border-solid border-2 shadow-md bg-white">
              <div className="text-xl md:text-2xl lg:text-3xl">Gain More Leads</div>
              <div className="h-4" />
              <div className="text-gray-500 font-light">B2B marketers running a blog gain<br></br>67% more leads than those who do not.</div>
              <div className="h-4" />
              <Link
              href="/#"
              className="text-[#FF247D]"
              >
              Read More →
            </Link>
            </div>
            <div className="w-full rounded-md text-black px-10 py-6 border-gray-300 border-solid border-2 shadow-md bg-white">
              <div className="text-xl md:text-2xl lg:text-3xl">Gain More Leads</div>
              <div className="h-4" />
              <div className="text-gray-500 font-light">B2B marketers running a blog gain<br></br>67% more leads than those who do not.</div>
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
          <div className="w-full rounded-md text-black px-10 py-6 border-gray-300 border-solid border-2 shadow-md bg-white">
              <div className="text-xl md:text-2xl lg:text-3xl">Higher Close Rate</div>
              <div className="h-4" />
              <div className="text-gray-500 font-light">SEO leads have a 14.6% close rate<br></br>compared to only 1.7% for outbound leads.</div>
              <div className="h-4" />
              <Link
              href="/#"
              className="text-[#FF247D]"
              >
              Read More →
            </Link>
            </div>
            <div className="w-full rounded-md text-black px-10 py-6 border-gray-300 border-solid border-2 shadow-md bg-white">
              <div className="text-xl md:text-2xl lg:text-3xl">Critical Sales Funnel</div>
              <div className="h-4" />
              <div className="text-gray-500 font-light">55% of B2B <br></br>67% more leads than those who do not.</div>
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
        <div className="flex flex-col items-center w-screen">
            <div className="font-galano text-xl md:text-3xl lg:text-5xl">Focus Your Energy on What Really Matters.</div>
            <div className="font-galano text-xl md:text-3xl lg:text-5xl">Let us Handle the Hassles.</div>
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