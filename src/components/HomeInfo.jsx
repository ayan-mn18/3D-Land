import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm
            <span className='font-semibold mx-2 text-white'>Adrian</span>
            👋
            <br />
            A Software Engineer from Croatia 🇭🇷
        </h1>
    ),
    2: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm
            <span className='font-semibold mx-2 text-white'>Adrian</span>
            👋
            <br />
            A Software Engineer from Croatia 🇭🇷
        </h1>
    ),
    3: (
        <div className='info-box'>
            <p className='font-medium text-center sm:text-xl'>
                Led multiple projects to success over the years. <br /> Curious about the impact?
            </p>

            <Link to='/projects' className='neo-brutalism-white neo-btn'>
                Visit my portfolio
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
        </div>
    ),
    4: (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
                Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
            </p>

            <Link to='/contact' className='neo-brutalism-white neo-btn'>
                Let's talk
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;