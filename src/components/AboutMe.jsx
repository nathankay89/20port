import React from 'react';
import myImage from '../assets/pfp.jpeg'; // Update the path to your image file

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
      <img src={myImage} alt="My Image" className="avatar"/>
    </div>
        <div className="bio">
          <p>
          Hello there! I'm Nathan, and I'm delighted to have you explore my portfolio.

I bring with me a distinguished career as a retired military veteran, amassing over 15 years of invaluable expertise in mountain operations, reconnaissance, close surveillance, and helicopter operations. My journey has led me to a new and exciting chapter in the tech sector, where I've discovered a profound passion for web development.

While my heart lies in front-end work, I'm equally adept at tackling the complexities of back-end development when the need arises.
          </p>
          <p>
          Since embarking on this exciting new chapter in my journey, I've immersed myself in a wide array of technologies and tools. I've become well-versed and proficient in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, NoSQL databases, Sequelize, GraphQL, PWA (Progressive Web Apps), and React.

I've also had the privilege of working with the MERN (MongoDB, Express.js, React, Node.js) tech stack, further expanding my skill set. I invite you to explore my portfolio and reach out to me – I'm eager to connect and share my work with you.
          </p>
        </div>
      
    </section>
  );
}

export default AboutMe;