
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="section-container anim-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I am a financial professional with a strong background in assurance, consulting, and financial analysis. 
          Currently working as an Assurance Senior at Ernst and Young in San Francisco, I specialize in financial 
          statement audits for public entities across various industries including Life Sciences, Real Estate, and Technology.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          My experience includes conducting substantive testing procedures on significant accounts, documenting financial controls,
          and utilizing advanced analysis tools to efficiently examine large data sets.
        </p>
        <p className="text-lg leading-relaxed">
          I hold a Bachelor of Arts in Economics from the University of California, Los Angeles, where I developed a strong 
          foundation in economic theory, mathematics, and statistical analysis.
        </p>
      </div>
    </section>
  );
};

export default About;
