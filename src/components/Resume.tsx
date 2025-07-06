
import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  const resumeUrl = '/Ayush_Kumar_Amar_Resume.pdf'; // This would be the actual path to the resume

  return (
    <section id="resume" className="bg-gradient-to-b from-softBlue to-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="section-title mx-auto">Resume</h2>
        
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden animate-fade-up">
          <div className="bg-blueAccent/10 p-8 flex flex-col items-center">
            <FileText size={64} className="text-blueAccent mb-4" />
            <h3 className="text-xl font-bold mb-1">Ayush Kumar Amar</h3>
            <p className="text-foreground/70 mb-6">Full Stack Developer Resume</p>
            
            <a 
              href={resumeUrl} 
              download="Ayush_Kumar_Amar_Resume.pdf"
              className="btn btn-primary px-6 py-3 rounded-lg inline-flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            
            <p className="mt-4 text-sm text-foreground/50">PDF format, updated May 2023</p>
          </div>
          
          <div className="p-6">
            <h4 className="font-semibold mb-2">Resume Highlights</h4>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <span className="text-blueAccent mr-2">•</span>
                <span>Technical skills in full stack development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blueAccent mr-2">•</span>
                <span>Project experiences and internships</span>
              </li>
              <li className="flex items-start">
                <span className="text-blueAccent mr-2">•</span>
                <span>Competitive programming achievements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blueAccent mr-2">•</span>
                <span>Educational qualifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
