import React from "react";

const projects = [
  {
    title: "Tatkal Queue Management System 🚦",
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Maven",
      "Railway",
      "Twilio",
      "Docker",
    ],
    summary:
      "A full-stack web application to manage Tatkal ticket queues with real-time queue and token generation.",
    features: [
      "Built Spring Boot APIs with JWT authentication and role-based access.",
      "Responsive React frontend with QR scanning and dynamic forms.",
      "Deployed using Docker + Railway with secure CORS.",
      "Integrated Twilio for OTP-based SMS verification.",
    ],
    links: {
      demo: undefined,
      code: undefined,
    },
  },
  {
    title: "DeShare – Decentralized File Sharing Platform 🛠️",
    techStack: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "IPFS",
      "MetaMask",
      "Hardhat",
      "Tailwind CSS",
    ],
    summary:
      "A decentralized platform for secure file sharing using Ethereum, IPFS, and client-side encryption.",
    features: [
      "Smart contracts in Solidity for file access control on Ethereum.",
      "Wallet-based login via MetaMask.",
      "Client-side encryption and secure file sharing using IPFS.",
      "Frontend built in Next.js (SSR) and Tailwind CSS.",
      "Fully decentralized with no traditional backend.",
    ],
    links: {
      demo: undefined,
      code: undefined,
    },
  },
];

const badgeColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
  "bg-teal-100 text-teal-800",
  "bg-red-100 text-red-800",
  "bg-gray-100 text-gray-800",
  "bg-orange-100 text-orange-800",
  "bg-cyan-100 text-cyan-800",
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              tabIndex={0}
              className="group relative flex flex-col h-full rounded-2xl shadow-md bg-gray-50 border border-transparent hover:border-blue-400 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 p-6"
              aria-labelledby={`project-title-${idx}`}
            >
              <header>
                <h3
                  id={`project-title-${idx}`}
                  className="text-xl font-bold mb-2 flex items-center gap-2"
                >
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={tech}
                      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                        badgeColors[i % badgeColors.length]
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </header>
              <p className="mb-4 text-gray-700">{project.summary}</p>
              <ul className="mb-4 list-disc list-inside space-y-1 text-gray-800">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span aria-hidden="true">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {(project.links.demo || project.links.code) && (
                <div className="mt-auto flex gap-3 pt-2">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg font-medium shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
