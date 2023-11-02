// Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      <a
        href="../assets/resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        Download Resume
      </a>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MERN</li>
      </ul>
    </section>
  );
}

export default Resume;