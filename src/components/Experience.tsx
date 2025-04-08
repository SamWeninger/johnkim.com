
import { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

const ExperienceItem = ({ title, company, location, period, responsibilities, delay = 0 }: ExperienceItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={itemRef} className="mb-10 anim-on-scroll">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-md">
          <Briefcase className="text-primary h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-3 text-muted-foreground mt-1 mb-3">
            <span className="font-medium">{company}</span>
            <span>•</span>
            <span>{location}</span>
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="experience-item">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
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

  const experiences = [
    {
      title: "Assurance Senior",
      company: "Ernst and Young",
      location: "San Francisco, CA",
      period: "July 2022 - Present",
      responsibilities: [
        "Perform financial statement audits for public entities across Life Sciences, Real Estate, and Technology industries, with revenues ranging from $17M to $24B.",
        "Conduct substantive testing procedures on significant accounts including Bitcoin Revenue, fixed assets, inventories, operating expenses, payroll, and Order-to-Cash.",
        "Documented design/effectiveness of financial controls for a first year SOX company related to revenue.",
        "Utilized Alteryx and GLA Analyzer to efficiently analyze large data sets related to material transactions above tolerable error, reducing the time spent on the quarterly review by 25%.",
        "Collaborated with other internal units e.g. tax team, business valuation, and strategy and transactions team ensuring compliance of respective tax ordinances and valuation methods."
      ]
    },
    {
      title: "Associate Consultant",
      company: "AY Consulting",
      location: "Los Angeles, CA",
      period: "October 2019 - August 2021",
      responsibilities: [
        "Conducted financial analysis to identify cost-cutting options for a Los Angeles-based entertainment startup.",
        "Coordinated 25+ company relationships to market our consulting services and successfully secured 3 cases."
      ]
    },
    {
      title: "Finance Intern",
      company: "Hammer Museum",
      location: "Los Angeles, CA",
      period: "January 2020 - July 2021",
      responsibilities: [
        "Generated data reports and control covers for 50+ checks to be distributed among multiple departments.",
        "Created monthly expense reports for approval and reimbursement of financial transactions using Certify."
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section-container anim-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.company}
              {...experience}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
