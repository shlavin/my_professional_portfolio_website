import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const Button = ({ children, variant = "default", size = "default", className = "", onClick, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Section - About */}
          <div>
            <h3 className="mb-3 text-white text-2xl font-bold">Shayan Kahumu</h3>
            <p className="text-neutral-400 mb-4">
              Software Engineer specializing in building exceptional web experiences.
              Let's connect and build something amazing together.
            </p>
            <a
              href="mailto:nyamburawahu16@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              nyamburawahu16@gmail.com
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="mb-4 text-white text-xl font-semibold">Connect With Me</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 text-white"
                onClick={() => window.open("https://github.com/shlavin", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 text-white"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/shayani-kahumu-267983260/", "_blank")
                }
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 text-white"
                onClick={() => (window.location.href = "mailto:nyamburawahu16@gmail.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Shayan Kahumu. All rights reserved. Built with React and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;