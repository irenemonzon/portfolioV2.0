const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce application built with Next.js and Tailwind CSS. Features include product catalog, shopping cart, user authentication, and responsive design with ShadCN UI components.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN", "TypeScript", "React"],
      liveUrl: "https://next-js-eccomerce-woad.vercel.app/",
      githubUrl: "#",
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
      adminUrl: "https://restaurant-shop.vercel.app/admin/orders",
      ordersUrl: "https://restaurant-shop.vercel.app/orders",
      githubUrl: "#",
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
      title: "Restaurant Management Dashboard",
      description: "Advanced restaurant management system with comprehensive order tracking, inventory management, and analytics. Features a modern admin interface built with cutting-edge technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Server Actions", "App Router", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Advanced order tracking",
        "Inventory management",
        "Analytics and reporting",
        "Modern admin interface",
        "Database optimization"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Project Preview</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors"
                      >
                        View Code
                      </a>
                    </div>
                    
                    {project.adminUrl && (
                      <div className="flex gap-2 text-xs">
                        <a
                          href={project.adminUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-3 rounded text-xs transition-colors"
                        >
                          Admin Panel
                        </a>
                        <a
                          href={project.ordersUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-3 rounded text-xs transition-colors"
                        >
                          Orders View
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to see more projects or discuss a collaboration?
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
