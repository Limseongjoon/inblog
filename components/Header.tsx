import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen px-6 lg:px-12 bg-white">
      <div className="h-5 md:h- lg:h-4"></div>
      <div className="flex items-center">
        <Link href="/">
          <CustomImage src="/images/inblog_logo.png" className="h-8 md:h-9 lg:h-10 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex gap-12 md:gap-14 lg:gap-16">
          <Link
            href="/contact"
            className="text-tiny md:text-base lg:text-lg py-1 "
          >
            Contact
          </Link>
          <Link
            href="/#"
            className="text-tiny md:text-base lg:text-lg py-1 -mr-8"
          >
            Sign in
          </Link>
          <Link
            href="/#"
            className="text-tiny md:text-base lg:text-lg text-white border-solid bg-black px-8 py-1 rounded-md"
          >
            Free trial
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default Header;
