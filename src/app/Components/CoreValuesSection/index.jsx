'use client';

import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

const CoreValuesSection = () => {
  const coreValues = [
    {
      id: 1,
      title: 'Compassion',
      description: 'Caring for both our clients and healthcare professionals',
    },
    {
      id: 2,
      title: 'Responsiveness',
      description: 'Quick, efficient service when you need it most',
    },
    {
      id: 3,
      title: 'Inclusion',
      description: 'Embracing diversity in all its forms',
    },
    {
      id: 4,
      title: 'Reliability',
      description: 'Dependable staffing solutions you can count on',
    },
    {
      id: 5,
      title: 'Integrity',
      description: 'Honest, transparent relationships built on trust',
    },
  ];

  return (
    <div className="cs_core_values_section">
      <div className="container">
        <SectionHeading
          SectionSubtitle="OUR VALUES"
          SectionTitle="Our Core Values"
          variant="text-center"
        />

        <Spacing lg="50" md="50" />

        <div className="cs_continuous_carousel">
          <div className="cs_carousel_track">
            {/* Duplicate values for seamless loop */}
            {[...coreValues, ...coreValues].map((value, index) => (
              <div className="cs_carousel_slide" key={index}>
                <div className="cs_core_value_card">
                  <div className="cs_card_number">{String(value.id).padStart(2, '0')}</div>
                  <h3 className="cs_card_title">{value.title}</h3>
                  <p className="cs_card_description">{value.description}</p>
                  <div className="cs_card_icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M14 20L18 24L26 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;

