import { PiMessengerLogoFill } from "react-icons/pi";

const Contact = () => {
    return (
        <div className="text-center mb-20">
            <div>
                <p className="color">What I Offer</p>
                <h1 className="text-3xl about-head">My Servicese</h1>
            </div>
            <div className="flex items-center justify-center gap-14 mt-16">
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

                    <div >
                        <input type="text" name="" id="" placeholder="Your Full Name" />
                    </div>
                    <div className="mt-4">
                        <input type="email" name="" id="" placeholder="Your Email" />
                    </div>
                    <div className="mt-4">
                        <textarea style={{ resize: 'none' }} name="" id="" cols="62" rows="7" placeholder="Your Message" />
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