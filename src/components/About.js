import Avatar from '../assets/linkedin.jpeg';
import Resume from '../assets/Saloni_Priyani_Resume.pdf';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-info">
                <div className="about-img-wrapper">
                    <img className="body-img" alt="Saloni Priyani" src={Avatar} />
                </div>
                <div className="body-headline">Saloni Priyani</div>
                <div className="body-text">Experienced Software Engineer</div>
                <div className="body-icons">
                    <a href="https://github.com/salonipriyani" target="_blank" rel="noreferrer" className="icon-link"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/saloni-priyani/" target="_blank" rel="noreferrer" className="icon-link"><FaLinkedin /></a>
                    <a href="mailto:priyanisaloni@gmail.com" className="icon-link"><FaEnvelope /></a>
                </div>
                <p className="about-desc">I’m a Software Engineer who loves building scalable, high-impact systems. I work across backend services, cloud data platforms, and workflow automation, and I’m increasingly drawn to multi-agent AI — designing systems where specialized agents collaborate to solve real problems. Always eager to learn and innovate, I’m passionate about crafting efficient, reliable software.</p>
                <div className="resume-download">
                    <a href={Resume} download className="resume-link">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About;
