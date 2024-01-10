import { BiMessageRoundedDots } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { PiMessengerLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-center mb-20" id="contact">
      <div>
        <p className="color">What I Offer</p>
        <h1 className="text-3xl about-head">Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 lg:ml-20 px-10 lg:px-48">
        <div className="">
          <div className="contact-message mt-4 ">
            <p className="flex justify-center items-center">
              <BiMessageRoundedDots />
            </p>
            <p className="color">Message</p>
            <p className="send-contact">Send a message</p>
          </div>
          <div className="contact-message mt-4 ">
            <p className="flex justify-center items-center">
              <FaWhatsapp />
            </p>
            <p className="color">WhatsApp</p>
            <Link to="https://wa.me/8801947603852">
              <p className="send-contact">Send a message</p>
            </Link>
          </div>
          <div className="contact-message mt-4">
            <p className="flex justify-center items-center">
              <PiMessengerLogoFill />
            </p>
            <p className="color">Messenger</p>
            <Link to="https://m.me/jewelrana2129">
              {" "}
              <p className="send-contact">Send a message</p>
            </Link>
          </div>
        </div>
        <div className="contact-input mt-6 ">
          <div className="input-card">
            <input type="text" name="" id="" placeholder="Your Full Name" />
          </div>
          <div className="mt-4 input-card">
            <input type="email" name="" id="" placeholder="Your Email" />
          </div>
          <div className="mt-4 input-card">
            <textarea
              style={{ resize: "none" }}
              name=""
              id=""
              placeholder="Your Message"
            />
          </div>
          <div className="text-left contact-btn">
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
