import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants  = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants ={
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants: Variants  = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center justify-center dark"
    >
      
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,200,255,0.1),transparent)]"></div>
      </div>

        <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto  px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto pt-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
         
          <motion.div className="mb-8 mt-12" variants={avatarVariants}>
            <div className="relative mx-auto w-40 h-40 mb-8">
            
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="absolute inset-1 rounded-full flex items-center justify-center">
                <motion.img
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 w-36 h-36 object-cover rounded-full"
                  src='./profile.png'
                  alt="Profile Photo"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="mb-8" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Irene Monzon
              </motion.span>
            </h1>
          </motion.div>

          <motion.div className="mb-12" variants={itemVariants}>
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Frontend Developer specializing in modern web technologies like{" "}
              <span className="text-blue-400 font-semibold">React</span>,{" "}
              <span className="text-green-400 font-semibold">Next.js</span>, and{" "}
              <span className="text-purple-400 font-semibold">TypeScript</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-white font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(148, 163, 184, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8 mb-20"
            variants={itemVariants}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/irenemonzon",
                color: "hover:text-white",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/monzonirene",
                color: "hover:text-blue-400",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:irene.monzonm@gmail.com",
                color: "hover:text-purple-400",
                label: "Email",
              },
            ].map(({ icon: Icon, href, color, label }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-slate-400 ${color} transition-all duration-300 p-4 rounded-full hover:bg-slate-800/30`}
                whileHover={{
                  scale: 1.3,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="text-slate-400 hover:text-blue-400 transition-colors p-2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;