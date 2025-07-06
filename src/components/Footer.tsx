
import React from 'react';
import { Heart, Home, User, FolderOpen, FileText, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <footer className="bg-foreground text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold mb-6">
            <span className="text-blueAccent">A</span>yush Kumar Amar
          </a>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 animate-fade-up">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-white/70 hover:text-white transition-colors"
              >
                <item.icon size={16} className="mr-1" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
          
          <div className="w-full max-w-md h-px bg-white/10 mb-6"></div>
          
          <p className="text-white/70 flex items-center animate-fade-up">
            Made with <Heart size={16} className="mx-1 text-red-400 animate-pulse" /> by Ayush Kumar Amar
          </p>
          
          <p className="text-white/40 text-sm mt-2">&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
