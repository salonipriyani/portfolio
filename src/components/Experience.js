import React from 'react';

const experiences = [
  {
    company: 'Company A',
    role: 'Software Engineer',
    duration: 'Jan 2020 - Present',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to define, design, and ship new features',
      'Improved application performance and user experience',
    ],
  },
  {
    company: 'Company B',
    role: 'Junior Developer',
    duration: 'Jun 2018 - Dec 2019',
    responsibilities: [
      'Assisted in the development of web applications using JavaScript and PHP',
      'Participated in code reviews and team meetings',
      'Provided technical support and troubleshooting for clients',
    ],
  },
];

const Experience = () => {
  return (
    <div id = "experience" className="experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.role} at {exp.company}</h3>
          <p>{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;