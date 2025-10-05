import { motion } from 'framer-motion'
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiJest,
  SiStorybook,
  SiFigma,
  SiPostman
} from "react-icons/si";
import { getSkillsByCategory } from "../data/portfolio-data";
import SectionHeader from './ui/SectionHeader'
import { containerVariants, cardVariants, scaleVariants } from './ui/animations'

const brandColors: Record<string, string> = {
  react: "#61DAFB",
  "next.js": "#ffffff",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  "tailwind css": "#06B6D4",
  html5: "#E34F26",
  css3: "#1572B6",
  "node.js": "#339933",
  "express.js": "#ffffff",
  graphql: "#E10098",
  "rest apis": "#ffffff",
  postgresql: "#336791",
  mongodb: "#47A248",
  firebase: "#FFCA28",
  pgadmin: "#32648D",
  dbeaver: "#372923",
  git: "#F05032",
  github: "#ffffff",
  docker: "#2496ED",
  "ci/cd": "#4A90E2",
  storybook: "#FF4785",
  figma: "#F24E1E",
  postman: "#FF6C37",
  jest: "#C21325",
  "react testing library": "#E33332"
};

const icons: Record<string, IconType> = {
  react: SiReact,
  "next.js": SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  "tailwind css": SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss3,
  "node.js": SiNodedotjs,
  "express.js": SiExpress,
  graphql: SiGraphql,
  "rest apis": SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  storybook: SiStorybook,
  figma: SiFigma,
  postman: SiPostman,
  jest: SiJest
};

const SkillIcon = ({ name }: { name: string }) => {
  const key = name.toLowerCase();
  const Icon = icons[key];

  if (!Icon) {
    return (
      <motion.div
        style={{
          width: 48,
          height: 48,
          borderRadius: "8px",
          backgroundColor: brandColors[key] || "#4f46e5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.8rem",
          color: "#fff"
        }}
        whileHover={{ 
          scale: 1.2,
          rotate: 5,
          boxShadow: `0 10px 30px ${brandColors[key] || "#4f46e5"}40`
        }}
        transition={{ duration: 0.2 }}
      >
        {name.charAt(0)}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ 
        scale: 1.2,
        rotate: [0, 5, -5, 0],
        filter: "drop-shadow(0 10px 20px rgba(255, 255, 255, 0.1))"
      }}
      transition={{ duration: 0.2 }}
    >
      <Icon size={48} color={brandColors[key] || "#ffffff"} />
    </motion.div>
  );
};

export default function Skills() {
  const skillCategories = [
    { title: "Frontend Development", skills: getSkillsByCategory("Frontend") },
    { title: "Backend Development", skills: getSkillsByCategory("Backend") },
    { title: "Database & Cloud", skills: getSkillsByCategory("Database") },
    { title: "Tools & Testing", skills: getSkillsByCategory("Tools") }
  ];


  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with to create amazing digital experiences"
          />

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {skillCategories.map((category, i) => (
              <motion.div 
                key={i} 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl p-6"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-white mb-6 text-center"
                  whileHover={{ 
                    color: "#60a5fa",
                    scale: 1.05
                  }}
                >
                  {category.title}
                </motion.h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      className="flex flex-col items-center p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30"
                      variants={scaleVariants}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(30, 41, 59, 0.7)",
                        borderColor: "rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-3">
                        <SkillIcon name={skill.name} />
                      </div>
                      <motion.span 
                        className="text-sm font-medium text-gray-300 text-center leading-tight"
                        whileHover={{ color: "#ffffff" }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-xl font-semibold text-white mb-6"
              variants={cardVariants}
            >
              Soft Skills & Methodologies
            </motion.h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              variants={containerVariants}
            >
              {getSkillsByCategory("Soft Skills").map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-slate-700/30 border border-slate-600/30 rounded-full text-sm text-gray-300 backdrop-blur-sm"
                  variants={scaleVariants}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "rgba(59, 130, 246, 0.4)",
                    color: "#ffffff"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}