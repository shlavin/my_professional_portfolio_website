// src/components/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mental Health Chatbot",
    description: "This is my final year undergraduate project. It is a mental health wellness chatbot that is meant to cater for the university students mental health in a non-judgemental environment.",
    fullDescription: "Developed a mental health support chatbot for university students using Python, Django, React, and Hugging Face Transformers. Integrated NLP for Emotion Detection to provide personalized responses based on user sentiment analysis. The system offers 24/7 support, tracks user mood patterns over time, and provides resources and coping strategies. Features include secure authentication, conversation history, and integration with university counseling services for escalation when needed.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Python", "Django", "Hugging Face Transformers", "NLP", "Emotion Detection", "MySQL"],
    demoVideo: "https://www.loom.com/share/2d7d5bb6022147f59d61d028ce09fe7f", // Replace with your Loom video ID
    codeUrl: "https://github.com/shlavin/project"
  },
  {
    id: 2,
    title: "Charity Website",
    description: "Digital donation platform connecting donors to causes with M-Pesa payment integration",
    fullDescription: "Developed a transformative charity website that bridges the gap between donors and causes needing support. The platform revolutionizes giving in East Africa by integrating M-Pesa's mobile payment system, making donations as simple as a few taps on a phone. Built entirely from scratch, it features a real-time donation tracker showing immediate impact, automated email confirmation system using SendGrid, and a secure database tracking every contribution. The site includes transparency features showing exactly how funds are used, campaign progress visualizations, and tools for charities to share success stories. Designed with accessibility in mind to ensure everyone can contribute to meaningful change.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["JavaScript", "React", "Tailwind CSS", "M-Pesa API", "SendGrid", "MongoDB", "Express", "Node.js"],
    demoVideo: "https://www.loom.com/share/408813174b354b4cbda5d0e2409c70da", // Replace with your Loom video ID
    codeUrl: "https://github.com/shlavin/charity-website"
  },
  {
    id: 3,
    title: "Personal Expense Tracker API",
    description: "RESTful backend API for financial management with secure authentication and analytics",
    fullDescription: "Built a complete Django REST Framework backend for a personal finance application featuring token-based authentication, transaction management, and financial reporting. The API supports user registration/login with secure token authentication, CRUD operations for transactions and categories, and sophisticated reporting features including monthly summaries and category-wise spending analytics. Implemented data isolation ensuring users only access their own financial data, with a MySQL database for reliable data storage. The modular architecture includes separate apps for users, transactions, categories, and reports, following Django best practices with proper serializers, views, URL routing, and environment configuration for security.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["Django", "Django REST Framework", "MySQL", "Python", "Token Auth", "Postman", "JWT"],
    demoVideo: "https://www.loom.com/share/c201ef64ac8547a39991763d9c431024", // Replace with your Loom video ID
    codeUrl: "https://github.com/shlavin/Personal-Expense-Tracker-Project"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in full-stack development,
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                {/* Project Image with Play Button Overlay */}
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Play size={24} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoVideo, "_blank");
                      }}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex-1"
                    >
                      <Play size={14} />
                      Watch Demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.codeUrl, "_blank");
                      }}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors flex-1"
                    >
                      <Github size={14} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-5 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-5">
              {/* Embedded Loom Video */}
              <div className="relative pb-[56.25%] h-0 rounded-md overflow-hidden bg-gray-900">
                <iframe
                  src={selectedProject.demoVideo}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${selectedProject.title} Demo Video`}
                />
              </div>

              {/* Project Description */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">About This Project</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => window.open(selectedProject.codeUrl, "_blank")}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors flex-1"
                >
                  <Github size={16} />
                  View Source Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;