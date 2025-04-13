import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['Home', 'About', 'Experience', 'Projects'];
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/ewilbert7', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/eworitsewarami-wilbert/', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:wilbertej1@gmail.com', label: 'Email' },
    { icon: <FileText className="w-5 h-5" />, href: 'https://medium.com/@wilbertej1', label: 'Medium' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <img src="../res/EW.png" alt="Your Logo" className="h-8" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="text-sm transition-colors hover:text-blue-400 text-gray-300"
                >
                  {section}
                </button>
              ))}
              <div className="flex items-center space-x-4 ml-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="block px-3 py-2 text-base w-full text-left hover:bg-gray-800 rounded-md"
                >
                  {section}
                </button>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-2">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-animate">
           Hi, I'm Eworitse
          </h1>
          <div className="typing-effect">
          <p className="text-xl sm:text-2xl text-gray-400 mb-4">
            Computer Science Student at the University of St Andrews
          </p>
          </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-3xl font-bold mb-8 ">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  I'm a second-year <b>Computer Science student</b> at the <b><a href="https://www.st-andrews.ac.uk/">University of St Andrews. </a></b>
                  I'm an avid learner with interests in AI, full-stack development, quantum computing and the future of technology generally.
                </p>
                <p className="text-gray-300 text-lg">
                  Outside of university, I'm passionate about music, football, video games and community-building.
                </p>
                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-medium">Here are some technologies I've been working with:</h3>
                  <div className="grid grid-cols-2 gap-2 text-m">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">▹</span>
                      <span>Java (Spring Boot)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">▹</span>
                      <span>React.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">▹</span>
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">▹</span>
                      <span>Python</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">▹</span>
                      <span>Javascript ES6+</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">▹</span>
                      <span>C</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="relative">
                    <img
                      src="../res/17A5B518-9DFB-4F10-95A1-AE8B6C838F2B.JPG"
                      alt="Profile"
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
                  </div>
                  <div className="absolute -inset-0.5 bg-blue-500/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h2 className="text-3xl font-bold mb-8">Technical Experience</h2>
            <div className="space-y-12">
            <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">Spring into Software Engineering Intern</h3>
                <p className="text-blue-400">JPMorganChase • Spring 2025</p>
                <p className="text-gray-300 mt-2">
                Developed an AI-powered mentor recruitment platform in the Code for Good hackathon. Networked with senior engineers, participated in workshops on agile development and Git/GitHub, and gained insights into the company’s culture through team-building activities.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">Backend Engineer Intern</h3>
                <p className="text-blue-400">Remita • Summer 2024</p>
                <p className="text-gray-300 mt-2">
                Worked in core platform development team. Engineered secure authentication APIs, built a voting app reducing result analysis time by 70%, presented projects to 100+ employees.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">AI Ambassador</h3>
                <p className="text-blue-400">Inspirit AI • April 2025</p>
                <p className="text-gray-300 mt-2">
                Promoted ethical AI awareness through workshops and discussions, inspiring peers to explore AI’s real-world impact.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">Core Team Member</h3>
                <p className="text-blue-400">St Andrews Fintech Society - AI Division • September 2024 - Present</p>
                <p className="text-gray-300 mt-2">
                  Learnt key concepts at the intersection of finance & AI. Working on scalable fintech projects with members.
                </p>
              </div>

                {/* Mini Section: Additional Roles */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Non-Technical Experience</h3>
                <div className="space-y-8">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold">Director</h4>
                    <p className="text-purple-400">St Andrews Africa Summit • December 2024 - Present</p>
                    <p className="text-gray-300 mt-2">
                    Spearheading a team, in tandem with the Senior Director, to organise events that foster awareness and connections between St Andrews students and African culture, history, and current affairs.
                    </p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold">Vice-President</h4>
                    <p className="text-purple-400">St Andrews African Caribbean Society • March 2025 - Present</p>
                    <p className="text-gray-300 mt-2">
                    Support the President in overseeing the society's activities and strategic direction. Organize events, lead initiatives promoting African and Caribbean culture, and ensure inclusivity and community engagement within the society.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PathMatch */}
              <div className="bg-gray-800 rounded-lg p-6 group">
                <h3 className="text-xl font-semibold">PathMatch</h3>
                <p className="text-sm text-blue-400 mb-2">JPMorgan Code for Good {/* • Runner-Up (add after jpmorgan decision) */}• April 2025</p>
                <p className="text-gray-300 mb-4">
                  AI-powered platform to streamline mentor recruitment for MCR Pathways with an assisted matching algorithm.
                </p>
                <p className="text-sm text-gray-400 mb-4">React, TailwindCSS, Django, Gemini API</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/cfgglasgow25/Team-1" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Online Voting System */}
              <div className="bg-gray-800 rounded-lg p-6 group">
                <h3 className="text-xl font-semibold">Vota</h3>
                <p className="text-sm text-blue-400 mb-2">Personal Project • August 2024</p>
                <p className="text-gray-300 mb-4">
                  Full-stack voting app with Spring Boot, React, and PostgreSQL. Reduced result processing time by 70%.
                </p>
                <p className="text-sm text-gray-400 mb-4">Java, Spring Boot, React, Vite, PostgreSQL, Axios</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/ewilbert7/vota" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
              {/* Candidate Connect */}
              <div className="bg-gray-800 rounded-lg p-6 group">
                <h3 className="text-xl font-semibold">Candidate Connect</h3>
                <p className="text-sm text-blue-400 mb-2">STACS Hackathon Sem 1 2024/25 • Nov 2024</p>
                <p className="text-gray-300 mb-4">
                  Game that matches political candidates to users based on facial reactions. Reached 85% model accuracy.
                </p>
                <p className="text-sm text-gray-400 mb-4">Pygame (Python), OpenCV, TensorFlow, Docker</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/ewilbert7/STACSHackTheBubble2024" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

          <div className="bg-gray-800 rounded-lg p-6 group">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-sm text-blue-400 mb-2">Personal Project • April 2025</p>
            <p className="text-gray-300 mb-4">
              A dynamic portfolio website to showcase my skills, projects, and achievements. 
            </p>
            <p className="text-sm text-gray-400 mb-4">Typescript, TailwindCSS, JavaScript</p>
            <div className="flex space-x-4">
              <a href="https://github.com/ewilbert7/portfolio" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            </div>
          </div> 
           {/* Facial Emotion Detector */}
           <div className="bg-gray-800 rounded-lg p-6 group">
                <h3 className="text-xl font-semibold">Facial Emotion Detector</h3>
                <p className="text-sm text-blue-400 mb-2">Inspirit AI • Best Presentation • Dec 2022</p>
                <p className="text-gray-300 mb-4">
                  Bias-aware emotion classifier using CNN, OpenCV & TensorFlow. Achieved 68.5% accuracy across diverse features.
                </p>
                <p className="text-sm text-gray-400 mb-4">Python, OpenCV, TensorFlow, Docker</p>
                <div className="flex space-x-4">
                  <a href="https://docs.google.com/presentation/d/1iEVngD2gN5JQGmqjGH35sOb6It2__fZJ2Tgcpqv_NbE/edit#slide=id.g6c52a2e8d8_0_177" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <span>Presentation</span>
                  </a>
                </div>
              </div> 

    </div>
  </div>
</section>
      </main>
      <footer className="bg-gray-900 text-gray-100 text-center py-4">
      <p className="font-mono text-sm">
        Built and designed by <strong>Eworitse Wilbert</strong>. Original idea credits to <strong>Gazi Jarin</strong>. All rights reserved &copy; 2025
      </p>
    </footer>
    </div>
    
  );
}

export default App;