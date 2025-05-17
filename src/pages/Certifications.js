import '../Styles/Certifications.css';

const certifications = [
{
  title: "Python for Beginners",
  description: "Python for Beginners introduces the basics of Python programming, covering simple syntax, data types, and foundational coding concepts.",
  link: "https://media.licdn.com/dms/image/v2/D5622AQGQ-UX3hskhVA/feedshare-shrink_800/feedshare-shrink_800/0/1730524727175?e=1750291200&v=beta&t=beHw-RTFzEF6NC-sh_so4bKisJnODNckwJ79Zd_o9VY"
},
{
  title: "30 HTML, CSS, and JavaScript Projects",
  description: "30 HTML, CSS, and JavaScript Projects is a program designed to help beginners learn the basics of HTML, CSS, and JavaScript.",
  link: "https://media.licdn.com/dms/image/v2/D5622AQGLB7ofqzLDwg/feedshare-shrink_2048_1536/B56ZUfIy9ZGsAo-/0/1739984155419?e=1750291200&v=beta&t=KLWPEH_tF__oW50YnK1VE7x0UyfysKOLaFu_wy_aCTU"
},
  {
   title: "Introduction to AI",
   description: "Introduction to AI is a program designed to help beginners learn the basics of AI.",
   link: "https://media.licdn.com/dms/image/v2/D5622AQFrfYIhrLeyxQ/feedshare-shrink_800/feedshare-shrink_800/0/1733641181224?e=1750291200&v=beta&t=uo6n_ozE7FpBZUQY2Tizw37jIPOA9oB-3QQF97oW6e0" 
  },
  {
    title: "Introduction to CSS",
    description: "CSS (Cascading Style Sheets) is used to style and design HTML elements, making web pages look attractive with colors, layouts, and fonts.",
    link: "https://media.licdn.com/dms/image/v2/D5622AQET1waCMUkYRA/feedshare-shrink_800/feedshare-shrink_800/0/1733641412206?e=1750291200&v=beta&t=cZ0qNzyVAWlI7cbqnG3kjzY5KhWtq1Qw-uOgiBVIOD8"
  },
  {
    title: "Introduction to HTML",
    description: "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
    link: "https://media.licdn.com/dms/image/v2/D5622AQGSGLtZHYzVKg/feedshare-shrink_800/feedshare-shrink_800/0/1733640656751?e=1750291200&v=beta&t=pueplyvvBQcssxjta6F4fTtf6X-wqEEgEVXrcpY1Do0"
  },
  {
    title: "Introduction to JavaScript",
    description: "JavaScript is a programming language that allows you to implement complex features on web pages.",
    link: "https://media.licdn.com/dms/image/v2/D5622AQEoz0xGg1Eb_Q/feedshare-shrink_800/feedshare-shrink_800/0/1733641885595?e=1750291200&v=beta&t=VPRN66k3xBEZlIzQqqGOeFb-4VRapRimTk_XkjASrCA"
  },
  {
    title: "TCS iON Career Edge - Young Professiona",
    description: "TCS iON Career Edge - Young Professional is a program designed to help young professionals develop their skills and knowledge in the workplace.",
    link: "https://media.licdn.com/dms/image/v2/D5622AQHmHXZu5phRDA/feedshare-shrink_800/feedshare-shrink_800/0/1733837542667?e=1750291200&v=beta&t=Pdkxbo7FIjbkX1ROJAwmkn3yzYFh3DOb7QeiYplQWfk"
  },
  {
    title: "Java for Beginners",
    description: "Java for Beginners introduces the fundamentals of Java programming, covering basic syntax, object-oriented concepts, data types, loops, and functions..",
    link: "Java For Beginners_page-0001.jpg"
  },
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
