import CustomImage from '../components/CustomImage';
import Header from '../components/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center">
        <div className="h-36 lg:h-40" />
          <div className="font-bold text-3xl lg:text-4xl">
            Contact us
          </div>
          <div className="h-4" />
          <div className="hidden sm:flex text-center font-light md:text-lg">
          Please feel free to contact me with any questions you may have.<br></br>
          I will get back to you as soon as possible.
          </div>
          <div className="sm:hidden text-center font-light md:text-lg">
          Please feel free to contact me<br></br> with any questions you may have.<br></br>
          I will get back to you as soon as possible.
          </div>
        <div className="h-10" />
        <div className="w-10/12 lg:w-8/12 bg-white px-4 lg:px-16">
          <div className="lg:h-4"></div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row lg:gap-8 w-full">
              <div className="w-full">
              <span className="mb-1 pl-3 text-4xs lg:text-sm leading-[160%] font-medium">
                이름 *
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-md bg-[#F4F6FA] text-black px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 placeholder:opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-5xs px-2 text-black"
                  placeholder="Full Name"
                  type="name"
                  name="name"
                />
              </div>
            </div>
            <div className="w-full">
              <span className="mb-1 pl-3 text-4xs leading-[160%] font-medium">
                메일 주소 *
              </span>
              <div className="w-full flex flex-row justify-between items-center rounded-md bg-[#F4F6FA] px-2 py-3">
                <input
                  className="w-full placeholder:italic placeholder:text-gray-200 placeholder:opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-5xs px-2 text-black"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <span className="mb-1 pl-5 text-4xs leading-[160%] font-medium">
              문의 및 전달내용
            </span>
            <div className="w-full rounded-lg bg-[#F4F6FA] text-black px-2 py-3">
              <textarea
                className="w-full h-32 placeholder:italic placeholder:text-gray-200 placeholder:opacity-40 bg-[#F4F6FA] border-0 outline-0 font-medium text-5xs px-2 text-black"
                placeholder="Write your message here"
                name="message"
              />
            </div>
          </div>
          <div className="h-8"></div>
          <div className="self-center">
            <b
              className="font-normal text-tiny md:text-base lg:text-lg text-white bg-black px-12 py-2 rounded-md"
            >
              Submit
            </b>
          </div>
        </div>
      </div>
        <div className="grow" />
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
