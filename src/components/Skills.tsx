import React from "react";

const skills = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Radix UI",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "Blockchain & Web3",
    items: [
      "Solidity",
      "Smart Contracts",
      "Hardhat",
      "IPFS",
      "Web3.js",
      "Ethers.js",
      "Lighthouse SDK",
    ],
  },
  {
    category: "Dev Tools & Cloud",
    items: ["Maven", "npm", "Git", "GitHub", "AWS"],
  },
  {
    category: "Computer Science Fundamentals",
    items: [
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-softBlue"
  >
    <div className="max-w-5xl mx-auto">
      <h2 className="section-title mb-8 text-center">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full"
          >
            <h3 className="font-bold text-lg mb-4 text-blueAccent">
              {group.category}
            </h3>
            <ul className="space-y-2 text-gray-800">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="pl-2 relative before:content-['•'] before:absolute before:left-0 before:text-blueAccent before:font-bold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
