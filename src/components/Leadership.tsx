
import { useEffect, useRef } from 'react';
import { Award, Calendar } from 'lucide-react';

interface LeadershipItemProps {
  title: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

const LeadershipItem = ({ title, organization, location, period, responsibilities, delay = 0 }: LeadershipItemProps) => {
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
          <Award className="text-primary h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-3 text-muted-foreground mt-1 mb-3">
            <span className="font-medium">{organization}</span>
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

const Leadership = () => {
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

  const leadershipExperiences = [
    {
      title: "Vice President of Administration",
      organization: "Outhrive Consulting",
      location: "Los Angeles, CA",
      period: "October 2019 - May 2021",
      responsibilities: [
        "Hosted recruiting, industry, and technical workshops to improve professional skills of the 20-member class.",
        "Monitored university resources to provide class with most relevant, up-to-date postings and internships."
      ]
    },
    {
      title: "Summer Scholar",
      organization: "Armanino Summer Leadership Conference",
      location: "Los Angeles, CA",
      period: "June 2020",
      responsibilities: [
        "Selected as 1 of 6 students to participate in a conference developing leadership skills in the auditing practice.",
        "Networked with working professionals about COVID-19 business transformation and industry changes."
      ]
    }
  ];

  return (
    <section id="leadership" ref={sectionRef} className="section-container anim-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Leadership</h2>
        
        <div className="mt-12">
          {leadershipExperiences.map((leadership, index) => (
            <LeadershipItem
              key={leadership.organization}
              {...leadership}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
