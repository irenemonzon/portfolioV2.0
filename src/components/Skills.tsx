
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

const brandColors: Record<string, string> = {
  react: "#61DAFB",
  "next.js": "#000000",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  "tailwind css": "#06B6D4",
  html5: "#E34F26",
  css3: "#1572B6",
  "node.js": "#339933",
  "express.js": "#000000",
  graphql: "#E10098",
  "rest apis": "#000000",
  postgresql: "#336791",
  mongodb: "#47A248",
  firebase: "#FFCA28",
  pgadmin: "#32648D",
  dbeaver: "#372923",
  git: "#F05032",
  github: "#181717",
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
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "8px",
          backgroundColor: brandColors[key] || "#999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.8rem",
          color: "#fff"
        }}
      >
        {name.charAt(0)}
      </div>
    );
  }

  return <Icon size={48} color={brandColors[key] || "#000"} />;
};

export default function Skills() {
  const skillCategories = [
    { title: "Frontend Development", skills: getSkillsByCategory("Frontend") },
    { title: "Backend Development", skills: getSkillsByCategory("Backend") },
    { title: "Database & Cloud", skills: getSkillsByCategory("Database") },
    { title: "Tools & Testing", skills: getSkillsByCategory("Tools") }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with to create amazing digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300 mb-3">
                        <SkillIcon name={skill.name} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Soft Skills & Methodologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {getSkillsByCategory("Soft Skills").map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
