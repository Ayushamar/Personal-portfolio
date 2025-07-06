import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-softBlue py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-8">About Me</h2>
        <div className="prose max-w-none text-lg mb-8">
          <p>
            I'm a 2025 B.Tech Computer Science and Engineering graduate with a
            passion for building secure, scalable, and real-world software
            solutions. I specialize in full-stack and Web3 development, with
            practical experience in Java, Spring Boot, React, Next.js,
            TypeScript, Solidity, PostgreSQL, and IPFS.
          </p>
          <p>
            Throughout my academic journey, I've worked on impactful projects
            like a Tatkal Queue Management System to streamline railway
            ticketing, and DeShare, a decentralized file-sharing platform using
            Ethereum smart contracts and IPFS. These experiences helped me
            sharpen my backend, frontend, and blockchain development skills.
          </p>
          <p>
            I enjoy turning complex problems into clean, efficient, and
            user-friendly applications—and I'm always eager to learn, build, and
            grow with forward-thinking teams.
          </p>
        </div>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Career Goal</h3>
        <div className="prose max-w-none text-lg">
          <p>
            My career goal is to become a skilled and impactful software
            developer who contributes to building secure, scalable, and
            innovative digital solutions that solve real-world problems. I aim
            to work with forward-thinking teams where I can apply and expand my
            expertise in full-stack development, blockchain technologies, and
            cloud-based systems.
          </p>
          <p>
            In the long term, I aspire to lead projects that drive positive
            change through technology—whether by enhancing digital
            infrastructure, improving user experiences, or promoting
            decentralized and secure systems. I'm committed to continuous
            learning, collaboration, and staying at the forefront of modern
            development practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
