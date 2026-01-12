Shayan Kahumu – Software Engineer Portfolio

A production-ready personal portfolio built with React 18, Tailwind CSS, and Framer Motion.
This application is designed as a single-page client-side rendered system that emphasizes performance, accessibility, and maintainability while showcasing projects, skills, and professional experience.

📌 Purpose

This portfolio serves three primary goals:

Professional Representation – Present projects, skills, and experience in a structured, recruiter-friendly format

Technical Demonstration – Showcase frontend architecture, component composition, animations, and responsive design

Extensibility – Allow easy updates, additions, and future backend integration

🧱 System Architecture

Architecture Type: Client-side rendered SPA (Single Page Application)

Rendering: React Virtual DOM

Styling Strategy: Utility-first CSS with Tailwind

Animation Layer: Declarative animation via Framer Motion

State Scope: Local component state (no global state library required)

Deployment Model: Static asset hosting via CDN (Netlify/Vercel)

✨ Key Features (Concrete)

Responsive layout using Tailwind breakpoints (sm, md, lg, xl)

Animated section transitions using motion.div

Project cards rendered from a structured JavaScript data model

Resume section with:

Tab-based navigation

Downloadable PDF resume

Tech stack section with categorized skills and proficiency indicators

Dark/light theme support via Tailwind classes

Smooth scrolling navigation using anchor links

Optimized production build with code minification and tree-shaking

📁 Project Structure (Explained)
portfolio/
├── public/
│   ├── index.html                  # Application entry HTML
│   ├── images/
│   │   └── profile.jpg             # Hero section profile image
│   └── SHAYANI NYAMBURA KAHUMU - RESUME.pdf
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation + mobile menu
│   │   ├── Hero.jsx                # Landing section
│   │   ├── Projects.jsx            # Project listing & modal logic
│   │   ├── Resume.jsx              # Resume tabs & PDF download
│   │   ├── Techstack.jsx           # Skills visualization
│   │   └── Footer.jsx              # Contact & social links
│   │
│   ├── App.jsx                     # Component composition root
│   ├── index.js                    # React DOM bootstrap
│   └── index.css                   # Tailwind base styles
│
├── tailwind.config.js               # Theme customization
├── package.json                     # Dependency graph & scripts
└── README.md

🛠️ Technology Stack
Frontend

React 18 – Component-based UI system

Tailwind CSS – Utility-first styling

Framer Motion – Declarative animations

Lucide React – Icon system

Tooling

Create React App – Build configuration and bundling

Git & GitHub – Version control

Postman – API testing (future backend integration)

Deployment

Netlify  – Static hosting with CDN edge caching

⚙️ Local Setup
Prerequisites

Node.js ≥ 16

npm or yarn

Installation
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install


or

yarn install

🔐 Environment Variables

Create a .env file in the root directory:

REACT_APP_EMAIL=your-email@example.com
REACT_APP_PHONE=+2547XXXXXXXX
REACT_APP_GITHUB=https://github.com/yourusername
REACT_APP_LINKEDIN=https://linkedin.com/in/yourusername


These values are consumed inside the Footer and Hero components.

▶️ Running the Application
Development Mode
npm start


Runs on:
http://localhost:3000

Production Build
npm run build


Outputs an optimized static build in the build/ directory.

🧩 Customization Guide (Exact Locations)
Update Personal Info

Hero.jsx → name, title, introduction text

Footer.jsx → contact details & social links

Update Projects

Edit src/components/Projects.jsx:

const projects = [
  {
    id: 1,
    title: "Mental Health Chatbot",
    description: "AI-powered chatbot for mood detection",
    techStack: ["React", "Node.js", "NLP"],
    demoVideo: "https://loom.com/...",
    codeUrl: "https://github.com/..."
  }
];

Update Resume Content

Resume.jsx → experience, education, certifications

Replace PDF in public/ to update downloadable resume

🎨 Styling & Theme Control

Modify tailwind.config.js:

extend: {
  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui'],
  },
}

🚀 Deployment
Netlify

npm run build

Drag build/ folder into Netlify dashboard



🔍 Performance Considerations

Static asset delivery via CDN

Tree-shaken JavaScript bundles

Lazy-loaded animations

Optimized image sizes

Minimal runtime dependencies

♿ Accessibility

Semantic HTML structure

Keyboard-navigable components

Sufficient color contrast

ARIA labels for interactive elements

🔮 Planned Enhancements

Backend-powered contact form (Node + Email API)

Blog section with Markdown rendering

PWA support (offline + installable)

SEO meta tags & Open Graph data

Analytics integration

📬 Contact

Shayan Kahumu
📧 nyamburawahu16@gmail.com

🔗 GitHub: https://github.com/shlavin

📄 License

MIT License – free to use, modify, and distribute.

⭐ If this repository helped you, consider starring it on GitHub.

