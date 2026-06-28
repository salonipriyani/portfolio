import data from '../data/projects.json';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <section id='projects' className='projects'>
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {
                    data.map((project, key) => (
                        <a
                            key={key}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`project-card${key === 0 ? ' featured' : ''}`}
                        >
                            {key === 0 && <span className="project-badge">Featured</span>}
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-desc">{project.description}</p>
                            <span className="project-link"><FaGithub /> View on GitHub</span>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;
