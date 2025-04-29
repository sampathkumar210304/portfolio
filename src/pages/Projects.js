import '../Styles/Projects.css';

const projects = [
  {
    title: "Robot Jokes Generator",
    description: "Displays random robot-themed jokes using HTML, CSS, JavaScript.", // Replace with your project image
    link: "https://your-project-link.com"
  },
  {
    title: "Speech to Text App",
    description: "Real-time voice-to-text conversion using Web APIs.",
    link: "https://your-project-link.com"
  },
  {
    title: "Text to Voice App",
    description: "Reads out user input using Speech Synthesis API.",
    link: "https://your-project-link.com"
  },
  {
    title: "Password Generator",
    description:"Password Generator created using Python and a GUI to quickly generate strong, random passwords with customizable options",
    link: "https://github.com/sampathdheekonda/Password-Generator"
  }
  // Add more projects like this...
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
