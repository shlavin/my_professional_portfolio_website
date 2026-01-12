// src/components/Hero.jsx
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative bg-gradient-to-b from-white to-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            <img
              src="/images/profile.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Headline - Reduced font size */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Hi, I'm <span className="text-blue-600">Shayan Kahumu</span>,<br />
          a Software Engineer
        </motion.h1>

        {/* Subheading - Reduced font size */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build scalable web applications with clean, performant code.
          Specializing in modern frontend frameworks and full-stack development
          to solve complex problems and deliver exceptional user experiences.
        </motion.p>

        {/* CTA Buttons - Reduced font size and padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View My Projects
          </button>
          <button
            onClick={() => {
              window.open('/SHAYANI NYAMBURA KAHUMU - RESUME.pdf', '_blank');
            }}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 text-base font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Download Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Reduced size */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          <ChevronDown className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;