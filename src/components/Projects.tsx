const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>React Portfolio Website</h3>
          <p>
            Designed and developed a personal portfolio website using React and
            TypeScript to showcase skills and projects.
          </p>
          <ul>
            <li>Built reusable React components</li>
            <li>Implemented responsive UI using CSS</li>
            <li>Used Git & GitHub for version control</li>
            <li>Deployed the application on Netlify</li>
          </ul>
          <a
            href="https://github.com/PONNI1715/react-portfolio"
            target="_blank"
          >
            GitHub Repository →
          </a>
        </div>

        <div className="project-card">
          <h3>Dashboard UI</h3>
          <p>
            Created a responsive dashboard interface using React components and
            modern CSS practices.
          </p>
          <ul>
            <li>Implemented clean UI layout</li>
            <li>Focused on component reusability</li>
            <li>Improved user experience with proper spacing</li>
          </ul>
          <a href="https://github.com/PONNI1715" target="_blank">
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
