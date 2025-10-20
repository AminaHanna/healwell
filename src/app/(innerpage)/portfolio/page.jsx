'use client';

import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React, { useState, useEffect } from 'react';
import HospitalCaseStudySection from '@/app/Components/HospitalCaseStudyCard/HospitalCaseStudySection';
import { supabase } from '@/lib/supabase';

const headingData = {
  title: 'Our Portfolio',
};

const CATEGORIES = [
  { id: 'all', label: 'All Projects', value: null },
  { id: 'hospitals', label: 'Hospitals', value: 'Hospitals' },
  { id: 'longterm', label: 'Long-term Care', value: 'Long-term Care' },
  { id: 'emergency', label: 'Emergency Response', value: 'Emergency Response' },
  { id: 'specialty', label: 'Specialty Care', value: 'Specialty Care' },
];

export default function PortfolioPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .eq('active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;

      // Transform database data to match component structure
      const transformedData = data.map((item) => ({
        id: item.id,
        featuredImage: item.featured_image,
        category: item.category,
        title: item.title,
        hospitalName: item.hospital_name,
        location: item.location,
        duration: item.duration,
        staffPlaced: item.staff_placed,
        description: item.description,
        keyResults: item.key_results || [],
        testimonial: item.testimonial,
        testimonialAuthor: item.testimonial_author,
        testimonialTitle: item.testimonial_author_title,
        rating: item.rating,
        caseStudyLink: `/portfolio/${item.slug}`,
      }));

      setCaseStudies(transformedData);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter case studies based on active tab
  const getFilteredCaseStudies = () => {
    const activeCategory = CATEGORIES.find((cat) => cat.id === activeTab);
    if (!activeCategory || activeCategory.value === null) {
      return caseStudies;
    }
    return caseStudies.filter((study) => study.category === activeCategory.value);
  };

  const filteredCaseStudies = getFilteredCaseStudies();

  const caseStudiesSectionData = {
    sectionTitle: 'Healthcare Staffing Solutions',
    sectionSubtitle: 'OUR PORTFOLIO',
    sectionDescription:
      'Explore our successful healthcare staffing solutions and case studies from leading hospitals and medical centers across the country.',
    caseStudies: filteredCaseStudies,
  };

  if (loading) {
    return (
      <div>
        <Section
          className="cs_page_heading cs_bg_filed cs_center"
          backgroundImage="/assets/img/page_heading_bg.jpg"
        >
          <PageHeading data={headingData} />
        </Section>
        <Section
          topSpaceLg="70"
          topSpaceMd="110"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <div className="text-center">Loading portfolio...</div>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          {/* Portfolio Tabs */}
          <div className="cs_portfolio_tabs">
            <ul className="cs_tab_links cs_style_3 cs_mp_0">
              {CATEGORIES.map((category) => (
                <li
                  key={category.id}
                  className={activeTab === category.id ? 'active' : ''}
                  onClick={() => setActiveTab(category.id)}
                >
                  <a href={`#${category.id}`}>{category.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Case Studies Grid */}
          {filteredCaseStudies.length > 0 ? (
            // <HospitalCaseStudySection data={caseStudiesSectionData} />
            <HospitalCaseStudySection data={caseStudiesSectionData} />
          ) : (
            <div className="text-center">
              <p>No case studies found in this category.</p>
            </div>
          )}

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Proven Track Record Section */}
          <div className="cs_proven_track_record">
            <div className="track_record_header">
              <h2 className="cs_primary_color">Proven Track Record</h2>
              <p className="cs_secondary_color">
                Our portfolio demonstrates consistent success across diverse healthcare environments
              </p>
            </div>

            <div className="track_record_cards">
              {/* Card 1: Operational Excellence */}
              <div className="track_record_card">
                <div className="card_icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                    <path d="M9 15l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="cs_primary_color">Operational Excellence</h3>
                <ul className="track_record_metrics">
                  <li>98% average client satisfaction</li>
                  <li>96% shift fill rate</li>
                  <li>30% average efficiency improvement</li>
                  <li>25% reduction in turnover</li>
                </ul>
              </div>

              {/* Card 2: Quality Outcomes */}
              <div className="track_record_card">
                <div className="card_icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                <h3 className="cs_primary_color">Quality Outcomes</h3>
                <ul className="track_record_metrics">
                  <li>99% professional retention</li>
                  <li>95% patient satisfaction scores</li>
                  <li>Zero safety incidents</li>
                  <li>100% credential compliance</li>
                </ul>
              </div>

              {/* Card 3: Industry Recognition */}
              <div className="track_record_card">
                <div className="card_icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 25 12 19.54 3.73 25 6.82 16.70 0 10.27 8.91 10.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="cs_primary_color">Industry Recognition</h3>
                <ul className="track_record_metrics">
                  <li>15+ industry awards</li>
                  <li>Joint Commission partnerships</li>
                  <li>Magnet hospital collaborations</li>
                  <li>CARF accreditation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
