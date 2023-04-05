import CustomImage from '../components/CustomImage';
import Link from 'next/link';
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div>
      <Navbar
        fluid={false}
        rounded={false}>
        <Navbar.Brand href="/#">
          <CustomImage src="/images/inblog_logo.png" className="h-8 lg:h-9 ml-2 w-auto" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="py-1">
          </div>
          <div className="py-1">
            <Navbar.Link href="/contact">
              Contact
            </Navbar.Link>
          </div>
          <div className="py-1">
            <Navbar.Link href="/#">
              Login
            </Navbar.Link>
          </div>
          <div className="py-1">
            <Navbar.Link href="/#">
              Free trial
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
