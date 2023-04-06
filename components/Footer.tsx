import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black w-screen">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:justify-between">
        <span className="text-sm text-white sm:text-center">© 2023 Inblog. All Rights Reserved.
          <a href="mailto:inblog.io@gmail.com" className="mr-4 hover:underline md:mr-6">&nbsp;inblog.io@gmail.com</a></span>
        
        <ul className="flex flex-wrap items-center text-sm font-medium text-white dark:text-gray-400">
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
                  className="h-3 md:h-4 w-auto"
                />
              </Link>
            </li>
        </ul>
      </div>
   </div>
  );
};

export default Footer;
