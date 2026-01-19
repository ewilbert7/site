import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X, Moon, Sun, ChevronDown, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showFullNav, setShowFullNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Initialize theme based on time of day and apply to html element
  useEffect(() => {
    const hour = new Date().getHours();
    const prefersDark = hour < 6 || hour >= 18;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  // Update html class when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Handle scroll behavior for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const experienceSection = document.getElementById('experience');
      
      if (experienceSection) {
        const experienceBottom = experienceSection.offsetTop + experienceSection.offsetHeight;
        setShowFullNav(currentScrollY < experienceBottom - 200);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const sections = ['About', 'Experience', 'Projects', 'Awards'];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ewilbert7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eworitsewarami-wilbert/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:wilbertej1@gmail.com', label: 'Email' },
    { icon: FileText, href: 'https://medium.com/@wilbertej1', label: 'Medium' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Covenda AI',
      date: 'Summer 2025',
      description: 'Building ML-powered cybersecurity tools to automate threat detection and risk management.',
      link: 'https://covenda.ai',
    },
    {
      title: 'Spring into Software Engineering',
      company: 'JPMorgan Chase & Co.',
      date: 'Apr 2025',
      description: 'Selected as one of 38 out of 12,500+ applications (0.2% acceptance rate). Completed intensive hands-on technical workshops in system design, collaborative development and agile sprints.',
      link: 'https://www.jpmorganchase.com',
    },
    {
      title: 'Research Assistant',
      company: 'University of St. Andrews',
      date: 'Sep 2024 – Dec 2024',
      description: 'Improved problem-solving efficiency by 30% by engineering robust back-end integrations between "Conjure-Oxide" and SAT solvers for complex optimization problems.',
      link: 'https://www.st-andrews.ac.uk',
    },
    {
      title: 'Backend Engineer Intern',
      company: 'Remita',
      date: 'Jun 2024 – Sep 2024',
      description: 'Reduced authentication error rates by 25% for 1,000+ users. Cut result latency by 70% under high concurrency by engineering a distributed, event-driven voting platform.',
      link: 'https://remita.net',
    },
  ];

  const leadership = [
    {
      title: 'RMF Warri AI Bootcamp Lead',
      organization: 'Roli Mabo Foundation',
      date: 'Jul 2025 – Present',
      description: 'Designing and leading a remote AI bootcamp teaching 2,000+ aspiring engineers practical skills in Python and AI fundamentals.',
    },
    {
      title: 'Vice-President',
      organization: 'St Andrews African Caribbean Society',
      date: 'Mar 2025 – Present',
      description: 'Support the President in overseeing the society\'s activities. Organize events promoting African and Caribbean culture.',
    },
    {
      title: 'Director',
      organization: 'St Andrews Africa Summit',
      date: 'Dec 2024 – Present',
      description: 'Spearheading a team to organise events that foster awareness and connections between students and African culture.',
    },
  ];

  const projects = [
    {
      title: 'Harmoniq',
      subtitle: 'AI-Powered Playlist Recommendation System',
      event: 'Personal Project • January 2026',
      description: 'A model that predicts the next songs for a playlist based on audio features, lyrics sentiment, and listening patterns. Features a sleek web interface for personalized song recommendations.',
      tech: ['Python', 'Spotify API', 'Librosa', 'Machine Learning'],
      github: 'https://github.com/ewilbert7/harmoniq',
    },
    {
      title: 'PathMatch',
      subtitle: 'AI-Enhanced Mentor Recruitment Platform',
      event: 'JPMorgan Code for Good • April 2025',
      description: 'Led an agile team of 6 to develop an AI-powered matching engine with Gemini API that boosted mentor-mentee compatibility by 60%.',
      tech: ['React', 'Django', 'Gemini AI'],
      github: 'https://github.com/cfgglasgow25/Team-1',
    },
    {
      title: 'Vota',
      subtitle: 'Online Voting System',
      event: 'Personal Project • August 2024',
      description: 'Full-stack voting app with Spring Boot, React, and PostgreSQL. Reduced result processing time by 70%.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      github: 'https://github.com/ewilbert7/vota',
    },
    {
      title: 'Candidate Connect',
      subtitle: 'Political Matching Game',
      event: 'STACS Hackathon • Nov 2024',
      description: 'Game that matches political candidates to users based on facial reactions. Reached 85% model accuracy.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Docker'],
      github: 'https://github.com/ewilbert7/STACSHackTheBubble2024',
    },
    {
      title: 'Chirply',
      subtitle: 'Federated Microblogging Platform',
      event: 'Personal Project • May 2025',
      description: 'Built a full-stack federated microblogging platform simulating Twitter-like posting across distributed servers.',
      tech: ['Java', 'JavaScript', 'HTTP'],
      github: 'https://github.com/ewilbert7/chirply-twitter-clone',
    },
    {
      title: 'Facial Detection System',
      subtitle: 'Algorithmic Bias Detection',
      event: 'Inspirit AI • Best Presentation • Dec 2022',
      description: 'Developed a facial detection system addressing racial algorithmic bias, with 68.5% accuracy using CNN and OpenCV.',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      link: 'https://docs.google.com/presentation/d/1iEVngD2gN5JQGmqjGH35sOb6It2__fZJ2Tgcpqv_NbE/edit',
    },
  ];

  const awards = [
    'Top 150 Future Leader of Afro-Caribbean descent in the UK 25/26',
    'Dean\'s List - University of St Andrews 2024/25',
    'Awarded Royal Order of Iwere (ROI) title by Ogiame Atuwatse III, the Olu of Warri',
    'J.P. Morgan Code for Good 2025 - Runner-Up',
    'Distinction - International Year One Science at University of St Andrews',
    'All Distinctions (9A1s) in WASSCE 2023',
  ];

  const techStack = [
    'Java', 'Python', 'TypeScript', 'JavaScript', 'C', 'Haskell',
    'Spring Boot', 'React', 'Node.js', 'Django', 'TailwindCSS',
    'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git',
    'TensorFlow', 'OpenCV', 'REST APIs', 'Microservices'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">

      {/* Navigation - Logo always visible, full nav hides after Experience */}
      <nav className="fixed w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Always visible */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex items-center space-x-2 group"
            >
              <img src="res/EW.png" alt="EW" className="w-8 h-8 rounded-lg transition-transform group-hover:scale-110" />
              <span className={`font-semibold text-zinc-900 dark:text-white transition-opacity ${showFullNav ? 'opacity-100' : 'opacity-0'}`}>
                Eworitse Wilbert
              </span>
            </a>

            {/* Desktop Navigation - Hides after Experience */}
            <div className={`hidden md:flex items-center space-x-1 transition-all duration-300 ${showFullNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-4 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Right side - Theme toggle always visible */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400 text-lg hero-animate hero-animate-delay-1">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-animate hero-animate-delay-2">
                <span className="text-zinc-900 dark:text-white">Eworitse </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-serif italic">Wilbert</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed hero-animate hero-animate-delay-3">
                A passionate{' '}
                <span className="text-emerald-600 dark:text-emerald-400 underline decoration-2 underline-offset-4">
                  Software Engineer
                </span>{' '}
                and{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-serif italic">
                  Computer Science
                </span>{' '}
                student at the University of St Andrews, building impactful solutions with code.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bouncing Scroll Arrow */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="hero-arrow text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors animate-bounce"
              aria-label="Scroll to about"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white tracking-tight section-heading">
              <span className="text-emerald-600 dark:text-emerald-400 heading-slash">/</span>
              <span className="heading-text">about me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  I'm a{' '}
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    second-year Computer Science
                  </span>{' '}
                  student at the University of St Andrews with a passion for building scalable, secure, and impactful software solutions.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  My expertise spans{' '}
                  <span className="font-serif italic">backend systems</span>,{' '}
                  <span className="font-serif italic">AI/ML applications</span>, and{' '}
                  <span className="font-serif italic">full-stack development</span>. I thrive in fast-paced environments and love tackling complex problems with elegant code.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  When I'm not coding, you'll find me leading community initiatives, exploring new technologies, or sharing knowledge through teaching and mentorship.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-lg text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white tracking-tight section-heading">
              <span className="text-emerald-600 dark:text-emerald-400 heading-slash">/</span>
              <span className="heading-text">experience</span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <a
                  key={index}
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{exp.company}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{exp.description}</p>
                    </div>
                    <span className="text-zinc-500 dark:text-zinc-500 text-sm whitespace-nowrap">{exp.date}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Leadership */}
            <h3 className="text-2xl md:text-3xl font-bold mt-20 mb-8 text-zinc-900 dark:text-white tracking-tight section-heading">
              <span className="text-emerald-600 dark:text-emerald-400 heading-slash">/</span>
              <span className="heading-text">leadership</span>
            </h3>

            <div className="space-y-6">
              {leadership.map((lead, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">{lead.title}</h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{lead.organization}</p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{lead.description}</p>
                    </div>
                    <span className="text-zinc-500 text-sm whitespace-nowrap">{lead.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white tracking-tight section-heading">
              <span className="text-emerald-600 dark:text-emerald-400 heading-slash">/</span>
              <span className="heading-text">projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm">{project.subtitle}</p>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && !project.github && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 mb-3">{project.event}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="min-h-screen py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 dark:text-white tracking-tight section-heading">
              <span className="text-emerald-600 dark:text-emerald-400 heading-slash">/</span>
              <span className="heading-text">awards & recognition</span>
            </h2>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 text-lg mt-0.5">◆</span>
                  <span className="text-zinc-600 dark:text-zinc-400 text-lg">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-zinc-500">Available for opportunities</span>
          </div>
          <p className="text-sm text-zinc-500">
            Built by <span className="text-zinc-900 dark:text-white">Eworitse Wilbert</span> · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
