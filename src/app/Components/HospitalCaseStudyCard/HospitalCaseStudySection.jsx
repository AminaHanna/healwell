'use client';

import SectionHeading from '../SectionHeading';
import HospitalCaseStudyCard from './index';

const HospitalCaseStudySection = ({ data }) => {
  const {
    sectionTitle,
    sectionSubtitle,
    sectionDescription,
    caseStudies = [],
  } = data;

  return (
    <div className="cs_hospital_case_study_section">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          SectionTitle={sectionTitle}
          SectionSubtitle={sectionSubtitle}
          SectionDescription={sectionDescription}
          variant="text-center"
        />

        <div className="cs_height_50 cs_height_lg_50" />

        {/* Case Studies Grid */}
        <div className="cs_case_studies_grid">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="cs_case_study_item">
              <HospitalCaseStudyCard data={caseStudy} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalCaseStudySection;

