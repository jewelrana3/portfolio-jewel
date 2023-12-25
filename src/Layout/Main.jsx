import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Scroll from "../ScrollDown/Scroll";

const Main = () => {
    return (
        <div>
            <Scroll />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;