// ============================================================
//  PORTFOLIO DATA — edit everything here, nowhere else
// ============================================================

// ── Personal / Contact ──────────────────────────────────────
export const personal = {
  firstName: 'RONIE',
  lastName: 'SAMUEL',
  fullName: 'RONIE SAMUEL',
  initials: 'RS',
  tagline: '"Java Full Stack Engineer building web applications with Spring Boot and React. Shipping real products, end-to-end."',
  bio: 'Full Stack developer focused on building web applications with Java Spring Boot and React. Experienced in designing and securing REST APIs, working with relational databases through JPA/Hibernate, and connecting frontend interfaces to backend systems end-to-end. Looking for full-stack or backend engineering roles where I can build and ship real products.',
  email: 'ronieroysonsamuel@gmail.com',
  phone: '+91-9818607127',
  github: 'https://github.com/roniesam',
  linkedin: 'https://linkedin.com/in/ronie-samuel',
  resumePath: '/Ronie_Samuel_Resume.pdf',
  location: {
    city: 'Noida',
    state: 'UP',
    country: 'India',
    lat: '28.5355° N',
    long: '77.3910° E',
  },
  openToWork: true,
  heroStampText: 'OPEN TO WORK · FULL STACK ENGINEER · OPEN TO WORK · ',
  currentYear: '2026',
};

// ── About Stats Cards ────────────────────────────────────────
export const stats = [
  { label: 'EDUCATION', value: 'B.Tech', sub: 'ECM — VIT Chennai' },
  { label: 'DEVELOPMENT', value: '3+', sub: 'Systems Built' },
  { label: 'CERTIFIED', value: '4+', sub: 'Certifications' },
];

// ── Projects ─────────────────────────────────────────────────
// githubLink — set to null if no repo
// liveLink   — set to null if not deployed; if both exist, github takes priority display
export const projects = [
  {
    id: 1,
    name: 'DEVFORGE',
    description:'DevForge is a full-stack developer collaboration platform designed to streamline project management and team coordination. Users can create organizations, manage projects, assign and track tasks, collaborate through real-time activity logs, and organize teams with role-based access control. Built for developers, student teams, and tech communities, DevForge provides a centralized workspace to plan, collaborate, and monitor project progress efficiently.',
    year: '2026',
    stack: ['SPRING BOOT', 'NEXT JS', 'JWT', 'MYSQL', 'HIBERNATE'],
    githubLink: 'https://github.com/RonieSam/DevForge',
    liveLink: 'https://dev-forge-alpha.vercel.app/',
  },
  {
    id: 2,
    name: 'COLLAB SHEETS',
    description:
      'CollabSheets is a real-time collaborative spreadsheet application that enables multiple users to edit and manage documents simultaneously. It features live synchronization, user presence tracking, spreadsheet formulas, authentication, cell formatting, and XLSX export capabilities, delivering a lightweight alternative to traditional cloud spreadsheet tools.',
    year: '2025',
    stack: [
      'NEXT.JS',
      'FIREBASE',
      'FIRESTORE',
      'REAL-TIME SYNC',
      'TAILWIND CSS',
      'FORMULA ENGINE',
      'GOOGLE AUTH',
    ],
    githubLink: 'https://github.com/RonieSam/Collab-Sheets',
    liveLink: null,
  },
  {
    id: 3,
    name: 'BLOGFOLIO',
    description:
      'Blogfolio is a full-stack AI-powered blogging platform that enables users to create, manage, and share blog posts with role-based access control. The platform features AI-generated post summaries, secure authentication, image uploads, comments, search, and pagination, providing a complete content publishing experience. It supports different user roles including Admin, Author, and Viewer with database-level security policies.',
    year: '2025',
    stack: [
      'NEXT.JS',
      'SUPABASE',
      'POSTGRESQL',
      'TAILWIND CSS',
      'JWT AUTH',
      'ROLE-BASED ACCESS',
    ],
    githubLink: 'https://github.com/RonieSam/Blogfolio',
    liveLink: 'https://blogfolio-n1emqn3bj-roniesams-projects.vercel.app/',
  },
  {
    id: 4,
    name: 'AURA NEXUS',
    description:'Browser-based control and monitoring interface developed for the AURA ROV, enabling operators to manage underwater missions through a centralized dashboard. Features real-time sensor telemetry, camera feed integration, navigation controls, system diagnostics, and mission-critical data visualization, providing seamless communication between the operator and the vehicle during exploration, inspection, and competition tasks.',
    year: '2024',
    stack: ['REACT', 'JAVASCRIPT', 'REAL-TIME UI','PYTHON','ELECTRON JS','WEB SOCKETS'],
    githubLink: 'https://github.com/RonieSam/AURA-Nexus',
    liveLink: null,
  },
];

// ── Skills ───────────────────────────────────────────────────
// proficiency format: 'NN // LABEL'  (e.g. '01 // CORE')
export const skills = [
  { category: 'LANGUAGES',       stack: 'Java, JavaScript, Python, C++',                               proficiency: '01 // CORE' },
  { category: 'FRONTEND',        stack: 'React.js, HTML5, CSS3, Bootstrap, Material UI',                proficiency: '02 // ADVANCED' },
  { category: 'BACKEND',         stack: 'Spring Boot, Node.js, Express.js, REST APIs',         proficiency: '03 // ADVANCED' },
  { category: 'DATABASES',       stack: 'MySQL, PostgreSQL, MongoDB, Oracle SQL',                       proficiency: '04 // PROFICIENT' },
  { category: 'CLOUD & DEVOPS',  stack: 'AWS (EC2, S3, IAM), Docker, Git, CI/CD',                      proficiency: '05 // PROFICIENT' },
  { category: 'FRAMEWORKS',      stack: 'Spring MVC, Hibernate, Spring Data JPA, Postman',              proficiency: '06 // ADVANCED' },
  { category: 'CS FUNDAMENTALS', stack: 'DSA, OOP, Computer Networks, Operating Systems',              proficiency: '07 // SOLID' },
];

// ── Experience ───────────────────────────────────────────────
// endYear: null means 'PRESENT'
export const experience = [
  {
    id: 1,
    startYear: '2025',
    endYear: null,
    role: 'EMBEDDED PROGRAMMING LEAD',
    organization: 'Robotics Special Team — VIT University',
    contributions: [
      'Lead embedded firmware development for an underwater ROV, integrating sensor modules and control systems.',
      'Won Third Prize at National Gujarat RoboFest 2023 (Underwater Robot & Submarine Category).',
      'Mentor junior team members on embedded programming and hardware-software interfacing.',
    ],
  },
  {
  id: 2,
  role: "Web Developer",
  organization: "Amigos",
  startYear: 2025,
  endYear: null,
  contributions: [
    "Designed and developed responsive websites for social-impact initiatives and community outreach programs.",
    "Optimized website performance, accessibility, and SEO to improve search visibility and user engagement.",
    "Implemented modern frontend solutions using React, Tailwind CSS, and JavaScript.",
    "Managed website maintenance, content updates, and deployment workflows.",
    "Collaborated with stakeholders to translate organizational goals into effective digital experiences."
  ]
}
];

// ── Certifications ───────────────────────────────────────────
// link: set to null if no certificate URL yet
export const certifications = [
  {
    id: 1,
    name: 'Master Spring Boot 3 & Spring Framework 6 with Java',
    year: '2026',
    link: 'https://www.udemy.com/certificate/UC-b5f212ea-f949-487d-9856-aa64d17e56d0/',
    image: 'images/certifications/1.png'
  },
  {
    id: 2,
    name: 'DevOps Fundamentals',
    year: '2025',
    link: 'https://courses.vit.skillsnetwork.site/certificates/3b2b500f99bd4849b870fc80514e6ee8',
    image: 'images/certifications/2.png'
  },
  {
    id: 3,
    name: 'IBM DevOps, Agile & Design Thinking',
    year: '2025',
    link: 'https://courses.vit.skillsnetwork.site/certificates/30cd96ae17b04f9b9e174a9ec57b95ca',
    image: 'images/certifications/3.png'
  },
  {
    id: 4,
    name: 'Master Git and GitHub in 5 Days: Go from Zero to Hero',
    year: '2026',
    link: 'ude.my/UC-45e8f9f8-b0c2-447c-82ab-e17fadc459de',
    image: 'images/certifications/4.png'
  },
];
