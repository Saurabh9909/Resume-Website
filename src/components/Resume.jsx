function Resume() {
  return (
    <section id="resume" className="py-16 bg-dark-surface">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="flex justify-center mb-8">
          <a 
            href="#" 
            className="btn-primary flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Resume
          </a>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-xl font-semibold mb-6 text-primary">Work Experience</h3>
            <div className="relative border-l-2 border-primary pl-6 pb-6">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold">Data Analyst</h4>
              <p className="text-primary mb-2">Deepnex.in | Surat, Gujarat, India</p>
              <p className="text-text-secondary mb-4">Apr 2025 – Present</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Analyze data, build dashboards, and automate reports using SQL, Python, Excel, and Power BI.</li>
                <li>Deliver actionable insights that drive strategic decisions, enhance efficiency, and support a culture of innovation and data-driven thinking.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-6 text-primary">Education</h3>
            <div className="relative border-l-2 border-primary pl-6 pb-6">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold">Master of Computer Applications - MCA in Data Science</h4>
              <p className="text-primary mb-2">Bhagwan Mahavir University, Surat</p>
              <p className="text-text-secondary mb-4">Jul 2024 – Present</p>
            </div>
            <div className="relative border-l-2 border-primary pl-6">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold">Bachelor of Computer Applications</h4>
              <p className="text-primary mb-2">Veer Narmad South Gujarat University, Surat</p>
              <p className="text-text-secondary mb-4">Jul 2021 – Apr 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;