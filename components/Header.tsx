import CustomImage from '../components/CustomImage';
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="-mt-1 sm:mt-2">
      <Navbar
        fluid={false}
        rounded={false}>
          <Navbar.Brand href="/#">
          <CustomImage src="/images/inblog_logo.png" className="h-7 lg:h-8 ml-3 w-auto" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/contact">
              Contact
            </Navbar.Link>
            <Navbar.Link href="/#">
              LogIn
            </Navbar.Link>
            <Navbar.Link href="/#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#ff4b93] md:p-0 dark:text-white md:dark:text-[#ff4b93]">
              Free-Trial
            </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default Header;
