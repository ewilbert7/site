import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [selectedLeadership, setSelectedLeadership] = useState(0);

  const sections = ['Home', 'About', 'Experience', 'Projects', 'Awards'];
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
            <div className="mb-12 floating">
              <img src="../res/master-emerald.png" alt="Master Emerald" className="h-32 mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-100 text-animate">
              hi, i'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">eworitse</span>
            </h1>
            <div className="space-y-4 text-lg text-gray-300 max-w-2xl mx-auto">
              <p className="font-semibold">i enjoy building things</p>
              <p>
                I am an aspiring software engineer currently attending the University of St Andrews in the UK. I am fascinated by large-scale, high-impact systems and artificial intelligence.
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
                  I'm a penultimate-year <b>Computer Science student</b> at the <b><a href="https://www.st-andrews.ac.uk/">University of St Andrews. </a></b>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <h2 className="text-3xl font-bold mb-12">/ experience</h2>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Left Sidebar - Company Names */}
              <div className="w-full md:w-1/4 flex-shrink-0">
                <div className="space-y-1">
                  {[
                    { name: 'COVENDA AI', index: 0 },
                    { name: 'JPMORGAN CHASE', index: 1 },
                    { name: 'UNIVERSITY OF ST. ANDREWS', index: 2 },
                    { name: 'REMITA', index: 3 },
                    { name: 'INSPIRIT AI', index: 4 },
                    { name: 'ST ANDREWS FINTECH SOCIETY', index: 5 },
                  ].map((company) => (
                    <div 
                      key={company.name} 
                      className={`sidebar-item relative ${
                        selectedExperience === company.index ? 'active' : ''
                      }`}
                    >
                      {selectedExperience === company.index && (
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-400"></div>
                      )}
                      <button
                        onClick={() => setSelectedExperience(company.index)}
                        className={`w-full text-left py-3 px-4 transition-colors ${
                          selectedExperience === company.index
                            ? 'text-white'
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        {company.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Experience Details */}
              <div className="flex-1">
                {(() => {
                  const experiences = [
                    {
                      title: 'Software Engineer Intern',
                      company: 'Covenda AI',
                      date: 'SUMMER 2025',
                      bullets: [
                        'Building ML-powered cybersecurity tools to automate threat detection and risk management.',
                      ],
                    },
                    {
                      title: 'Spring into Software Engineering Intern',
                      company: 'JPMorgan Chase & Co.',
                      date: 'APR 2025',
                      bullets: [
                        'Selected as one of 38 out of 12,500+ applications (0.2% acceptance rate), demonstrating exceptional technical aptitude and gaining exposure to large-scale financial systems and cybersecurity protocols.',
                        'Completed intensive hands-on technical workshops in system design, collaborative development and agile sprints, applying industry-standard software engineering practices in a fast-paced environment.',
                      ],
                    },
                    {
                      title: 'Research Assistant',
                      company: 'University of St. Andrews, School of Computer Science',
                      date: 'SEP 2024 – DEC 2024',
                      bullets: [
                        'Improved problem-solving efficiency by 30% by engineering robust back-end integrations between "Conjure-Oxide" and SAT solvers, enabling faster and more scalable constraint satisfaction processing for complex optimization problems.',
                      ],
                    },
                    {
                      title: 'Backend Engineer Intern',
                      company: 'Remita',
                      date: 'JUN 2024 – SEP 2024',
                      bullets: [
                        'Reduced authentication error rates by 25% for 1,000+ users in a real-time financial system by building and scaling production-grade RESTful APIs using Java and Spring Boot, improving reliability and security in live deployments.',
                        'Cut result latency by 70% under high concurrency by engineering a distributed, event-driven voting platform with microservices and Docker.',
                        'Enabled rapid iteration and continuous delivery by implementing JWT-based authentication, container orchestration, and CI/CD pipelines, utilizing TDD and DDD principles to ensure maintainability and high test coverage.',
                      ],
                    },
                    {
                      title: 'AI Ambassador',
                      company: 'Inspirit AI',
                      date: 'APR 2025',
                      bullets: [
                        'Promoted ethical AI awareness through workshops and discussions, inspiring peers to explore AI\'s real-world impact.',
                      ],
                    },
                    {
                      title: 'Core Team Member',
                      company: 'St Andrews Fintech Society - AI Division',
                      date: 'SEP 2024 – PRESENT',
                      bullets: [
                        'Learnt key concepts at the intersection of finance & AI. Working on scalable fintech projects with members.',
                      ],
                    },
                  ];

                  const exp = experiences[selectedExperience];
                  return (
                    <div key={selectedExperience} className="experience-content space-y-4">
                      <div>
                        <h3 className="experience-title text-2xl font-semibold text-gray-100">
                          {exp.title} @ <span className="text-green-400">{exp.company}</span>
                        </h3>
                        <p className="experience-date text-gray-400 text-sm mt-1">{exp.date}</p>
                      </div>
                      <ul className="bullet-list space-y-3 mt-6">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="bullet-item flex items-start text-gray-300 group">
                            <span className="bullet-triangle text-green-400 mr-3 mt-1">▷</span>
                            <span className="bullet-text">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Leadership Section */}
            <div className="mt-24">
              <h3 className="text-3xl font-bold mb-12">/ leadership</h3>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Left Sidebar - Organization Names */}
                <div className="w-full md:w-1/4 flex-shrink-0">
                  <div className="space-y-1">
                    {[
                      { name: 'ROLI MABO FOUNDATION', index: 0 },
                      { name: 'ST ANDREWS ACS', index: 1 },
                      { name: 'ST ANDREWS AFRICA SUMMIT', index: 2 },
                    ].map((org) => (
                      <div 
                        key={org.name} 
                        className={`sidebar-item relative ${
                          selectedLeadership === org.index ? 'active' : ''
                        }`}
                      >
                        {selectedLeadership === org.index && (
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-400"></div>
                        )}
                        <button
                          onClick={() => setSelectedLeadership(org.index)}
                          className={`w-full text-left py-3 px-4 transition-colors ${
                            selectedLeadership === org.index
                              ? 'text-white'
                              : 'text-gray-400 hover:text-gray-300'
                          }`}
                        >
                          {org.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Leadership Details */}
                <div className="flex-1">
                  {(() => {
                    const leadership = [
                      {
                        title: 'Roli Mabo Foundation (RMF) Warri AI Bootcamp',
                        organization: 'Personal Teaching Initiative',
                        date: 'JUL 2025 – PRESENT',
                        bullets: [
                          'Designing and leading a remote AI bootcamp in Warri, Nigeria, teaching 2,000+ aspiring engineers (ages 15–25) practical skills in Python and AI fundamentals, empowering participants to apply tools in academics, business, and startups.',
                        ],
                      },
                      {
                        title: 'Vice-President',
                        organization: 'St Andrews African Caribbean Society',
                        date: 'MAR 2025 – PRESENT',
                        bullets: [
                          'Support the President in overseeing the society\'s activities and strategic direction. Organize events, lead initiatives promoting African and Caribbean culture, and ensure inclusivity and community engagement within the society.',
                        ],
                      },
                      {
                        title: 'Director',
                        organization: 'St Andrews Africa Summit',
                        date: 'DEC 2024 – PRESENT',
                        bullets: [
                          'Spearheading a team, in tandem with the Senior Director, to organise events that foster awareness and connections between St Andrews students and African culture, history, and current affairs.',
                        ],
                      },
                    ];

                    const lead = leadership[selectedLeadership];
                    
                    return (
                      <div key={`leadership-${selectedLeadership}`} className="experience-content space-y-4">
                        <div>
                          <h3 className="experience-title text-2xl font-semibold text-gray-100">
                            {lead.title} @ <span className="text-green-400">{lead.organization}</span>
                          </h3>
                          <p className="experience-date text-gray-400 text-sm mt-1">{lead.date}</p>
                        </div>
                        <ul className="bullet-list space-y-3 mt-6">
                          {lead.bullets.map((bullet, idx) => (
                            <li key={idx} className="bullet-item flex items-start text-gray-300 group">
                              <span className="bullet-triangle text-green-400 mr-3 mt-1">▷</span>
                              <span className="bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PathMatch */}
              <div className="bg-gray-800 rounded-lg p-6 group">
                <h3 className="text-xl font-semibold">PathMatch - AI-Enhanced Mentor Recruitment Platform</h3>
                <p className="text-sm text-blue-400 mb-2">JPMorgan Code for Good • April 2025</p>
                <p className="text-gray-300 mb-4">
                  Led an agile team of 6 to develop an AI-powered matching engine with Gemini API that boosted mentor-mentee compatibility by 60%. Streamlined mentor recruitment for MCR Pathways with an assisted matching algorithm.
                </p>
                <p className="text-sm text-gray-400 mb-4">React, Django, Gemini AI API</p>
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
                <h3 className="text-xl font-semibold">Chirply</h3>
                <p className="text-sm text-blue-400 mb-2">Personal Project • May 2025</p>
                <p className="text-gray-300 mb-4">
                  Built a full-stack federated microblogging platform simulating Twitter-like posting, following, and federation across distributed servers with RESTful APIs and configurable Java HTTP server.
                </p>
                <p className="text-sm text-gray-400 mb-4">Java, JavaScript, HTTP</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/ewilbert7/chirply-twitter-clone" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
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
              {/* Facial Detection System */}
              <div className="bg-gray-800 rounded-lg p-6 group">
                <h3 className="text-xl font-semibold">Facial Detection System for Algorithmic Bias</h3>
                <p className="text-sm text-blue-400 mb-2">Inspirit AI • Best Presentation • Dec 2022</p>
                <p className="text-gray-300 mb-4">
                  Developed a facial detection system addressing racial algorithmic bias, with 68.5% accuracy. Bias-aware emotion classifier using CNN, OpenCV & TensorFlow.
                </p>
                <p className="text-sm text-gray-400 mb-4">Python, Computer Vision, TensorFlow</p>
                <div className="flex space-x-4">
                  <a href="https://docs.google.com/presentation/d/1iEVngD2gN5JQGmqjGH35sOb6It2__fZJ2Tgcpqv_NbE/edit#slide=id.g6c52a2e8d8_0_177" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <span>Presentation</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Awards & Certifications Section */}
        <section id="awards" className="min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <h2 className="text-3xl font-bold mb-12 text-center">/ awards & certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg mt-1">▷</span>
                  <span className="text-gray-300">Top 150 Future Leader of Afro-Caribbean descent in the UK 25/26</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg mt-1">▷</span>
                  <span className="text-gray-300">Dean's List - University of St Andrews 2024/25</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg mt-1">▷</span>
                  <span className="text-gray-300">Awarded Royal Order of Iwere (ROI) title by Ogiame Atuwatse III, the Olu of Warri</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg mt-1">▷</span>
                  <span className="text-gray-300">J.P. Morgan Code for Good 2025 - Runner-Up</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg mt-1">▷</span>
                  <span className="text-gray-300">Distinction - International Year One Science at University of St Andrews</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-lg mt-1">▷</span>
                  <span className="text-gray-300">All Distinctions (9A1s) in WASSCE 2023</span>
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