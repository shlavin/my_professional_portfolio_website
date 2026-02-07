import { motion } from "framer-motion";
import { Monitor, Server, Wrench, Database, Brain, Palette } from "lucide-react";

const Techstack = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        {
          name: "React",
          proficiency: 85,
          description: "Building modern, responsive web applications and portfolio sites",
        },
        {
          name: "JavaScript",
          proficiency: 85,
          description: "Interactive web features, DOM manipulation, and API integration",
        },
        {
          name: "HTML5 & CSS3",
          proficiency: 90,
          description: "Semantic markup, responsive design, and cross-browser compatibility",
        },
        {
          name: "Tailwind CSS",
          proficiency: 80,
          description: "Utility-first styling for rapid UI development",
        },
        {
          name: "Bootstrap",
          proficiency: 85,
          description: "Responsive framework for building professional websites",
        },
      ],
    },
    {
      title: "Backend & Full-Stack",
      icon: Server,
      skills: [
        {
          name: "Django",
          proficiency: 85,
          description: "Building RESTful APIs, authentication systems, and scalable backends",
        },
        {
          name: "Python",
          proficiency: 85,
          description: "Backend development, data analysis, and NLP applications",
        },
        {
          name: "Django REST Framework",
          proficiency: 80,
          description: "API development with token authentication and serialization",
        },
        {
          name: "Node.js",
          proficiency: 70,
          description: "Server-side JavaScript for web applications",
        },
        {
          name: "M-Pesa API Integration",
          proficiency: 80,
          description: "Mobile payment integration for East African markets",
        },
      ],
    },
    {
      title: "Databases & Data",
      icon: Database,
      skills: [
        {
          name: "MySQL",
          proficiency: 85,
          description: "Relational database design, queries, and optimization",
        },
        {
          name: "MongoDB/Mongoose",
          proficiency: 75,
          description: "NoSQL databases for flexible data storage",
        },
        {
          name: "PostgreSQL",
          proficiency: 75,
          description: "Advanced database features and performance tuning",
        },
        {
          name: "Pandas & Data Analysis",
          proficiency: 80,
          description: "Data cleaning, manipulation, and analysis with Python",
        },
        {
          name: "Power BI",
          proficiency: 85,
          description: "Data visualization and dashboard creation",
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        {
          name: "NLP (Natural Language Processing)",
          proficiency: 75,
          description: "Building conversational AI chatbots for mental health support",
        },
        {
          name: "Python AI Libraries",
          proficiency: 70,
          description: "Implementing machine learning models and algorithms",
        },
        {
          name: "AI Application Development",
          proficiency: 75,
          description: "Integrating AI features into practical applications",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      skills: [
        {
          name: "Git & GitHub",
          proficiency: 85,
          description: "Version control, collaboration, and project management",
        },
        {
          name: "WordPress",
          proficiency: 80,
          description: "CMS development with WooCommerce integration",
        },
        {
          name: "Figma",
          proficiency: 75,
          description: "UI/UX design, wireframing, and prototyping",
        },
        {
          name: "VMware & Virtualization",
          proficiency: 80,
          description: "vCenter, vSphere, and virtual machine management",
        },
        {
          name: "SendGrid",
          proficiency: 80,
          description: "Automated email workflows and communication systems",
        },
      ],
    },
    {
      title: "Networking & Infrastructure",
      icon: Palette,
      skills: [
        {
          name: "Network Configuration",
          proficiency: 85,
          description: "Cisco & D-Link router/switch setup, IP addressing, DNS",
        },
        {
          name: "System Administration",
          proficiency: 80,
          description: "Windows OS installation, troubleshooting, and user support",
        },
        {
          name: "Technical Support",
          proficiency: 90,
          description: "Help desk operations, troubleshooting, and user assistance",
        },
        {
          name: "KoboToolbox",
          proficiency: 85,
          description: "Data collection form design and implementation",
        },
        {
          name: "PuTTY & Terminal",
          proficiency: 80,
          description: "Network device configuration and command-line operations",
        },
      ],
    },
  ];

  const projectsTech = [
    {
      project: "Charity Donation Platform",
      technologies: ["React", "Tailwind CSS", "M-Pesa API", "SendGrid", "MongoDB", "Node.js"],
      description: "Full-stack charity website with payment integration"
    },
    {
      project: "Personal Expense Tracker API",
      technologies: ["Django", "Django REST Framework", "MySQL", "Python", "Token Auth"],
      description: "Backend API for financial management with analytics"
    },
    {
      project: "Mental Health Chatbot",
      technologies: ["Python", "NLP", "Django", "AI", "JavaScript"],
      description: "AI-powered chatbot for student mental health support"
    },
    {
      project: "Data Visualization Dashboard",
      technologies: ["Power BI", "Python", "Pandas", "Excel", "Data Analysis"],
      description: "Agricultural data analytics and visualization"
    }
  ];

  const Progress = ({ value, className = "" }) => {
    return (
      <div className={`h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${className}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-blue-600 rounded-full"
        />
      </div>
    );
  };

  const Card = ({ children, className = "" }) => {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
        {children}
      </div>
    );
  };

  const CardHeader = ({ children, className = "" }) => {
    return (
      <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
        {children}
      </div>
    );
  };

  const CardTitle = ({ children, className = "" }) => {
    return (
      <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}>
        {children}
      </h3>
    );
  };

  const CardContent = ({ children, className = "" }) => {
    return (
      <div className={`p-6 ${className}`}>
        {children}
      </div>
    );
  };

  return (
    <section id="tech-stack" className="min-h-screen px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Applied Computer Science student specializing in full-stack development, 
            AI applications, and system administration with hands-on industry experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                          
                          </div>
                          <Progress value={skill.proficiency} />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Projects Technology Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <Server className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Project Technology Stack</CardTitle>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Technologies applied in real-world projects and applications
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsTech.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      {project.project}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Specialization Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-white text-2xl md:text-3xl font-bold">
                Core Specializations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="text-white font-bold text-lg mb-2">Full-Stack Development</h4>
                  <p className="text-white/80 text-sm">
                    End-to-end web application development from UI to database
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="text-white font-bold text-lg mb-2">AI & NLP Applications</h4>
                  <p className="text-white/80 text-sm">
                    Building intelligent systems with natural language processing
                  </p>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <h4 className="text-white font-bold text-lg mb-2">System Administration</h4>
                  <p className="text-white/80 text-sm">
                    IT infrastructure, networking, and technical support solutions
                  </p>
                </div>
              </div>
              <p className="text-white/90 max-w-3xl mx-auto text-lg">
                Combining technical expertise with practical problem-solving to build 
                innovative solutions that address real-world challenges in technology
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Industry Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                  <div className="text-gray-900 dark:text-white font-medium">Development Areas</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Frontend, Backend, AI, Infrastructure
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
                  <div className="text-gray-900 dark:text-white font-medium">Technologies Mastered</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Programming languages, frameworks, and tools
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                  <div className="text-gray-900 dark:text-white font-medium">Real Projects</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Industry experience and academic projects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;