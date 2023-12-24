import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { ImFacebook } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';



const Header = () => {
    return (
        <div className='text-center'>

            <div className=" mt-20">
                <p>Hello,I'm</p>
                <h1 className="text-3xl">MD Jewel</h1>
            </div>
            <div className='text-center mt-5'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Frontend Developer',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'MERN Stack Developer',
                        2000,
                        'Full Stack Develoer',
                        2000,

                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '', display: 'inline-block', color: 'hsla(0,0%,100%,.6)' }}
                    repeat={Infinity}
                />
            </div>

            <div className="btn-box">
                <button className="btn">Download Resume</button>
                <button className="btn">Let's talk</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto'>
                <div>
                    <Link to='' target=''> <ImFacebook /></Link>
                    <Link to='https://github.com/jewelrana3' target='_blank'> <FiGithub /></Link>
                    <Link to='https://www.linkedin.com/in/md-jewel-rana-585bb2251/' target='_blank'> <FaLinkedinIn /></Link>
                </div>
                <div>
                  <img src="https://i.ibb.co/HKC62CJ/Animation-1703298875441.gif" alt="" />
                </div>
                <div>
                    <Link className='scroll-down rotate'>Scroll Down</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;