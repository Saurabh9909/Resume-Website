function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sales Dashboard",
      description: "Interactive Power BI dashboard for sales data analysis with forecasting capabilities.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["Power BI", "DAX", "SQL"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Python-based customer segmentation using K-means clustering for targeted marketing.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Automated Reporting System",
      description: "Automated SQL and Python-based reporting system that generates daily insights.",
      image: "https://via.placeholder.com/600x400",
      technologies: ["Python", "SQL", "Airflow"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-dark-surface rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-2"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-dark-bg rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={project.liveDemo} 
                    className="text-primary hover:text-indigo-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="text-primary hover:text-indigo-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;