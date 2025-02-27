// @ts-ignore
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md">
      <ul className="flex justify-center space-x-6 p-4">
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer">
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
