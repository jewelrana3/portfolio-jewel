import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center footer lg:h-96 w-full">
      <h2 className="jewel">JUYEL</h2>
      <div className="md:flex items-center justify-center gap-9 mt-4 footer-p">
        <ul className="md:flex gap-5">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#exprience">exprience</a>
          </li>
          <li>
            <a href="#servies">servics</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex items-center justify-center gap-9 mt-4 footer-icon">
          <Link to="" target="">
            {" "}
            <ImFacebook className="icons" />
          </Link>
          <Link to="https://github.com/jewelrana3" target="_blank">
            {" "}
            <FiGithub className="icons" />
          </Link>
          <Link to="https://www.linkedin.com/in/juyel-haqu/" target="_blank">
            {" "}
            <FaLinkedinIn className="icons" />
          </Link>
        </div>
        <div className="mt-8 last-des">
          <h5>&copy; JUYEL 2021-2023 All rights reserved.</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
