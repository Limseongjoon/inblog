import CustomImage from '../components/CustomImage';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen px-6 lg:px-12 bg-white">
      <div className="h-5 md:h-6 lg:h-8"></div>
      <div className="flex items-start">
        <Link href="/">
          <CustomImage src="/images/logo_joon.png" className="h-4 md:h-5 lg:h-6 w-auto" />
        </Link>
        <div className="grow"></div>
        <div className="flex items-end gap-6 md:gap-10 lg:gap-12 -my-[4px] lg:-my-1">
          <Link
            href="/about"
            className="font-hrot text-2xs md:text-xs lg:text-sm"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="font-hrot text-2xs md:text-xs lg:text-sm"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default Header;
