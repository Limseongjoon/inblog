import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black w-screen">
      <div className="w-full mx-auto max-w-screen-xl px-4 pt-2 pb-4 md:flex md:justify-between">
        <div className="flex flex-col sm:flex-row">
        <div className="text-xs sm:text-sm text-white sm:text-center">
        <span className="font-semibold">Email </span> <a href="mailto:inblog.io@gmail.com" className="mr-4 hover:underline md:mr-6">inblog.io@gmail.com</a></div>
        <div className="text-xs sm:text-sm text-white sm:text-center"><span className="font-semibold">Copyright </span>© 2023 inblog. All Rights Reserved.</div>
        </div>
        <div className="h-4 sm:hidden"></div>
        <div className="flex flex-row justify-between">
        <ul className="flex flex-wrap items-center text-xs sm:text-sm font-semibold sm:font-medium text-white dark:text-gray-400">
            <li>
              <a href="https://www.freeprivacypolicy.com/live/0082aab2-a8ea-437e-b0e8-8aafebc0514b" className="mr-4 hover:underline md:mr-6">Terms and Conditions</a>
            </li>
            <li>
              <a href="https://www.freeprivacypolicy.com/live/80f4aeef-fc29-48ee-80e5-d6531bd2c4bf" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <Link href="https://twitter.com/inblog_ai">
                <CustomImage
                  src="/images/twitter_logo.png"
                  className="h-4 w-auto hidden sm:flex"
                />
              </Link>
            </li>
        </ul>
        <Link href="https://twitter.com/inblog_ai">
          <CustomImage
            src="/images/twitter_logo.png"
            className="h-4 w-auto sm:hidden"
          />
        </Link>
        </div>
      </div>
   </div>
  );
};

export default Footer;
