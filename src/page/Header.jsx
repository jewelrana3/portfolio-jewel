import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="text-center" id="header">
      <div className=" mt-20">
        <p>Hello,I'm</p>
        <h1 className="text-3xl"> Juyel</h1>
      </div>
      <div className="text-center mt-5">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Frontend Developer",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "MERN Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "",
            display: "inline-block",
            color: "hsla(0,0%,100%,.6)",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="btn-box">
        <Link
          to="https://drive.google.com/file/d/1Ui0bO76VNVVNQbz4dL8fbVhT8yI1XeMO/view?usp=sharing"
          className="btn"
        >
          Download Resume
        </Link>
        <a href="#contact" className="btn">
          Let's talk
        </a>
      </div>
      <div className="flex items-center justify-between md:px-28 px-10 gap-10 mt-20">
        <div className="icons-header">
          <Link to="" target="">
            {" "}
            <ImFacebook className="mt-3" />
          </Link>
          <Link to="https://github.com/jewelrana3" target="_blank">
            {" "}
            <FiGithub className="mt-3" />
          </Link>
          <Link to="https://www.linkedin.com/in/juyel-haqu/" target="_blank">
            {" "}
            <FaLinkedinIn className="mt-3" />
          </Link>
        </div>
        <div className="header-image flex items-center justify-center">
          <div>
            <img
              className=""
              src="https://i.ibb.co/xSMG06H/MGp-DPEDrq-F-1.gif"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="scroll-down rotate">
            <a href="#contact">Scroll Down</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
