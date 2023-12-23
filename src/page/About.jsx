

const About = () => {
    return (
        <div className="mt-40 text-center">
            <div>
                <p className="color">My Introduction</p>
                <h1 className="text-3xl about-head">About Me</h1>
            </div>
            <div className="flex justify-between px-28 gap-40 mt-20">
                <div>
                    <img className="h-96 w-96" src="https://i.ibb.co/pJv2h9s/Screenshot-2023-12-23-110308.jpg" alt="pic" />
                </div>
                <div>
                    <div className="flex gap-10 ">
                        <div className="h-40 w-40 rounded-lg card-details text-center">
                            <p className="js">JS</p>
                            <h1>Frontend</h1>
                            <p>10+ project</p>
                        </div>
                        <div className="h-40 w-40 rounded-lg card-details">
                            <div className="h-10 mt-2 bg-black inline-block">
                                <img className="h-10 bg-transparent" src="https://i.ibb.co/yYrQqw0/Screenshot-2023-12-23-115157.jpg" alt="pic" />
                            </div>

                            <h1>Fullstack</h1>
                            <p>5+ project</p>
                        </div>
                        <div className="h-40 w-40 rounded-lg card-details">
                            <p className="js ">git</p>
                            <h1></h1>
                            <p>40+ projects</p>
                        </div>
                    </div>
                    <p className="text-left mt-3 text-xl about-des">Web developer, with extensive knowledge and more than 3 <br /> years of experience, working in web technologies and Ui / Ux <br /> design, delivering quality work.</p>
                    <div className="btn-box2">
                        <button className="btn2 text-left">Let's talk</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;