import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Rocket, Award } from 'lucide-react';

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineStages = [
    {
      icon: <Lightbulb size={28} className="text-white" />,
      title: 'Setup',
      weeks: 'Weeks 1-7',
      color: 'bg-primary-600',
      description: 'During this phase, entrepreneurs will refine their business ideas, establish solid foundations, and prepare comprehensive business plans.',
      activities: [
        'Concept refinement & market research',
        'Business model development',
        'Initial mentorship matching',
        'Foundational business workshops'
      ]
    },
    {
      icon: <Rocket size={28} className="text-white" />,
      title: 'Process',
      weeks: 'Weeks 8-17',
      color: 'bg-primary-800',
      description: 'This critical phase focuses on implementation, building, and gaining traction. Entrepreneurs will develop prototypes and validate their business models.',
      activities: [
        'Product/service development',
        'Customer acquisition strategies',
        'Financial management training',
        'Pitch preparation & practice'
      ]
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: 'Execution',
      weeks: 'Weeks 18-23',
      color: 'bg-accent-500',
      description: 'The final stage culminates in a grand finale event where entrepreneurs showcase their businesses to investors, mentors, and the broader community.',
      activities: [
        'Scaling strategies implementation',
        'Investor readiness preparation',
        'Media & PR training',
        'Grand Finale showcase event'
      ]
    }
  ];

  return (
    <section id="program" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Program Timeline</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our structured 23-week program is designed to take entrepreneurs from concept to execution through three key phases.
          </p>
        </motion.div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute h-1 bg-gray-300 top-16 left-0 right-0 -mx-4"></div>
            
            {/* Timeline Stages */}
            <div className="flex justify-between">
              {timelineStages.map((stage, index) => (
                <motion.div 
                  key={index}
                  className="relative w-1/3 px-4"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  <div className={`${stage.color} w-12 h-12 rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10`}>
                    {stage.icon}
                  </div>
                  <div className="pt-24 text-center">
                    <h3 className="text-xl font-semibold text-primary-800 mb-1">{stage.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm font-medium">{stage.weeks}</p>
                    <p className="text-gray-700 mb-4">{stage.description}</p>
                    <ul className="text-left text-gray-700 pl-5 space-y-1">
                      {stage.activities.map((activity, idx) => (
                        <li key={idx} className="list-disc text-sm">{activity}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden">
          <div className="relative pl-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-gray-300">
            {timelineStages.map((stage, index) => (
              <motion.div 
                key={index}
                className="mb-10 relative"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <div className={`${stage.color} w-8 h-8 rounded-full flex items-center justify-center absolute -left-4 z-10`}>
                  {React.cloneElement(stage.icon, { size: 20 })}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-custom">
                  <h3 className="text-lg font-semibold text-primary-800 mb-1">{stage.title}</h3>
                  <p className="text-gray-600 mb-3 text-xs font-medium">{stage.weeks}</p>
                  <p className="text-gray-700 mb-4 text-sm">{stage.description}</p>
                  <ul className="text-gray-700 pl-5 space-y-1">
                    {stage.activities.map((activity, idx) => (
                      <li key={idx} className="list-disc text-xs">{activity}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="bg-primary-50 p-6 rounded-lg border border-primary-200 max-w-3xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h3 className="text-xl font-semibold text-primary-800 mb-3 text-center">Application Process</h3>
          <p className="text-gray-700 text-center">
            Applications for our next cohort are now open! Submit your business idea, and if selected, join our 23-week journey to transform your entrepreneurial vision into reality.
          </p>
          <div className="mt-6 text-center">
            <a 
              href="#apply" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 inline-block"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;