import CustomImage from '../components/CustomImage';
import Header from '../components/Header';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen items-center pt-14 md:pt-16 lg:pt-20">
        <div>
          <CustomImage src="/images/pharos_main.png" className="w-screen lg:px-12 " />
          <div className="h-8 lg:h-10" />
          <div className="px-6 lg:px-12">
            <div className="flex items-baseline">
              <div className="font-hrot text-lg lg:text-2xl pr-2 lg:pr-4">PHAROS</div>
              <div className="text-xs lg:text-sm">2022</div>
            </div>
            <div className="h-3" />
            <div className="font-light">PHAROS Co., Ltd. consulting firm that started in 2015. It consists of people who are deeply interested in the impact on our culture and society through our responsible design. design consulting firm.</div>
            <div className="h-6" />
            <div className="font-hrot text-tiny pr-2 lg:pr-4 underline">See More →</div>
            <div className="h-1" />
            <Link
              href="http://3.35.83.107/pharosapp/templates/pharosapp/start.html"
              target="_blank"
              className="font-hrot text-tiny pr-2 lg:pr-4 underline"
            >
              Digital Booth →
            </Link>
            <div className="h-20" />
            <div className="z-1 divide-y divide-black opacity-40">
              <div></div>
              <div></div>
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