// Portfolio.jsx
import React from 'react';
import Project from './Projects'; // Import the Project component

function Portfolio() {
  const projectData = [
    {
      title: "Daily Scheduler",
      //deployLink: "",
      githubLink: "https://github.com/nathankay89/weatherapp",
      image: "/DailyScheduler.jpeg",
    },
    {
      title: "Weather App",
      deployLink: "https://nathankay89.github.io/weatherapp/",
      githubLink: "https://github.com/Eric-K-Smyth/sing-along",
      image: "/WeatherApp.png",
    },
    {
      title: "J.A.T.E",
      //deployLink: "",
      githubLink: "https://github.com/nathankay89/19PWA",
      image: "/JateApp.png",
    },
    {
      title: "Quiz App",
      deployLink: "https://nathankay89.github.io/wk4c/",
      githubLink: "https://github.com/nathankay89/wk4c",
      image: "/QuizApp.png",
    },
    {
      title: "Note Taker",
      //deployLink: "",
      githubLink: "https://github.com/nathankay89/notetaker",
      image: "NotetakerApp.png",
    },
    {
      title: "Employee Tracker",
      //deployLink: "",
      githubLink: "https://github.com/nathankay89/Emplyeetracker",
      image: "/employees.jpeg",
    },
    {
      title: "BE Social App",
      //deployLink: "",
      githubLink: "https://github.com/nathankay89/18SocialAPI",
      image: "/SocialAppBE.png",
    },
    
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
              <Project
                title={project.title}
                deployLink={project.deployLink}
                githubLink={project.githubLink}
                image={project.image}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;