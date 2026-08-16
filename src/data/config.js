export const siteConfig = {
  name: "Chetan Sharma",
  title: "Full-Stack Developer & Computer Science Undergraduate",
  about: "I am a B.Tech Computer Science student specializing in the MERN stack, cloud integrations, and building scalable full-stack applications like automated grading systems and enterprise digital tools.",
  
  // Social Links (100% Functional & Active)
  socials: {
    github: "https://github.com/chetanschetan",
    linkedin: "https://www.linkedin.com/in/chetansharma34/",
    email: "chetansrs34@gmail.com",
  },

  // Skills Categories
  skills: [
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT/Bcrypt)"] },
    { category: "Databases", items: ["MongoDB", "MongoDB Atlas", "MySQL"] },
    { category: "DevOps & Cloud", items: ["Docker", "AWS (Elastic Beanstalk/EC2 basics)", "Vercel", "Render", "Git & GitHub"] }
  ],

  // Projects Array (Easily add or remove objects here)
  projects: [
    {
      id: "devflow",
      title: "DevFlow",
      description: "A dynamic web application featuring split deployment (Frontend on Vercel, Backend on Render) with robust endpoint routing and service integration.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
      liveUrl: "https://devflow-frontend-one.vercel.app/",
      githubFrontend: "https://github.com/chetanschetan/DevFlow_Platform",
      githubBackend: null, // Single repo project
    },
    {
      id: "pinnacle",
      title: "Pinnacle",
      description: "A full-stack accounting service application connected to a MongoDB Atlas cluster, featuring custom CORS handling and cloud deployment.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
      liveUrl: "https://pinnacle-frontend-aq6v.vercel.app/",
      githubFrontend: "https://github.com/chetanschetan/pinnacle-frontend",
      githubBackend: "https://github.com/chetanschetan/pinnacle-backend",
    },
    {
      id: "codegrade",
      title: "CodeGrade",
      description: "An automated grading system built with Node.js, Express, and React utilizing containerization to evaluate student-submitted Java code.",
      techStack: ["Node.js", "Express", "React", "Docker"],
      liveUrl: "#",
      githubFrontend: "#",
      githubBackend: "#",
    },
    {
      id: "iot-system",
      title: "Secure IoT System",
      description: "A secure hardware-software integration featuring a Python testing script communicating seamlessly with a Node.js backend.",
      techStack: ["Python", "Node.js", "IoT"],
      liveUrl: "#",
      githubFrontend: "#",
      githubBackend: "#",
    }
  ]
};