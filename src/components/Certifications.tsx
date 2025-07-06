import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  name: string;
  platform: string;
  year: number;
  link?: string;
  image?: string;
}

const Certifications = () => {
  // All certifications removed
  const certifications: Certification[] = [];
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section
      id="certifications"
      className="bg-gradient-to-b from-softBlue to-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-8">Certifications</h2>
        <p className="mb-10 max-w-2xl">
          Professional certifications that have enhanced my skills and knowledge
          in various domains.
        </p>

        {/* Tap Academy Full Stack Web Development Certification */}
        <div className="mb-12">
          <div className="rounded-2xl shadow-md bg-white border border-blue-200 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎓</span>
              <h3 className="text-2xl font-bold">Full Stack Web Development</h3>
            </div>
            <div className="mb-2 text-lg font-semibold">Tap Academy</div>
            <div className="mb-2 text-foreground/70">BTM Layout, Bangalore</div>
            <div className="mb-4 text-sm text-foreground/50">3rd Year</div>
            <p className="mb-4">
              Comprehensive full-stack development training program covering
              both frontend and backend technologies with hands-on projects and
              industry best practices.
            </p>
            <div className="mb-2 font-semibold">Course Modules Covered:</div>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>
                <span className="font-semibold">Core Java Fundamentals</span>
                <ul className="list-disc pl-5">
                  <li>Object-Oriented Programming</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Exception Handling</li>
                  <li>Collections Framework</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">
                  Advanced Java & Frameworks
                </span>
                <ul className="list-disc pl-5">
                  <li>Spring Boot Framework</li>
                  <li>Hibernate ORM</li>
                  <li>RESTful Web Services</li>
                  <li>Microservices Architecture</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Database Management</span>
                <ul className="list-disc pl-5">
                  <li>MySQL Database Design</li>
                  <li>SQL Queries & Optimization</li>
                  <li>Database Relationships</li>
                  <li>Stored Procedures</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Frontend Technologies</span>
                <ul className="list-disc pl-5">
                  <li>HTML5 &amp; CSS3</li>
                  <li>JavaScript ES6+</li>
                  <li>Responsive Web Design</li>
                  <li>Modern UI/UX Principles</li>
                </ul>
              </li>
            </ul>
            <div className="mb-2 font-semibold">Key Skills Acquired:</div>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Core Java</li>
              <li>Advanced Java</li>
              <li>MySQL</li>
              <li>HTML/CSS/JavaScript</li>
              <li>Spring Boot</li>
              <li>Web Development Best Practices</li>
            </ul>
            <div className="mb-2 font-semibold">Training Impact</div>
            <p>
              This comprehensive training program provided me with a solid
              foundation in enterprise-level Java development and modern web
              technologies, enabling me to build scalable, production-ready
              applications and contribute effectively to development teams.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* No certifications to display. Add new certifications here as needed. */}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
