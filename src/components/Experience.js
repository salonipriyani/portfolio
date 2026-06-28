import React from 'react';

const experiences = [
  {
    company: 'CVS Health',
    role: 'Senior Data Engineer',
    duration: 'Apr 2026 - Present',
    stack: ['Python', 'BigQuery', 'GCP', 'Google ADK', 'Multi-Agent AI'],
  },
  {
    company: 'CVS Health',
    role: 'Data Engineer',
    duration: 'Jan 2024 - Mar 2026',
    stack: ['Python', 'React', 'FastAPI', 'Apache Airflow', 'GCP', 'BigQuery', 'Spark', 'Cloud Spanner', 'Dataflow'],
  },
  {
    company: 'CVS Health',
    role: 'Machine Learning Engineering Intern',
    duration: 'May 2023 - Aug 2023',
    stack: ['Python', 'GCP Vertex AI', 'BigQuery'],
    responsibilities: [
      'Built a Python library to manage experiment execution and metadata tracking on GCP Vertex AI, leveraging BigQuery for scalable storage, enabling reproducible batch workflows across multiple ML pipelines.',
      'Integrated the library into production batch pipelines, reducing setup time by 60% and improving reproducibility.',
    ],
  },
  {
    company: 'Fidelity Investments',
    role: 'Software Engineer',
    duration: 'Aug 2020 - Jul 2022',
    stack: ['Java', 'Spring Boot', 'FastAPI', 'React', 'AWS'],
    responsibilities: [
      'Built high-throughput Java Spring Boot APIs supporting 300K users and 1M+ documents.',
      'Spearheaded the integration of ML models using FastAPI, cutting document processing delays by 6 hours.',
      'Led 6 interns in delivering a multi-tenant onboarding platform, performing code reviews and feature delivery.',
      'Designed AWS event-driven pipelines with SNS, SQS, and Lambda for reliable backend processes.',
    ],
  },
  {
    company: 'Fidelity Investments',
    role: 'Software Engineering Intern',
    duration: 'May 2019 - Jul 2019',
    stack: ['Java', 'Spring Boot', 'React', 'AWS'],
    responsibilities: [
      'Implemented automated user onboarding using a Java Spring Boot backend and React frontend.',
      'Shipped the feature via AWS CI/CD pipelines, saving developers ~12 hours of manual effort.',
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-container">
        <h2>Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} at {exp.company}</h3>
            <p className="experience-duration">{exp.duration}</p>
            {exp.responsibilities && (
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            )}
            <div className="experience-stack">
              {exp.stack.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
