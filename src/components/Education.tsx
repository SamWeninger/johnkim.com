
import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
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
    <section id="education" ref={sectionRef} className="section-container anim-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12">
          <div className="mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-md">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Arts in Economics</h3>
                <div className="flex flex-wrap items-center gap-x-3 text-muted-foreground mt-1 mb-3">
                  <span className="font-medium">University of California, Los Angeles</span>
                  <span>•</span>
                  <span>Los Angeles, CA</span>
                  <div className="flex items-center gap-1 mt-1 sm:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span>2018-2022</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p><strong>Major GPA:</strong> 3.86 / 4.0</p>
                  <p><strong>Cumulative GPA:</strong> 3.55 / 4.0</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <p className="experience-item">
                    Game Theory, Differential and Integral Calculus, Multivariable Calculus, 
                    Microeconomic Theory, Econometrics, Principles of Accounting, Statistical Reasoning, Macroeconomics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
