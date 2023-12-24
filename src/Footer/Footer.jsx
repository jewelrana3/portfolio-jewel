import { Link } from "react-router-dom";
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="text-center footer ">
            <h2 className="jewel">JEWEL</h2>
            <div className="flex items-center justify-center gap-9 mt-4">
                <p>Home</p>
                <p>about</p>
                <p>exprience</p>
                <p>services</p>
                <p>portfolio</p>
                <p>testimentials</p>
                <p>contact</p>
            </div>
            <div>
                <div className="flex items-center justify-center gap-9 mt-4 footer-icon">
                    <Link to='' target=''> <ImFacebook className="icons"/></Link>
                    <Link to='https://github.com/jewelrana3' target='_blank'> <FiGithub className="icons"/></Link>
                    <Link to='https://www.linkedin.com/in/md-jewel-rana-585bb2251/' target='_blank'> <FaLinkedinIn className="icons"/></Link>
                </div>
                <div className="mt-20 last-des">
                    <h5>&copy; JEWEL 2021-2023. All rights reserved.</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;