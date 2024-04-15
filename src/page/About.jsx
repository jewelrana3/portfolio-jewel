const About = () => {
  return (
    <div className="mt-40 text-center" id="about">
      <div>
        <p className="color">My Introduction</p>
        <h1 className="text-3xl about-head">About Me</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-10 lg:px-10 lg:gap-12 px-20 gap-10 mt-20 ">
        <div className="flex items-center justify-center image-header">
          <div className="">
            <div className="backgroundColor relative"></div>
            <div className="absolute about-img ">
              <img
                className=""
                src="https://i.ibb.co/pJv2h9s/Screenshot-2023-12-23-110308.jpg"
                alt="pic"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="about-card-grid grid grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="h-40 w-40 rounded-lg card-details">
              <p className="js">JS</p>
              <h1 className="mt-7 font-semibold">Frontend</h1>
              <p className="text-sm project">15+ project</p>
            </div>
            <div className="h-40 w-40 rounded-lg card-details">
              <div className="h-10 mt-2 bg-black inline-block">
                <img
                  className="h-10 bg-transparent"
                  src="https://i.ibb.co/yYrQqw0/Screenshot-2023-12-23-115157.jpg"
                  alt="pic"
                />
              </div>

              <h1 className="mt-4 font-bold">Fullstack</h1>
              <p className="project">5+ project</p>
            </div>
            <div className="h-40 w-40 rounded-lg card-details">
              <p className="js ">git</p>
              <h1 className="font-bold mt-6">Github</h1>
              <p className=" project">50+ projects</p>
            </div>
          </div>
          <p className="text-left mt-3 text-xl about-des">
            Web developer, with extensive knowledge and more than 1.5 years of
            experience, working in web technologies and Ui / Ux design,
            delivering quality work.
          </p>
          <div className="btn-box2">
            <button className="btn2 text-left">Let's talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
