import CustomIcon from "./CustomIcon";


const Servies = () => {
    return (
        <div className="mt-40 text-center mb-20" id='servies'>
            <div>
                <p className="color">What I Offer</p>
                <h1 className="text-3xl about-head">My Servicese</h1>
              <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 mt-12 servies-div">
                <div className="servics-three-div text-left">
                    <p className="servies-frontend text-center text-black text-xl">Frontend Development</p>
                    <div className="one-div">
                        <div className="flex mt-4 gap-6">
                            <p> <CustomIcon /></p>
                            <p>I develop the user interface.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Web page development.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Understanding of HTML, CSS,  and <br /> JavaScript</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Experience with JavaScript  frameworks <br /> React</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Familiarity with browser developer  <br /> tools</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Understanding of responsive  design <br /> principles</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Knowledge of cross-browser  compatibility issues</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Experience with version control systems such as Git</p>
                        </div>
                    </div>
                </div>
                <div className="servics-three-div text-left">
                    <p className="servies-frontend text-center text-black text-xl">Backend Development</p>
                    <div className="one-div">
                        <div className="flex mt-4 gap-6">
                            <p> <CustomIcon /></p>
                            <p>Create Server From scratch with NodeJS and ExpressJS.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>With In Database Management system - MongoDB.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Understanding of RESTful API design principles.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Knowledge of server-side caching,and performance.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>MongoDB CRUD Operations.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Enable Data security With JWT(JSON Web Token).</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Work with Environment Variables.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>NodeJS login authentication.</p>
                        </div>
                    </div>
                </div>
                <div className="servics-three-div text-left">
                    <p className="servies-frontend text-center text-black text-xl">UI/UX Development</p>
                    <div className="one-div">
                        <div className="flex mt-4 gap-6">
                            <p> <CustomIcon /></p>
                            <p>Familiarity with design software such as Adobe XD, Figma.</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Understanding of user-centered design principles and user experience (UX) design</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Understanding of responsive design principles</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Knowledge of typography, color theory, and layout principles</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Experience with user research and testing methodologies</p>
                        </div>
                        <div className="flex mt-4 items-center gap-6 text-white">
                            <p> <CustomIcon /></p>
                            <p>Strong attention to detail and ability to iterate on designs based on feedback.</p>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Servies;