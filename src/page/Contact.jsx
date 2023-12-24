import { PiMessengerLogoFill } from "react-icons/pi";

const Contact = () => {
    return (
        <div className="text-center mb-20">
            <div>
                <p className="color">What I Offer</p>
                <h1 className="text-3xl about-head">My Servicese</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-16 px-20 gap-6">
                <div>
                    <div className="contact-message mt-4">
                        <p className="flex justify-center items-center"><PiMessengerLogoFill /></p>
                        <p className="color">Messenger</p>
                        <p className="send-contact">Send a message</p>
                    </div>
                    <div className="contact-message mt-4">
                        <p className="flex justify-center items-center"><PiMessengerLogoFill /></p>
                        <p className="color">Messenger</p>
                        <p className="send-contact">Send a message</p>
                    </div>
                    <div className="contact-message mt-4">
                        <p className="flex justify-center items-center"><PiMessengerLogoFill /></p>
                        <p className="color">Messenger</p>
                        <p className="send-contact">Send a message</p>
                    </div>

                </div>
                <div className="contact-input mt-6">
                    <div className="input-card">
                        <input type="text" name="" id="" placeholder="Your Full Name" />
                    </div>
                    <div className="mt-4 input-card">
                        <input type="email" name="" id="" placeholder="Your Email" />
                    </div>
                    <div className="mt-4 input-card">
                        <textarea style={{ resize: 'none' }} name="" id=""  placeholder="Your Message" />
                    </div>
                    <div className="text-left contact-btn">
                        <button >Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;