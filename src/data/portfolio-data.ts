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
  id: number
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  features: string[]
  adminUrl?:string
  ordersUrl?:string
}

export interface ContactInfo {
  email: string
  phone?: string
}


export const portfolioData = {
  personal: {
      name: "Irene Monzon",
      title: "Frontend Developer",
      description:
        "Frontend Developer creating modern, responsive, and user-friendly web applications with React, Next.js, JavaScript and TypeScript.",
      initials: "IM",
      profileImage: "./profile.png",
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
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce application built with Next.js and Tailwind CSS. Features include product catalog, shopping cart, user authentication, and responsive design with ShadCN UI components.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN", "TypeScript", "React"],
      liveUrl: "https://next-js-eccomerce-woad.vercel.app/",
      githubUrl: "https://github.com/irenemonzon/Next.js_Eccomerce",
      features: [
        "Product catalog with search and filtering",
        "Shopping cart functionality",
        "Responsive design",
        "Modern UI with ShadCN components"
      ]
    },
    {
      id: 2,
      title: "Coffee Shop Management System",
      description: "A comprehensive restaurant/coffee shop application with order management, admin panel, and customer interface. Built with modern Next.js features including Server Actions and App Router.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Zustand", "Zod"],
      liveUrl: "https://restaurant-shop.vercel.app/",
      githubUrl: "https://github.com/irenemonzon/Restaurant-shop",
      features: [
        "Order management system",
        "Admin dashboard for order tracking",
        "Customer order interface",
        "Real-time order status updates",
        "Database integration with Prisma"
      ]
    },
    {
      id: 3,
      title: "Fitness Club Landing Page",
      description: "A modern, responsive landing page designed for fitness clubs, showcasing amenities and services to attract new members and keep existing ones engaged.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "CSS", "Responsive", "HTML"],
      liveUrl: "https://irenemonzon.github.io/FitnessClub/",
      githubUrl: "https://github.com/irenemonzon/FitnessClub",
      features: [
        "Advanced order tracking",
        "Inventory management",
        "Analytics and reporting",
        "Modern admin interface",
        "Database optimization"
      ]
    }
  ]as Project[],
  contact: {
    email: "irene.monzonm@gmail.com", 
  } as ContactInfo,

  about: {
  intro:
    "I'm a Frontend Developer with +5 years of experience building fast, high-quality websites and web apps. I work with modern tools like React, Next.js, JavaScript and TypeScript to create clean, responsive, and easy-to-use interfaces.",
  background:
    "My experience spans from developing intuitive, accessible frontends to collaborating on backend integrations using Node.js, Express, and databases like PostgreSQL, MongoDB, and Firebase. I’m passionate about writing maintainable code, optimizing user experience, and continuously learning to stay at the forefront of web development trends.",
  interests: ["Web Development", "FullStack", "Continuous Learning", "Problem Solving"],
}
}

export const getSkillsByCategory = (category: Skill['category']) => {
  return portfolioData.skills.filter(skill => skill.category === category)
}

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.features)
}

export const getSocialLinkByPlatform = (platform: string) => {
  return portfolioData.socialLinks.find(link => 
    link.platform.toLowerCase() === platform.toLowerCase()
  )
}
