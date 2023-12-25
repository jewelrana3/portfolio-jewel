import { IoMdHome } from "react-icons/io";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";
import { GiRoyalLove } from "react-icons/gi";
import { ImCommand } from "react-icons/im";
import { RiRemoteControlLine } from "react-icons/ri";
import { useState } from "react";

const Scroll = () => {
    const [clickedIcon, setClickedIcon] = useState(null);

    const handleIconClick = (icon) => {
        setClickedIcon(icon);
    };

    const isIconClicked = (icon) => {
        return clickedIcon === icon;
    };

    return (
        <div className="scroll">
            <ul className="flex gap-6">
                <li>
                    <a href="#header" onClick={() => handleIconClick('home')}>
                        <IoMdHome className={`scroll-icon ${isIconClicked('home') ? 'clicked' : ''}`} />
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={() => handleIconClick('icon')}>
                        <ImCommand  className={`scroll-icon ${isIconClicked('icon') ? 'clicked' : ''}`} />
                    </a>
                </li>
                <li>
                    <a href="#exprience" onClick={() => handleIconClick('emoji')}>
                        <BsFillEmojiExpressionlessFill className={`scroll-icon ${isIconClicked('emoji') ? 'clicked' : ''}`} />
                    </a>
                </li>
                <li>
                    <a href="#servies" onClick={() => handleIconClick('love')}>
                        <GiRoyalLove className={`scroll-icon ${isIconClicked('love') ? 'clicked' : ''}`} />
                    </a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => handleIconClick('message')}>
                        <BiMessageDots className={`scroll-icon ${isIconClicked('message') ? 'clicked' : ''}`} />
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => handleIconClick('message2')}>
                        <RiRemoteControlLine className={`scroll-icon ${isIconClicked('message2') ? 'clicked' : ''}`} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Scroll;