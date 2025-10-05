
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}


export const navigationItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
] as const


export const getSocialLinks = () => {
  return [
    {
      platform: "GitHub",
      url: "https://github.com/irenemonzon",
      icon: "github" as const
    },
    {
      platform: "LinkedIn", 
      url: "https://www.linkedin.com/in/monzonirene", 
      icon: "linkedin" as const
    },
    {
      platform: "Email",
      url: "mailto:irene.monzonm@gmail.com",
      icon: "email" as const
    }
  ]
}