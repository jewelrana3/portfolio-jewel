// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";

const Portfolio = () => {
  return (
    <div className="mt-40 text-center mb-20" id="portfolio">
      <div>
        <p className="color">What I Offer</p>
        <h1 className="text-3xl about-head">My Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 services-header mt-16 gap-10 px-8 lg:px-20">
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/zRBwjbN/Screenshot-2023-08-31-070259.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">tailwind</p>
              <p className="server-des">react</p>
              <p className="server-des">mongoDB</p>
            </div> */}
            <h2 className="mt-16">Recipe Restarant Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/recipe-resturent-client"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://new-10-project.web.app/"
                className="btn3 font-semibold"
                target="_blank"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/McpVkVk/Annotation-2023-08-30-080111.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">tailwind</p>
              <p className="server-des">react</p>
              <p className="server-des">mongoDB</p>
            </div> */}
            <h2 className="mt-16">Toy MarketPlace Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/toy-marketplace-client"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://toy-marketplace-54ca0.web.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/R7Xtjsx/Screenshot-2023-09-01-090741.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">tailwind</p>
              <p className="server-des">react</p>
              <p className="server-des">mongoDB</p>
            </div> */}
            <h2 className="mt-16">Sports Club MERN Stack Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/school-camp-client"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://assignment-12-a51e6.web.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/KwJjJkH/Screenshot-2023-11-18-185700.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">css</p>
              <p className="server-des">javaScript</p>
              <p className="server-des">bootstrap</p>
            </div> */}
            <h2 className="mt-16">
              We Provide Effective Legal Frontend Website
            </h2>
            <div className="btn-box3">
              <Link to="#" className="btn3 font-semibold">
                Github
              </Link>
              <Link
                to="https://legendary-custard-e5d492.netlify.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/6NnFXCC/Screenshot-2023-11-18-143916.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">tailwind</p>
              <p className="server-des">react</p>
              <p className="server-des">mongoDB</p>
            </div> */}
            <h2 className="mt-16">Electronics Ecomerce Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/electronics-ecomerce"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://eocomerce-electronics.web.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/bN6YLKB/Screenshot-2023-09-21-120824.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">css</p>
              <p className="server-des">react</p>
              <p className="server-des">tailwind</p>
            </div> */}
            <h2 className="mt-16">Ferfew Portal Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/nexus-software-soluation"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://nexus-software-soluation.vercel.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/f8nYtkX/Portfolio-Career-1024x512.png"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-2">
              <p className="server-des">Html</p>
              <p className="server-des">css</p>
              <p className="server-des">javaScript</p>
              <p className="server-des">react</p>
            </div> */}
            <h2 className="mt-16">Career Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/career-hub"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://career-hub-two.vercel.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/8M3YrcV/Screenshot-2023-11-18-185103.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-3">
              <p className="server-des">Html</p>
              <p className="server-des">tailwind</p>
              <p className="server-des">javaScript</p>
            </div> */}
            <h2 className="mt-16">G3 Architects Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/real-project"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://jewelrana3.github.io/real-project/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
        <div className="services ">
          <div className="">
            <img
              className="w-80 h-56 rounded-2xl"
              src="https://i.ibb.co/zryYjt4/Screenshot-2023-11-18-184728.jpg"
              alt=""
            />
          </div>
          <div>
            {/* <div className="flex items-center justify-center -mt-12 gap-8">
              <p className="server-des">Html</p>
              <p className="server-des">css</p>
              <p className="server-des">react</p>
            </div> */}
            <h2 className="mt-16">Weather App Frontend Website</h2>
            <div className="btn-box3">
              <Link
                to="https://github.com/jewelrana3/weather4"
                className="btn3 font-semibold"
              >
                Github
              </Link>
              <Link
                to="https://weather-project-woad.vercel.app/"
                className="btn3 font-semibold"
              >
                Live Site
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <p className="color">Review From Clients</p>
        <h1 className="text-3xl about-head">Testimonials</h1>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide className="mb-20 text-swiper text-sideber">
              <div className="sider-div">
                <img
                  className=""
                  src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
                  alt="pic"
                />
                <p className="text-white mt-2 font-semibold">ESMAILISE</p>
              </div>
              <div className="sider-des">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  saepe nobis quam quasi in esse! Recusandae molestiae accusamus
                  quasi neque, at odit!
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="">
            <SwiperSlide className="mb-20 text-swiper text-sideber">
              <div className="sider-div">
                <img
                  className=""
                  src="https://i.ibb.co/5BNXw9q/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg"
                  alt="pic"
                />
                <p className="text-white mt-2 font-semibold">SOPHIA</p>
              </div>
              <div className="sider-des">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  saepe nobis quam quasi in esse! Recusandae molestiae accusamus
                  quasi neque, at odit!
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="">
            <SwiperSlide className="mb-20 text-swiper text-sideber">
              <div className="sider-div">
                <img
                  className=""
                  src="https://i.ibb.co/fNfTTn3/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign-53876-143280.jpg"
                  alt="pic"
                />
                <p className="text-white mt-2 font-semibold">ISABELLA</p>
              </div>
              <div className="sider-des">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  saepe nobis quam quasi in esse! Recusandae molestiae accusamus
                  quasi neque, at odit!
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="">
            <SwiperSlide className="mb-20 text-swiper text-sideber">
              <div className="sider-div">
                <img
                  className=""
                  src="https://i.ibb.co/5BNXw9q/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg"
                  alt="pic"
                />
                <p className="text-white mt-2 font-semibold">OLIVIA</p>
              </div>
              <div className="sider-des">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  saepe nobis quam quasi in esse! Recusandae molestiae accusamus
                  quasi neque, at odit!
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="">
            <SwiperSlide className="mb-20 text-swiper text-sideber">
              <div className="sider-div">
                <img
                  className=""
                  src="https://i.ibb.co/sjvkpH6/confident-business-woman-portrait-smiling-face-53876-137693.jpg"
                  alt="pic"
                />
                <p className="text-white mt-2 font-semibold">ESMAILISE</p>
              </div>
              <div className="sider-des">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  saepe nobis quam quasi in esse! Recusandae molestiae accusamus
                  quasi neque, at odit!
                </p>
              </div>
            </SwiperSlide>
          </div>
          <div className="">
            <SwiperSlide className="mb-20 text-swiper text-sideber">
              <div className="sider-div">
                <img
                  className=""
                  src="https://i.ibb.co/p4t5xff/friendly-polite-good-looking-african-american-girl-glasses-with-curly-hair-striped-office-blouse-poi.jpg"
                  alt="pic"
                />
                <p className="text-white mt-2 font-semibold">EMMA</p>
              </div>
              <div className="sider-des">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  saepe nobis quam quasi in esse! Recusandae molestiae accusamus
                  quasi neque, at odit!
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Portfolio;
