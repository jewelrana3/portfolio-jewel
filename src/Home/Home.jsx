import About from "../page/About";
import Contact from "../page/Contact";
import Exprience from "../page/Exprience";
import Header from "../page/Header";
import Portfolio from "../page/Portfolio";
import Servies from "../page/Servies";


const Home = () => {
    return (
        <div>
          <Header />
          <About />
          <Exprience />
          <Servies />
          <Portfolio />
          <Contact />
        </div>
    );
};

export default Home;