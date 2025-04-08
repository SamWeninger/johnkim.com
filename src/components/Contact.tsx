
import { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-container anim-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Feel free to reach out if you're interested in my work or would like to discuss potential opportunities.
          </p>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="text-primary h-6 w-6" />
            </div>
            <a 
              href="mailto:johnkim4172000@gmail.com" 
              className="text-foreground text-lg hover:text-primary transition-colors"
            >
              johnkim4172000@gmail.com
            </a>
          </div>
          
          <p className="text-muted-foreground mt-8">
            Based in San Francisco, CA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
