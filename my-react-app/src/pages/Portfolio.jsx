import Project from '../components/Projects'; // Import the Project component
import projects from '../components/Projects'; // Import the projects array
import '../assets/Style.css'

function Portfolio() {
    return (
        <section id="projects" className="custom-style">
            <h2>Portfolio</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <Project
                        key={index} // Make sure to provide a unique key
                        title={project.title}
                        image={project.image}
                        githubLink={project.githubLink}
                        deployLink={project.deployedLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
