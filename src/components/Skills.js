import { FaPython, FaJava, FaFlask, FaServer, FaReact, FaDocker, FaDatabase, FaAws, FaGoogle, FaGitAlt } from "react-icons/fa";
import { SiSpring, SiApacheairflow, SiApachekafka, SiJenkins, SiTerraform, SiGnubash, SiPytest } from 'react-icons/si';

const certifications = [
    {
        name: 'Google Cloud Certified Professional Developer',
        link: 'https://www.credly.com/badges/19f2f46f-f6b0-43fa-894a-5aacb170b801/public_url',
        icon: FaGoogle
    },
    {
        name: 'AWS Certified Developer - Associate',
        link: 'https://www.credly.com/badges/357f813b-7f4a-4fc7-b58e-f3e437d10373?source=linked_in_profile',
        icon: FaAws
    }
];

const patents = [
    {
        name: 'Automated prediction of computing resource performance scaling using reinforcement learning',
        id: 'US11775352B1',
        link: 'https://patents.google.com/patent/US11775352B1'
    }
];

const Skills = () => {
    const skillsArr = [
        { "name": 'Python', "icon": FaPython },
        { "name": "Java", "icon": FaJava },
        { "name": "SQL", "icon": FaDatabase },
        { "name": "Bash", "icon": SiGnubash },
        { "name": "Flask", "icon": FaFlask },
        { "name": 'Django', "icon": FaPython },
        { "name": 'FastAPI', "icon": FaServer },
        { "name": "Spring Boot", "icon": SiSpring },
        { "name": 'React', "icon": FaReact },
        { "name": 'pytest / JUnit', "icon": SiPytest },
        { "name": 'Google Cloud', "icon": FaGoogle },
        { "name": 'AWS', "icon": FaAws },
        { "name": 'Docker', "icon": FaDocker },
        { "name": 'Terraform', "icon": SiTerraform },
        { "name": 'Apache Airflow', "icon": SiApacheairflow },
        { "name": 'Kafka', "icon": SiApachekafka },
        { "name": 'Jenkins', "icon": SiJenkins },
        { "name": 'Git', "icon": FaGitAlt },
        { "name": 'NoSQL (MongoDB, DynamoDB)', "icon": FaDatabase },
        { "name": 'SQL (PostgreSQL, MySQL)', "icon": FaDatabase },
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p className="skill">{skill.name}</p>
                            </i>
                        )
                    })
                }
            </div>
            <h2 className="certifications-heading">Certifications</h2>
            <div className="certification-holder">
                {
                    certifications.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <a key={index} href={cert.link} target="_blank" rel="noreferrer" className='certification-cards'>
                                <Icon className='certification-icon'/>
                                <p className="certification">{cert.name}</p>
                            </a>
                        )
                    })
                }
            </div>
            <h2 className="certifications-heading">Patents</h2>
            <div className="patent-holder">
                {
                    patents.map((patent, index) => (
                        <a key={index} href={patent.link} target="_blank" rel="noreferrer" className='patent-card'>
                            <p className="patent-name">{patent.name}</p>
                            <p className="patent-id">{patent.id}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;
