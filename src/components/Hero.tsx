import React from "react";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blueAccent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-lightBlue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fade-up">
              <p className="text-blueAccent font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Ayush Kumar Amar
              </h1>
              <h2 className="text-xl md:text-2xl text-foreground/80 mb-6">
                2025 B.Tech CSE Graduate | Full Stack & Web3 Developer
              </h2>
              <p className="text-lg mb-8 max-w-xl">
                Passionate about crafting reliable systems that solve real-world
                challenges.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#resume"
                  className="btn btn-primary px-6 py-3 rounded-lg"
                >
                  <ArrowDown className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="btn btn-outline px-6 py-3 rounded-lg"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline px-6 py-3 rounded-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative animate-fade-in">
              {/* Profile Image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-float">
                <img
                  src="/placeholder.svg"
                  alt="Ayush Kumar Amar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Background decoration */}
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-blueAccent/30"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-1.5 bg-blueAccent rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
