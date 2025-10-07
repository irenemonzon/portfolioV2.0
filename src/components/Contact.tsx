import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import SectionHeader from './ui/SectionHeader'
import Button from './ui/Button'
import SocialIcons from './ui/SocialIcons'
import { containerVariants, itemVariants } from './ui/animations'
import Toast from './ui/Toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
  
      email: formData.email,
      title: formData.subject || 'Contact Us',
      name: formData.name,
      time: new Date().toLocaleString(),
      message: formData.message,
      reply_to: formData.email,
      to_email: 'irene.monzonm@gmail.com'
    }

  
    if (serviceId && templateId && publicKey) {
      emailjs.send(serviceId as string, templateId as string, templateParams, publicKey as string)
        .then(() => {
          setFormData({ name: "", email: "", subject: "", message: "" });
          setShowToast(true)
        })
        .catch(() => {
          setShowToast(true)
        })
      return
    }

   
    const to = 'irene.monzonm@gmail.com'
    const subject = encodeURIComponent(formData.subject || 'Contact from website')
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`

   
    window.location.href = mailto

    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setShowToast(true)
  };

  const [showToast, setShowToast] = useState(false)

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
        
          <SectionHeader 
            title="Get In Touch"
            subtitle="I'm always interested in hearing about new opportunities and projects. Let's discuss how we can work together!"
          />

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >

            <motion.div
              className="space-y-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl p-6"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-xl font-semibold text-white mb-6"
                variants={itemVariants}
              >
                Let's Start a Conversation
              </motion.h3>
              <motion.p className="text-gray-300 mb-6" variants={itemVariants}>
                Whether you have a project in mind, need technical consultation,
                or just want to say hello, I'd love to hear from you.
              </motion.p>

              <SocialIcons 
                variant="footer"
                animated={true}
              />

              <motion.div variants={itemVariants} className="pt-6">
                <h4 className="font-semibold text-white mb-3">
                  What I can help you with:
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Full-stack web development</li>
                  <li>• React and Next.js applications</li>
                  <li>• E-commerce solutions</li>
                  <li>• Database design and optimization</li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl p-6"
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "subject"].map((field) => (
                  <motion.div key={field} variants={itemVariants}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)} *
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      required
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-600/50 rounded-md bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Your ${field}`}
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-600/50 rounded-md bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </motion.div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full rounded-md"
                  animated={true}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {showToast && (
        <Toast
          message="Message sent successfully."
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};

export default Contact;
