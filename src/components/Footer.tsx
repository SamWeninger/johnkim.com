
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">John Kim</h3>
            <p className="text-muted-foreground">Assurance Senior at Ernst & Young</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:johnkim4172000@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:bg-primary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} John Kim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
