function About() {
  const skills = [
    { name: "SQL", proficiency: 100 },
    { name: "Statistical Data Analysis", proficiency: 100 },
    { name: "Tableau", proficiency: 80 },
    { name: "Microsoft Power BI", proficiency: 85 },
    { name: "Python", proficiency: 80 },
    { name: "Web Development", proficiency: 100 },
    { name: "Back-End Web Development", proficiency: 80 },
    { name: "System Architecture", proficiency: 80 },
    { name: "Product Design ", proficiency: 80 },
    { name: "AI Tools Expert ", proficiency: 80 }
  ];

  return (
    <section id="about" className="py-16 bg-dark-surface">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-primary">Profile</h3>
            <p className="text-text-secondary mb-6">
              Detail-oriented Data Analyst at Deepnex Technology, leveraging Python, SQL, Excel, and Power BI to transform raw data into actionable insights. Skilled in data cleaning, dashboard creation, and storytelling to drive strategic decisions and improve business performance by 25%.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">📧</span> saurabhpatil0302@gmail.com
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔗</span> 
                  <a 
                    href="https://www.linkedin.com/in/saurabh-patil-459705250" 
                    className="text-primary hover:text-indigo-400" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span> 9104572210
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📍</span> Surat, Gujarat, 394210, India
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-dark-bg rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-dark-bg rounded-full text-sm">Hindi</span>
                <span className="px-3 py-1 bg-dark-bg rounded-full text-sm">Marathi</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-dark-bg p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;