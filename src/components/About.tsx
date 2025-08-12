import { portfolioData, getSkillsByCategory } from '../data/portfolio-data'

const About = () => {
  const { personal, about } = portfolioData
  const frontendSkills = getSkillsByCategory('Frontend')
  const backendSkills = getSkillsByCategory('Backend')
  const softSkills = getSkillsByCategory('Soft Skills')

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {personal.profileImage ? (
                <img 
                  src={personal.profileImage} 
                  alt={personal.name}
                  className="w-64 h-64 rounded-lg mx-auto mb-8 md:mb-0 object-cover"
                />
              ) : (
                <div className="w-64 h-64 bg-gray-300 rounded-lg mx-auto mb-8 md:mb-0 flex items-center justify-center">
                  <span className="text-6xl text-gray-600">Photo</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {personal.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {about.intro}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {about.background}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Frontend</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {frontendSkills.slice(0, 4).map((skill) => (
                      <li key={skill.name}>• {skill.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Backend</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {backendSkills.slice(0, 4).map((skill) => (
                      <li key={skill.name}>• {skill.name}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {softSkills.map((skill) => (
                  <span key={skill.name} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
