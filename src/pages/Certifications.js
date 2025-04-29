import '../Styles/Certifications.css';

const certifications = [
{
  title: "Python for Beginners",
  description: "Python for Beginners introduces the basics of Python programming, covering simple syntax, data types, and foundational coding concepts.",
  link: "https://www.linkedin.com/posts/sampath-dheekonda_python-learning-simplilearn-activity-7258346790276472832-tuOZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
},
{
  title: "30 HTML, CSS, and JavaScript Projects",
  description: "30 HTML, CSS, and JavaScript Projects is a program designed to help beginners learn the basics of HTML, CSS, and JavaScript.",
  link: "https://www.linkedin.com/posts/sampath-dheekonda_30-html-css-and-javascript-projects-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
},
  {
   title: "Introduction to AI",
   description: "Introduction to AI is a program designed to help beginners learn the basics of AI.",
   link: "https://www.linkedin.com/posts/sampath-dheekonda_introduction-to-ai-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE" 
  },
  {
    title: "Introduction to CSS",
    description: "CSS (Cascading Style Sheets) is used to style and design HTML elements, making web pages look attractive with colors, layouts, and fonts.",
    link: "https://www.linkedin.com/posts/sampath-dheekonda_css-learning-simplilearn-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
  },
  {
    title: "Introduction to HTML",
    description: "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
    link: "https://www.linkedin.com/posts/sampath-dheekonda_html-learning-simplilearn-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
  },
  {
    title: "Introduction to JavaScript",
    description: "JavaScript is a programming language that allows you to implement complex features on web pages.",
    link: "https://www.linkedin.com/posts/sampath-dheekonda_javascript-learning-simplilearn-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
  },
  {
    title: "TCS iON Career Edge - Young Professiona",
    description: "TCS iON Career Edge - Young Professional is a program designed to help young professionals develop their skills and knowledge in the workplace.",
    link: "https://www.linkedin.com/posts/sampath-dheekonda_tcs-ion-career-edge-young-professional-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
  },
  {
    title: "Java for Beginners",
    description: "Java for Beginners introduces the fundamentals of Java programming, covering basic syntax, object-oriented concepts, data types, loops, and functions..",
    link: "https://www.linkedin.com/posts/sampath-dheekonda_javascript-learning-simplilearn-activity-7258346790276472832-tuOZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBzTWoBTwH8zZdiKf0_WFefBZYGp9fM2XE"
  }
];

function Certifications() {
  return (
    <section className="certifications">
      <h2>My Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
