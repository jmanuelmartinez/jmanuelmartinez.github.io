import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import './css/about.css';

function About() {
  const languages = [
    'C#',
    'Python',
    'React',
    'NodeJS',
    'MongoDB',
    'SQL',
    'SSIS',
    '.Net Core',
    'Django',
    'Angular',
    'Microservices',
  ];

  const businessapps = [
    'Microsoft Dynamics 365 Business Central',
    'SharePoint Online',
    'SharePoint Framework',
    'Power Platform',
    'Power Automate',
    'Power Apps',
    'Azure Logic Apps',
    'Azure Apps'
  ];

  const devops = [
    'Azure',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Terraform',
    'Github/Git',
    'Azure DevOps',
    'CI/CD streamlining',
  ];

  const softskills = [
    'Agile Project Management',
    'Kanban',
    'Scrum',
    'Technical Leadership',
    'Team Leader',
    'Team Player',
    'Problem-solving',
    'Cross-Functional Communication'
  ];


  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        About<span style={{ color: '#FF004F' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
            I'm currently focused on Business Applications and DevOps engineering. I'm always looking to sharpen my skills through challenging projects and innovative solutions. My expertise lies in Microsoft technologies and Agile methodologies.          </p>
          <br />
          <p>
            As a Software Engineer with a strong focus on DevOps, I relish the opportunity to merge coding prowess with infrastructure know-how. If you're dealing with projects that require a seamless blend of software development and operational efficiency, I'd be keen to connect and explore how we could collaborate. Right now, I'm deep into projects that leverage cutting-edge tech stacks, keeping my DevOps and engineering skills finely tuned.
          </p>
          <br />
          <p>Outside of work, I'm a proud father that have a passion for developing new things, learning about AI models, and playing chess. It's all about balance, right?</p>
          <br />
          <p>If you're interested in exploring the possibility of working together, feel free to reach out.</p>
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
              Languages/Frameworks
            </h1>
            <br />
            {languages.map((devops, index) => (
              <span key={index}>{devops}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
               DevOps
            </h1>
            <br />
            {devops.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
             <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
               Business Apps
            </h1>
            <br />
            {businessapps.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
               Soft Skills
            </h1>
            <br />
            {softskills.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;