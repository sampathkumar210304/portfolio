import '../Styles/About.css';

function About() {
    return (
      <section className="section about">
        <h2>About Me</h2>
        <p>
          I am a B.Tech student at Swami Vivekananda Institute of Technology, specializing in Artificial Intelligence, 
          graduating in 2025. I am passionate about exploring the world of AI, machine learning, and web development. 
          I enjoy solving real-world problems through innovative tech solutions and continuously upgrading my skillset.
        </p>
        <p>
          Apart from coding, I have a strong interest in building creative web applications that are user-friendly 
          and impactful. I'm always eager to learn new technologies and contribute to meaningful projects.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-box">
         <span> <strong>Programming Languages:</strong> Python, JavaScript,C</span>
         <span> <strong>Framework:</strong> React JS</span>
         <span> <strong>Tools:</strong> Visual Studio Code, GitHub</span>
         <span> <strong>Other:</strong>HTML,CSS,JS</span>
          </div>
        </div>
      </section>
      
    );
  }
  
  export default About;
  