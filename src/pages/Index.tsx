import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  // Intersection Observer to add animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <div className="max-w-3xl mx-auto my-12 text-center">
        <blockquote className="italic text-xl" style={{ color: "#0A4D0A" }}>
          “Projects aren't going to stop — because where a problem is felt, a
          solution will be developed. I believe in building with purpose,
          solving real-life challenges through thoughtful code and impactful
          technology.”
        </blockquote>
      </div>
      <Certifications />
      <div className="max-w-3xl mx-auto my-12 text-center">
        <blockquote className="italic text-xl" style={{ color: "#0A4D0A" }}>
          “Certifications are valuable, but their true worth lies in how well
          they're applied. I believe in turning knowledge into action.”
        </blockquote>
      </div>
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
