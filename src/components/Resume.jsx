// src/components/Resume.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, Calendar, MapPin, CircleCheck, GraduationCap, Award, Users, Code, Database, Cpu } from "lucide-react";

const Resume = () => {
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("experience");
  const [isDownloading, setIsDownloading] = useState(false);

  // Experience data - Updated with your actual experience
  const experiences = [
    {
      title: "IT Attachee",
      company: "Kenya Agricultural and Livestock Research Organisation (KALRO)",
      location: "Nairobi, Kenya",
      period: "May 2024 – August 2024",
      description: "Provided comprehensive IT support and development services in agricultural research organization",
      achievements: [
        "Provided first-level support at Help Desk, troubleshooting PC/OS issues and assisting with email/password recovery",
        "Engaged directly with farmers via Call Center, providing ICT-enabled agricultural advisories",
        "Developed lookalike websites using HTML, CSS, JavaScript and designed WordPress sites with WooCommerce integration",
        "Configured network devices (D-Link switches, Cisco routers), crimped Cat 6 cables, handled IP setups via PuTTY",
        "Installed and managed virtual machines with VMware tools (vCenter, vSphere)",
        "Performed data cleaning and visualization in Power BI, Excel, and Python (Pandas/Matplotlib)",
        "Created data collection forms using KoboToolbox and designed UI wireframes in Figma"
      ],
      type: "fullstack"
    }
  ];

  // Education data - Updated with your actual education
  const education = [
    {
      degree: "Bachelor of Science in Applied Computer Science",
      school: "Chuka University",
      period: "September 2021 – April 2025",
      achievements: [
        "Specialization in full-stack development and AI applications",
        "Final Year Project: Mental Health Wellness Chatbot using NLP",
        "Actively building expertise in system administration and data visualization"
      ]
    }
  ];

  // Certifications data - Updated with your actual certifications
  const certifications = [
    "IBM Cybersecurity Fundamentals Certificate (2025)",
    "Professional Foundations ALX Africa (2025)",
    "Backend Web Development Program - ALX Africa (Ongoing)"
  ];

  // Skills categories - Extracted from your resume
  const skills = {
    languages: ["Python", "JavaScript", "HTML", "CSS"],
    frameworks: ["Django", "Bootstrap", "WordPress", "Figma"],
    databases: ["MySQL", "Pandas", "Excel", "Power BI", "KoboToolbox"],
    networking: ["IP addressing", "Subnetting", "Cisco & D-Link configuration", "DNS"],
    virtualization: ["VMware", "VirtualBox", "vSphere", "vCenter"],
    softSkills: ["Technical Support", "Problem-Solving", "Communication", "Teamwork"]
  };

  // Projects - Extracted from your resume
  const projects = [
    {
      name: "Mental Health Wellness Chatbot",
      description: "Final Year Project - Conversational AI chatbot using Python and NLP techniques",
      details: [
        "Developed to support university students' mental health",
        "Implemented interactive modules for stress and mood tracking",
        "Deployed backend using Django with scalable design for university portal integration"
      ],
      tech: ["Python", "NLP", "Django", "AI"]
    },
    {
      name: "KALRO Web Clone",
      description: "Recreated KALRO official website homepage",
      details: [
        "Used HTML, CSS, JavaScript, and Bootstrap",
        "Ensured visual and functional fidelity to original",
        "Demonstrated frontend development skills"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      name: "Data Visualization Dashboard",
      description: "Big Data Unit project at KALRO",
      details: [
        "Cleaned and analyzed Kilimostat datasets using Python and Power BI",
        "Created dashboards to identify patterns in agricultural data",
        "Aided strategic decision-making through data visualization"
      ],
      tech: ["Python", "Power BI", "Data Analysis", "Pandas"]
    }
  ];

  // Community involvement
  const community = [
    {
      role: "Member",
      organization: "She Code Africa, Chuka Chapter",
      details: [
        "Actively participated in mentoring and knowledge-sharing sessions",
        "Engaged in women-in-tech advocacy initiatives",
        "Contributed to building tech community among female students"
      ]
    }
  ];

  // Filter experiences based on selected filter
  const filteredExperiences = filter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === filter);

  // Handle resume download
  const handleDownloadResume = async () => {
    setIsDownloading(true);
    try {
      // Your resume filename (exact name from your file)
      const resumeFilename = "SHAYANI NYAMBURA KAHUMU - RESUME.pdf";
      const resumePath = `/${resumeFilename}`;
      
      // Direct download using anchor element
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = "Shayani_Nyambura_Kahumu_Resume.pdf"; // Clean filename for download
      
      // For better cross-browser compatibility
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      
      // Fallback method: Open in new tab
      try {
        window.open('/SHAYANI NYAMBURA KAHUMU - RESUME.pdf', '_blank', 'noopener,noreferrer');
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('Unable to download resume. Please check if the file exists in the public folder.');
      }
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Detail-oriented Applied Computer Science student with expertise in full-stack development, AI applications, and system administration
          </p>
          
          {/* Download Button with loading state */}
          <button
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className={`inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors duration-300 ${
              isDownloading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Download PDF Resume
              </>
            )}
          </button>
          
          {/* Contact Info Summary */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>nyamburawahu16@gmail.com</span>
            <span>0708567322</span>
            <span>Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Tabs Navigation - Added Skills Tab */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
              activeTab === "experience"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
              activeTab === "education"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
              activeTab === "certifications"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-3 font-medium text-lg transition-colors duration-300 ${
              activeTab === "skills"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            Skills
          </button>
        </div>

        {/* Experience Tab Content */}
        {activeTab === "experience" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Filter Buttons - Updated for your experience types */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All Experience
              </button>
              <button
                onClick={() => setFilter("fullstack")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === "fullstack"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                IT Support & Development
              </button>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {exp.title}
                              </h3>
                              <p className="text-lg text-gray-700 dark:text-gray-300">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium self-start">
                          Internship
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Responsibilities & Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                            >
                              <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Education Tab Content */}
        {activeTab === "education" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <GraduationCap className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-700 dark:text-gray-400">
                            {edu.school} • {edu.period}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Academic Focus & Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                            >
                              <CircleCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Notable Projects */}
                      <div className="mt-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                          Notable Academic Projects:
                        </h4>
                        <div className="space-y-4">
                          {projects.map((project, idx) => (
                            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                                {project.name}
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                  <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Community Involvement */}
                      <div className="mt-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Community & Leadership
                        </h4>
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                            {community[0].role} • {community[0].organization}
                          </h5>
                          <ul className="space-y-2">
                            {community[0].details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <CircleCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications Tab Content */}
        {activeTab === "certifications" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-8">
                  <Award className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Professional Certifications & Training
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Industry-recognized credentials and ongoing professional development
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300">
                        <CircleCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {cert}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Referee Section */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Referee
                  </h4>
                  <div className="space-y-2">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      Janet Ngesa
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Attachment Supervisor
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Kenya Agricultural and Livestock Research Organisation
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      📞 0708176091
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills Tab Content - New Tab */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-8">
                  <Code className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Technical & Professional Skills
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comprehensive skill set across development, data, networking, and virtualization
                    </p>
                  </div>
                </div>

                {/* Languages & Web */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Languages & Web Development
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.languages.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Tools */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Frameworks & Tools
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.frameworks.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases & Data */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Databases & Data Analysis
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.databases.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Networking */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    Networking & Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.networking.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Virtualization */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    Virtualization
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.virtualization.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.softSkills.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Resume;