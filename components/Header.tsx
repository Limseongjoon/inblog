import CustomImage from '../components/CustomImage';
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="-mt-1 sm:mt-2">
      <Navbar
        fluid={false}
        rounded={false}>
        <Navbar.Brand href="/#">
          <CustomImage src="/images/inblog_logo.png" className="h-8 lg:h-9 ml-3 w-auto" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="py-1 w-screen">
            <Navbar.Link href="/contact">
              Contact
            </Navbar.Link>
          </div>
          <div className="py-1 w-screen">
            <Navbar.Link href="/#">
              LogIn
            </Navbar.Link>
          </div>
          <div className="py-1 w-screen">
            <Navbar.Link href="/#">
              Free-Trial
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
