import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SAURABH PATIL</h1>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">Data Analyst</h2>
          <p className="text-text-secondary mb-8 text-lg">
            Transforming raw data into actionable insights to drive strategic decisions.
          </p>
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">Business Analyst</h2>
          <p className="text-text-secondary mb-8 text-lg">
            Empowering businesses with data-driven insights and strategic planning.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-80 h-80 rounded-full bg-dark-surface border-4 border-primary overflow-hidden shadow-lg">
            <img 
              src={profileImage} 
              alt="Saurabh Patil" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;