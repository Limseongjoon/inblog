import CustomImage from '../components/CustomImage';
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
      <Navbar
        fluid={false}
        rounded={false}>
          <Navbar.Brand href="/#">
          <CustomImage src="/images/inblog_logo.png" className="h-7 lg:h-8 ml-3 w-auto" />
        </Navbar.Brand>
        <Navbar.Toggle className="hover:outline-none hover:ring-0 hover:bg-transparent focus:outline-none focus:ring-0 focus:bg-transparent" />
        <Navbar.Collapse>
            <Navbar.Link href="/contact" className="md:hover:text-[#10A42A]">
              Contact
            </Navbar.Link>
            <Navbar.Link href="/#" className="md:hover:text-[#10A42A]">
              Login
            </Navbar.Link>
            <Navbar.Link href="/#" className="block py-2 pl-3 pr-4 md:text-[#ff4b93] md:p-0 md:hover:text-[#10A42A] md:dark:text-[#ff4b93]">
              Free Trial
            </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
