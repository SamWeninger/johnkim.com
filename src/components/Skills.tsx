
import { useEffect, useRef } from 'react';
import { Code, Activity } from 'lucide-react';

const Skills = () => {
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

  const skills = [
    "Microsoft Excel (Experienced)",
    "Adobe Photoshop",
    "Premiere Pro",
    "Lightroom",
    "Ableton Live"
  ];

  const interests = [
    "Fantasy Sports",
    "Hiking",
    "Hip-Hop",
    "Tennis",
    "Cooking",
    "Cell Phones",
    "Dogs",
    "Cloud Security",
    "Travel"
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-container anim-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Skills & Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary/10 p-2 rounded-md">
                <Code className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge hover-lift">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary/10 p-2 rounded-md">
                <Activity className="text-primary h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Interests</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="skill-badge hover-lift">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
