import '../Styles/Projects.css';

const projects = [
  {
    title:"Portfolio",
    description:"Showcasing my React projects, certifications, and tech journey. Connect to learn more.",
    link:"https://portfolio-sampathkumar210304s-projects.vercel.app/"
  },
  {
    title: "Robot Jokes Generator",
    description: "Displays random robot-themed jokes using HTML, CSS, JavaScript.", 
    link: "https://robot-jokes-generator.vercel.app/"
  },
  {
    title: "Speech to Text App",
    description: "Real-time voice-to-text conversion using Web APIs.",
    link: "https://speech-to-text-application-omega.vercel.app/"
  },
  {
    title: "Text to Voice App",
    description: "Reads out user input using Speech Synthesis API.",
    link: "https://text-to-voice-application.vercel.app/"
  },
  {
    title: "Password Generator",
    description:"Password Generator created using Python and a GUI to quickly generate strong, random passwords with customizable options",
    link: "https://github.com/sampathkumar210304/Password-generator"
  },
  {
    title: "Weather-Dashboard",
    description:"A weather app built with React that shows real-time weather data using an external API.",
    link: "https://weather-dashboard-lilac-sigma.vercel.app/"
  },
  {
    title:"Star rating",
    description:"A star rating shows user feedback using stars (usually 1 to 5) to rate quality or satisfaction. More stars mean a better rating.",
    link:"https://star-rating-gamma-five.vercel.app/"
  },
  {
    title:"Search Functionality",
    description:"Search functionality allows users to quickly find specific content or items by typing keywords into a search bar. It filters and displays matching results in real time.",
    link:"https://search-funcationality.vercel.app/"
  },
  {
    title:"Quick URLs",
    description:"Quick URLs are short links that give fast access to specific web pages.",
    link:"https://quick-ur-ls.vercel.app/"
  },
  {
    title:"Image Carousel",
    description:"An image carousel is a slideshow feature that lets users view multiple images by sliding or clicking through them, usually one at a time.",
    link:"https://image-carousel-wine.vercel.app/"
  },
  {
    title:"Notes Taking Application",
    description:"A Notes Taking Application lets users write, save, edit, and delete notes. It's useful for organizing thoughts, tasks, or reminders in one place.",
    link:"https://notes-taking-application-six.vercel.app/"
  },
  {
    title:"Percentage Calculator",
    description:"A Percentage Calculator helps users quickly find percentages, percentage increase/decrease, or what percent one number is of another.",
    link:"https://percentage-calculator-xi-ruddy.vercel.app/"
  },
    {
    title:"Piano Application",
    description:"A Piano Application is a virtual keyboard that lets users play musical notes using mouse clicks or keyboard keys, simulating a real piano.",
    link:"https://piano-application-virid.vercel.app/"
  },
  {
    title:"Age Calculator",
    description:"An Age Calculator computes a person's age based on their date of birth by calculating the difference between the birth date and the current date.",
    link:"https://age-calculator-zeta-hazel.vercel.app/"
  },
  {
    title:"Cash Calculator",
    description:"A Cash Calculator helps count and total different currency bills and coins quickly to find the total cash amount.",
    link:"https://cash-calculator-nine.vercel.app/"

  },
  {
    title:"Color Flipper",
    description:"A Color Flipper is a tool that changes the background or element color randomly or on user action, creating a dynamic and colorful effect.",
    link:"https://color-flipper-nine-alpha.vercel.app/"
  },
  {
    title:"Animated Counter",
    description:"An Animated Counter displays numbers that smoothly count up or down, often used to highlight stats or milestones in a visually engaging way.",
    link:"https://animated-counter-lime.vercel.app/"
  },
  {
    title:"Calculator",
    description:"A Calculator is a tool that performs basic or advanced arithmetic operations like addition, subtraction, multiplication, and division.",
    link:"https://calculator-amber-one-21.vercel.app/"
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