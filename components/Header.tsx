import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen px-6 lg:px-12 bg-[#F4F4F4]">
      <div className="h-5 md:h- lg:h-4"></div>
      <div className="flex items-center">
        <Link href="/">
          <CustomImage src="/images/inblog_logo.png" className="h-8 md:h-9 lg:h-10 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex gap-6 md:gap-12">
          <Link
            href="/contact"
            className="text-tiny md:text-base py-1 pr-2"
          >
            Contact
          </Link>
          <Link
            href="/#"
            className="text-tiny md:text-base py-1"
          >
            Login
          </Link>
          <Link
            href="/#"
            className="font-light text-tiny md:text-base text-white border-solid bg-black px-6 py-1 rounded-full"
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
