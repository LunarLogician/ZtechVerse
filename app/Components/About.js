"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggleFlip = () => {
    if (isMobile) setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-full h-[320px] perspective cursor-pointer"
      onClick={handleToggleFlip}
    >
      <div className={`relative w-full h-full duration-700 transform-style preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[var(--secondary)] border border-primary/20 rounded-2xl p-6 shadow-md backdrop-blur-md flex flex-col justify-center items-center">
          <div className="text-4xl mb-3 text-primary">{project.icon}</div>
          <h3 className="text-xl font-bold text-primary mb-2 text-center">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 text-center text-primary">{project.description}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[var(--secondary)] border border-primary/20 rounded-2xl p-6 shadow-md backdrop-blur-md flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Stack:</h4>
            <div className="flex flex-wrap gap-3">``
              {project.tech.map((tech) => (
                <span key={tech} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass text-xs px-3 py-1.5"
            >
              🔗 Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass text-xs px-3 py-1.5"
            >
              📂 GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const tabs = ['about', 'experience', 'projects', 'certifications', 'skills'];
  const [activeTab, setActiveTab] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
 

  const projects = [
    {
      id: 1,
      title: "SigCoin Mining Web Application",
      description: "Cryptocurrency mining application allowing users to earn virtual coins by watching ads and engaging in mining sessions. Features real-time progress tracking, rewards system (1 SigCoin = $0.50), and production deployment on Render.",
      tech: ["JavaScript", "EJS", "MongoDB", "Express", "JWT", "Tailwind CSS", "GSAP", "Next.js", "Docker"],
      icon: "₿",
      color: "from-yellow-500/20 to-orange-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with secure JWT authentication, bcrypt password hashing, and MongoDB integration. Features user registration, exclusive content access, and MVC architecture with React frontend and EJS server-side rendering.",
      tech: ["JavaScript", "React", "Node.js", "Express.js", "JWT", "MongoDB", "Bcrypt"],
      icon: "🛒",
      color: "from-blue-500/20 to-purple-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Full-Stack RAG Application",
      description: "Migrated Flask services to FastAPI, consolidating three separate services into one efficient application. Features AI integration with ClimateBERT and FinBERT for ESG analysis, real-time document analysis, and interactive chat functionality.",
      tech: ["FastAPI", "Python", "Pydantic", "ClimateBERT", "FinBERT", "OpenAI API", "React", "Next.js", "Tailwind CSS"],
      icon: "🤖",
      color: "from-purple-500/20 to-blue-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Blogging Website",  
      description: "Full-stack blogging platform with CRUD operations, JWT authentication, bcrypt password hashing, file uploads for blog images, and role-based access. Deployed on Render with MongoDB Atlas cloud storage.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Tailwind CSS", "Vite"],
      icon: "📝",
      color: "from-green-500/20 to-teal-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Travel City Tracker",
      description: "Interactive travel tracking app with PostgreSQL database integration, SVG world map visualization, and CSV import functionality. Features dynamic country highlighting and responsive design across all devices.",
      tech: ["Node.js", "Express", "PostgreSQL", "EJS", "SVG", "Body-Parser", "CSV Import"],
      icon: "🌍",
      color: "from-pink-500/20 to-red-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "NewsPaper Website",
      description: "Dynamic news website fetching real-time articles using News API. Features React Router for seamless navigation, Axios for efficient API calls, and responsive UI with Tailwind CSS and optimized performance.",
      tech: ["JavaScript", "Node.js", "APIs", "React", "Tailwind CSS"],
      icon: "📰",
      color: "from-blue-500/20 to-cyan-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 7,
      title: "2D Sword Fighting Game",
      description: "Immersive C++ game utilizing Qt framework and SFML. Features advanced OOP concepts, detailed character customization, dynamic health management system, and responsive gameplay mechanics.",
      tech: ["C++", "Qt", "SFML", "OOP"],
      icon: "⚔️",
      color: "from-red-500/20 to-pink-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 8,
      title: "Live Stock Simulator",
      description: "Real-time stock analyzer simulator using C++ in RAD environment. Demonstrates deep understanding of Data Structures and Algorithms (DSA) to efficiently manage and analyze stock market data.",
      tech: ["C++", "DSA"],
      icon: "📈",
      color: "from-green-500/20 to-yellow-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 9,
      title: "Social Media App with Sockets",
      description: "Real-time social media application using Python, Tkinter, and socket programming. Features user authentication, real-time chat with message persistence, image upload/sharing, friend request system, and Instagram-inspired UI using CustomTkinter.",
      tech: ["Python", "Tkinter", "Socket Programming", "JSON", "CustomTkinter"],
      icon: "💬",
      color: "from-purple-500/20 to-indigo-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 10,
      title: "MLSA Microsoft Chapter Website",
      description: "Dynamic and responsive website for Microsoft Learn Student Ambassadors chapter. Features organizational details, team structure, member profiles, and comprehensive event information with reusable React components.",
      tech: ["React.js", "JavaScript", "HTML", "CSS"],
      icon: "🏢",
      color: "from-blue-500/20 to-purple-500/20",
      link: "#",
      github: "#"
    },
    {
      id: 11,
      title: "Drum Kit & BMI Calculator",
      description: "Interactive drum kit and BMI calculator using HTML, CSS, and JavaScript. Features DOM manipulation for dynamic updates, responsive design principles, and categorizes BMI results based on health guidelines.",
      tech: ["JavaScript", "jQuery", "DOM", "HTML", "CSS"],
      icon: "🥁",
      color: "from-orange-500/20 to-red-500/20",
      link: "#",
      github: "#"
    }
  ];

const certifications = [
  {
    id: 1,
    title: "Full-Stack Web Developer",
    issuer: "Udemy",
    description: "HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3 and DApps",
    date: "2024",
    badge: "🎓",
    level: "Professional"
  },
  {
    id: 2,
    title: "Ethical Hacking Fundamentals",
    issuer: "Coursera",
    description: "Cybersecurity and ethical hacking principles",
    date: "Apr 19, 2025",
    badge: "🔒",
    level: "Certified"
  },
  {
    id: 3,
    title: "JavaScript Certification Test - Youtube Course",
    issuer: "KG Coding",
    description: "Advanced JavaScript programming concepts",
    date: "12 July 2024",
    badge: "⚡",
    level: "Advanced"
  },
  {
    id: 4,
    title: "Node JS Certification Course",
    issuer: "Programming Hub",
    description: "Backend development with Node.js",
    date: "July 25, 2024",
    badge: "🟢",
    level: "Certified"
  },
  {
    id: 5,
    title: "Beginning C++ Programming - From Beginner to Beyond",
    issuer: "Udemy",
    description: "C++14, C++17, OOP and STL skills",
    date: "July 24, 2024",
    badge: "⚙️",
    level: "Professional"
  },
  {
    id: 6,
    title: "QT Workshop Technical Support",
    issuer: "Yota & Bahria University",
    description: "Technical workshop on Qt framework and UI support",
    date: "October 03, 2024",
    badge: "🛠️",
    level: "Workshop"
  },
  {
    id: 7,
    title: "CompPEC 2024 Participation",
    issuer: "Comsats University Islamabad",
    description: "Participated in tech competition showcasing web and software projects",
    date: "2024",
    badge: "📜",
    level: "Participant"
  },
  {
    id: 8,
    title: "Certificate of Appreciation",
    issuer: "TEDx Bahria University",
    description: "Attended the TEDx event held at Bahria University Islamabad Campus on 9th December 2023. The theme, 'Radical Reframe', provided a platform for enriching discussions and insights. By attending this session, the participant demonstrated a commitment to intellectual exploration and a keen interest in the diverse range of ideas presented.",
    date: "9th December 2023",
    badge: "📜",
    level: "Attendee"
  },
  {
    id: 9,
    title: "Certificate of Appreciation",
    issuer: "MIRC (ABRAS INSTITUTE)",
    description: "Successfully completed the quiz competition in Seerat Exhibition.",
    date: "Unknown (no date on certificate)",
    badge: "📜",
    level: "Participant"
  },
  {
    id: 10,
    title: "Express JS Certification Course",
    issuer: "Programming Hub",
    description: "Knowledge of Express JS programming.",
    date: "July 25, 2024",
    badge: "🟢",
    level: "Certified"
  },
  {
    id: 11,
    title: "Git Certification Course",
    issuer: "Programming Hub",
    description: "Knowledge of Git programming.",
    date: "July 27, 2024",
    badge: "⚙️",
    level: "Certified"
  },
  {
    id: 12,
    title: "Foundations of Cybersecurity",
    issuer: "Coursera (authorized by Google)",
    description: "Successfully completed an online non-credit course.",
    date: "Jun 4, 2025",
    badge: "🔒",
    level: "Certified"
  },
  {
    id: 13,
    title: "Certificate of Recognition",
    issuer: "Bahria University Parliamentary Debates (BUPD)",
    description: "Participated as an Organizer of Bahria University Parliamentary Debates (BUPD).",
    date: "8th-9th June 2024",
    badge: "📜",
    level: "Organizer"
  }
];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
    "Python", "C++", "HTML", "CSS", "Tailwind CSS", "MongoDB", "PostgreSQL", 
    "SQL", "Firebase", "JWT", "Docker", "Git", "GitHub Actions", "Postman"
  ];

  const experience = [
    {
      id: 1,
      title: "Node.js Team Lead",
      company: "CodeCrafters",
      period: "Aug 2024 - Dec 2024",
      location: "Remote",
      description: "Leading development team, designing backend architecture, mentoring junior developers, and ensuring code quality through rigorous testing.",
      icon: "👨‍💼"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "QuantaByte",
      period: "Mar 2024 - Aug 2024",
      location: "Pakistan",
      description: "Developed web applications using React.js and Node.js, implemented RESTful APIs, and managed CI/CD pipelines with Git.",
      icon: "💻"
    },
    {
      id: 3,
      title: "Founder & Owner",
      company: "Khyberkicks",
      period: "Jan 2024 - Apr 2024",
      location: "Pakistan",
      description: "Launched e-commerce brand achieving 20% sales increase, designed Shopify stores, and implemented digital marketing campaigns.",
      icon: "🚀"
    },
    {
      id: 4,
      title: "Director IT",
      company: "Microsoft Learn Student Ambassadors – Bahria University",
      period: "June 2024 – 2025",
      location: "Islamabad, Pakistan",
      description: "Overseeing all IT operations and web development initiatives within the MLSA chapter. Led technical teams to manage event platforms, automate workflows, and maintain official websites. Coordinated with cross-functional student teams to del",
      icon : "💻"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in full-stack development using React, Next.js, Node.js, Express, Python, and modern databases like MongoDB and PostgreSQL. I also have experience with Docker, JWT, and cloud deployment.'
    },
    {
      question: 'Are you available for freelance or collaboration?',
      answer: 'Yes! I am open to freelance projects, collaborations, and open source contributions. Feel free to reach out via email or LinkedIn.'
    },
    {
      question: 'How can I contact you?',
      answer: 'You can contact me at zzubairahmed402@gmail.com or through my LinkedIn profile.'
    }
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="min-h-screen text-[var(--text)] py-12 md:py-20 px-4 md:px-6 relative overflow-hidden" id="about">
      {/* Sticky TOC Navigation */}
    
      {/* About Section */}
      <div id="about-main" className="max-w-7xl mx-auto relative z-10 top-6 mb-24">
        <div className="text-center mb-8 md:mb-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 glow-text ">
            About Me
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 md:mb-8"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary ">Muhammad Zubair</h3>
            <p className="text-lg md:text-xl text-gray-300 text-primary">Full Stack Web Developer</p>
            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-primary">
              <p className="text-sm md:text-base t-9 text-primary">
                I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Computer Science 
                at Bahria University Islamabad. With hands-on experience in modern web technologies, 
                I specialize in building scalable applications using React, Node.js, and various databases.
              </p>
              <p className="text-sm md:text-base">
                My journey spans from leading development teams at CodeCrafters to founding my own 
                e-commerce venture. I've successfully deployed production applications, implemented 
                CI/CD pipelines, and mentored junior developers in agile methodologies.
              </p>
              <p className="text-sm md:text-base">
                I'm particularly interested in emerging technologies like Web3, cryptocurrency applications, 
                and AI integration. My recent work includes building a cryptocurrency mining simulator 
                and deploying full-stack RAG applications with FastAPI.
              </p>
            </div>
            <div className="flex flex-wrap  gap-3 md:gap-4 pt-7 pb-7 gap-x-5 justify-end">
              <a href="mailto:zzubairahmed402@gmail.com" className="btn-glass text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                <span className="flex items-center gap-2">
                  📧 Email Me
                </span>
              </a>
              <a href="https://linkedin.com/in/zubair" target="_blank" rel="noopener noreferrer" className="btn-glass text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                <span className="flex items-center gap-2">
                  💼 LinkedIn
                </span>
              </a>
            </div>
          </div>
          {/* Stats Card */}
          <div className="bg-[var(--secondary)] rounded-2xl p-4 md:p-8 border border-primary/20 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
                <div className="text-sm md:text-base text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">2+</div>
                <div className="text-sm md:text-base text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">8+</div>
                <div className="text-sm md:text-base text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">20+</div>
                <div className="text-sm md:text-base text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div id="experience" className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 glow-text">
            Experience
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-primary/50 pl-8 ml-2">
          {experience.map((exp, index) => (
            <div key={exp.id} className="mb-12 relative">
              {/* Dot */}
              <div className="absolute -left-[1.05rem] top-2 w-5 h-5 rounded-full bg-gray-800 border-4 border-[var(--secondary)] shadow-lg"></div>

              {/* Job Title (moved near the line) */}
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-1 ml-3 pt-3">{exp.title}</h3>

              {/* Experience Content */}
              <div className="pl-1">
                <div className="flex  flex-col items-center gap-2 mb-1">
                  <div className="text-xl text-primary">{exp.icon}</div>
                  <p className="text-lg text-primary">{exp.company}</p>
                </div>
                <p className="text-sm text-primary mb-2">{exp.period} • {exp.location}</p>
                <p className="text-gray-300 leading-relaxed text-primary">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-7xl mx-auto relative z-10 mb-24 mt-16 md:mt-24 lg:mt-32 px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 glow-text ">
            Projects
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 md:mb-8"></div>
        </div>
        <div className="overflow-x-auto scrollbar-hide -mx-2 px-5">
          <div className="flex gap-13 md:gap-8 pb-2">
            {projects.map((project) => (
              <div key={project.id} className="min-w-[260px] max-w-[320px] w-full flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div id="certifications" className="max-w-7xl mx-auto relative z-10 mb-24 mt-16 md:mt-24 lg:mt-32 py-12">
        <div className="text-center mb-8 md:mb-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 glow-text ">
            Certifications
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 md:mb-8"></div>
        </div>
        <div className="overflow-x-auto scrollbar-hide -mx-2 px-2">
          <div className="grid grid-flow-col grid-cols-none gap-3 md:gap-6 pb-2 auto-cols-[80%] sm:auto-cols-[45%] md:auto-cols-[32%] lg:auto-cols-[24%]" style={{scrollSnapType: 'x mandatory'}}>
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="w-full h-full bg-[var(--secondary)] rounded-2xl p-3 sm:p-4 md:p-6 border border-primary/20 backdrop-blur-md hover:border-primary/40 transition-all duration-300 group overflow-hidden" style={{scrollSnapAlign: 'start'}}
              >
                <div className="text-center flex flex-col h-72">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4">{cert.badge}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1 sm:mb-2 group-hover:glow-text transition-all duration-300 break-words whitespace-normal overflow-hidden">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-1 sm:mb-2 break-words whitespace-normal overflow-hidden text-primary ">{cert.issuer}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-2 sm:mb-3 md:mb-4 text-primary break-words whitespace-normal overflow-hidden">
                    {cert.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto gap-1">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/20 text-primary rounded-full text-xs sm:text-sm">
                      {cert.level}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 text-primary ">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
    

  {/* Skills Section */}
  <div className="text-center mb-8 md:mb-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 glow-text ">
            Skills
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 md:mb-8"></div>
        </div>

  <div
  id="skills"
  className="max-w-5xl mx-auto bg-[var(--secondary)] border border-primary/30 text-[var(--primary)] font-mono rounded-xl shadow-xl px-6 py-8 md:py-12 mt-20 backdrop-blur-md"
>
  {/* Terminal header */}
  <div className="mb-6 text-lg md:text-xl text-primary glow-text">
    zubair@portfolio:~$ <span className="text-accent">show skills</span>
  </div>

  {/* Skill lines */}
  <div className="space-y-2 text-sm md:text-base pl-4 text-primary/90">
    {skills.map((skill) => (
      <div key={skill}>
        <span className="text-primary">&gt;</span> {skill.padEnd(16, " ")} <span className="text-green-400">✔</span>
      </div>
    ))}
  </div>
</div>














    
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50"></div>

      {/* FAQ Section */}
      <div id="faq" className="max-w-4xl mx-auto relative z-10 mb-24 mt-16 md:mt-24 lg:mt-32 py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 glow-text">
            FAQ
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-primary  text-primaryto-transparent mx-auto mb-6 md:mb-8"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[var(--secondary)] rounded-2xl border border-primary/20 backdrop-blur-md">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl text-primary"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-lg md:text-xl font-bold text-primary">{faq.question}</span>
                <ChevronDown
                  className={`ml-4 transition-transform duration-300 text-primary ${openFaq === idx ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              {openFaq === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-6 text-gray-300 text-base animate-fade-in-up text-primary"
                >
                  {faq.answer.includes('zzubairahmed402@gmail.com') ? (
                    <span>
                      You can contact me at <a href="mailto:zzubairahmed402@gmail.com" className="text-primary underline">zzubairahmed402@gmail.com</a> or through my <a href="https://linkedin.com/in/zubair" target="_blank" rel="noopener noreferrer" className="text-primary underline">LinkedIn</a> profile.
                    </span>
                  ) : faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;