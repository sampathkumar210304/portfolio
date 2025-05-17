import '../Styles/Home.css';

function Home() {
  const navItems = [
    {
      label: 'Projects',
      href: '#projects',
      description: 'Browse a showcase of my React and JavaScript projects.'
    },
    {
      label: 'Certifications',
      href: '#certifications',
      description: 'See the courses and programs I’ve completed from Coursera, Udemy, and more.'
    },
    {
      label: 'About',
      href: '#about',
      description: 'Learn more about me and my journey into tech.'
    },
    {
      label: 'Contact',
      href: '#contact',
      description: 'Let’s connect through email, phone, or LinkedIn.'
    }
  ];

  return (
    <section className="section home">
      <h1>Welcome to My Portfolio</h1>
      <p className="typing-effect">Artificial Intelligence Student | Web Developer</p>

      <div className="nav-section">
        {navItems.map((item, index) => (
          <div className="nav-row" key={index}>
            <div className="nav-description">{item.description}</div>
            <a href={item.href}>
              <button className="nav-button">{item.label}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
