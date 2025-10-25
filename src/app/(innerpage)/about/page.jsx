import About from '@/app/Components/About';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import SectionHeading from '@/app/Components/SectionHeading';
import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa6';

const headingData = {
    title: 'About Page',
  };
  
  const aboutData = {
    sectionSubtitle: 'OUR STORY',
    sectionTitle: 'Healing Starts with the Right Team',
    aboutText:
      'Healwell Healthcare Services was born from a simple yet powerful observation: healthcare facilities needed more than just temporary staff – they needed trusted partners who understood the critical nature of patient care and the complexities of healthcare operations. Founded by healthcare professionals who experienced firsthand the challenges of staffing shortages, we built our company on the foundation of reliability, integrity, and deep respect for the healthcare profession. Today, we are proud to serve hundreds of healthcare facilities across the region, connecting them with thousands of qualified professionals who share our commitment to exceptional patient care.',
    service:
      "There are many variations of pass available this medical service the team <a href='#''>READ MORE +</a>",
    // experienceYears: '26+',
    // experienceTitle: 'Experience',
    // videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    // videoText: 'How We Work',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Client Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Doctor Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
    ],
  
    btnUrl: '/about',
    btnText: 'About More',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about_img_7.jpeg',
  };
  
  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 500,
      suffix: '+',
      title: 'Healthcare Facilities Served',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 2000,
      suffix: '+',
      title: 'Qualified Professionals',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 98,
      suffix: '%',
      title: 'Client Satisfaction Rate',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 24,
      suffix: 'hrs',
      title: 'Emergency Response Time',
    },
  ];
  
  // Team data is now fetched dynamically from the API in TeamSection component
  // No need to hardcode team data here
  
  const ctaData = {
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoButtonText: 'WATCH VIDEO',
    subtitle: 'OUR WATCH VIDEO',
    title: 'Professional Medical Care Measure Medical.',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
    buttonLink: '/contact',
    buttonText: 'Video More',
    brandImage: '/assets/img/medical_brand.png',
  };

const page = () => {
    return (
        <div className='about-page-area'>
        <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} pageName="about" />
      </Section>

      {/* Start About Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Mission and Vision Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_mission_vision_section'}
      >
        <div className="container">
          {/* Section Heading */}
          <div className="cs_mission_vision_heading">
            <SectionHeading
              SectionSubtitle="OUR MISSION & VISION"
              SectionTitle="What Drives Us"
              variant="text-center"
            />
          </div>

          {/* Cards Container */}
          <div className="cs_mission_vision_container">
            {/* Mission Card */}
            <div className="cs_mission_vision_card cs_mission_card">
              <div className="cs_mission_vision_card_inner">
                <div className="cs_mission_vision_icon_wrapper">
                  <div className="cs_mission_vision_icon">
                    <FaBullseye />
                  </div>
                </div>
                <h3 className="cs_mission_vision_title">Our Mission</h3>
                <p className="cs_mission_vision_text">
                  To bridge the gap between exceptional healthcare professionals and the facilities that need them most, ensuring continuity of care and peace of mind for all stakeholders. We are committed to showing up when it matters most, delivering reliable staffing solutions that support both patient outcomes and professional growth.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="cs_mission_vision_card cs_vision_card">
              <div className="cs_mission_vision_card_inner">
                <div className="cs_mission_vision_icon_wrapper">
                  <div className="cs_mission_vision_icon">
                    <FaEye />
                  </div>
                </div>
                <h3 className="cs_mission_vision_title">Our Vision</h3>
                <p className="cs_mission_vision_text">
                  To be the most trusted healthcare staffing partner in the region, known for our unwavering commitment to quality, reliability, and the values that make healthcare a calling rather than just a job. We envision a future where staffing challenges never compromise patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* End Mission and Vision Section */}

      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>
      {/* End Counter Section */}

      {/* Start CTA Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section> */}
      {/* End CTA Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
        />
      </Section>
      {/* End Team Section */}


        </div>
    );
};

export default page;