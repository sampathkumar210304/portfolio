import '../Styles/Home.css';

function Home() {
  return (
    <section className="section home">
      <h1>Welcome to My Portfolio</h1>
      <p className="typing-effect">Artificial Intelligence Student | Web Developer</p>

      {/* Resume Download Button */}
      <a href="/resume.pdf" download className="resume-button">
        Download Resume
      </a>
    </section>
  );
}

export default Home;