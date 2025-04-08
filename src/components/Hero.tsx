
import { ArrowDown, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
              Hello, I'm <span className="text-primary">John Kim</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Assurance Senior at Ernst & Young
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Experienced financial professional with expertise in auditing, consulting, and financial analysis.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button className="hover-lift" onClick={() => window.open('mailto:johnkim4172000@gmail.com')}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" className="hover-lift" onClick={() => document.getElementById('experience')?.scrollIntoView()}>
                View Experience
              </Button>
            </div>
            
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>johnkim4172000@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>515.509.0541</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-scale-in flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 absolute top-0 left-0 blur-3xl opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                <span className="text-white text-6xl font-bold">JK</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
