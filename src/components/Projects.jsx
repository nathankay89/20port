import React from 'react';

function Project({ title, deployLink, githubLink, image }) {
  return (
    <div className="project">
      <a href={deployLink} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      </a>
      <h3>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}

export default Project;