export interface PersonalInfo {
  name: string
  title: string
  description: string
  initials: string
  profileImage?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'website'
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Soft Skills'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
}

export interface ContactInfo {
  email: string
  phone?: string
}


export const portfolioData = {
  personal: {
    name: "Irene Monzon",
    title: "Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies like React, Next.js, and TypeScript",
    initials: "IM",
    profileImage: "", 
  } as PersonalInfo,

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/irenemonzon",
      icon: "github"
    },
    {
      platform: "LinkedIn", 
      url: "https://www.linkedin.com/in/monzonirene", 
      icon: "linkedin"
    },
    {
      platform: "Email",
      url: "mailto:irene.monzonm@gmail.com",
      icon: "email"
    }
  ] as SocialLink[],

  skills: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "CI/CD", category: "Tools" },
    { name: "Storybook", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Postman", category: "Tools" },
     { name: "pgAdmin", category: "Tools" },
    { name: "DBeaver", category: "Tools" },
    { name: "Jest", category: "Tools" },
    { name: "React Testing Library", category: "Tools" },
    { name: "Problem Solving", category: "Soft Skills" },
    { name: "Team Collaboration", category: "Soft Skills" },
    { name: "Continuous Learning", category: "Soft Skills" },
    { name: "Attention to Detail", category: "Soft Skills" },
    { name: "Communication", category: "Soft Skills" },
  ] as Skill[],

  projects: [
    {
      id: "project-1",
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and TypeScript",
      longDescription: "Full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern technologies focusing on performance and user experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project1", 
      liveUrl: "https://yourproject1.com",
      imageUrl: "",
      featured: true,
    },
    {
      id: "project-2", 
      title: "Task Management Dashboard",
      description: "A collaborative task management application",
      longDescription: "Real-time task management dashboard with team collaboration features, drag-and-drop interface, and progress tracking.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://yourproject2.com",
      imageUrl: "",
      featured: true,
    },
    {
      id: "project-3",
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering",
      longDescription: "Responsive restaurant website featuring menu display, online ordering system, and table reservations.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
      githubUrl: "https://github.com/yourusername/project3", 
      liveUrl: "",
      imageUrl: "",
      featured: false,
    }
  ] as Project[],

  contact: {
    email: "irene.monzonm@gmail.com", 
    phone: "+1 (555) 123-4567", 
  } as ContactInfo,

  about: {
    intro: "I'm a passionate full-stack developer with expertise in modern web technologies. I love building applications that solve real-world problems and provide great user experiences.",
    background: "With experience in React, Next.js, TypeScript, and various backend technologies, I enjoy working on both the frontend and backend aspects of web development. I'm always eager to learn new technologies and take on challenging projects.",
    interests: ["Web Development", "Open Source", "Continuous Learning", "Problem Solving"]
  }
}

export const getSkillsByCategory = (category: Skill['category']) => {
  return portfolioData.skills.filter(skill => skill.category === category)
}

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.featured)
}

export const getSocialLinkByPlatform = (platform: string) => {
  return portfolioData.socialLinks.find(link => 
    link.platform.toLowerCase() === platform.toLowerCase()
  )
}
