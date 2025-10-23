'use client';

import PageHeading from '@/app/Components/PageHeading';
import PageSEOContent from '@/app/Components/PageSEOContent';
import Section from '@/app/Components/Section';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const headingData = {
  title: "Careers",
};

export default function CareersPage() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/careers');
      const data = await response.json();
      setCareers(data || []);
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCareers = filter === 'all' 
    ? careers 
    : careers.filter(c => c.job_type === filter);

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Temporary'];

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* SEO Content Section */}
      <PageSEOContent pageName="careers" />

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          {/* Filter Section */}
          <div className="careers-filter-section" style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '20px' }}>Filter by Job Type</h3>
            <div className="filter-buttons" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
                style={{
                  padding: '10px 20px',
                  border: '2px solid #2ea6f7',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  backgroundColor: filter === 'all' ? '#2ea6f7' : 'transparent',
                  color: filter === 'all' ? 'white' : '#2ea6f7',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                All Jobs
              </button>
              {jobTypes.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${filter === type ? 'active' : ''}`}
                  onClick={() => setFilter(type)}
                  style={{
                    padding: '10px 20px',
                    border: '2px solid #2ea6f7',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    backgroundColor: filter === type ? '#2ea6f7' : 'transparent',
                    color: filter === type ? 'white' : '#2ea6f7',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Careers List */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Loading careers...</p>
            </div>
          ) : filteredCareers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>No career postings available at this time.</p>
            </div>
          ) : (
            <div className="careers-list">
              {filteredCareers.map((career) => (
                <div
                  key={career.id}
                  className="career-card"
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '25px',
                    marginBottom: '20px',
                    backgroundColor: '#f9fafb',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    ':hover': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', color: '#002261', fontSize: '22px', fontWeight: '600' }}>
                        {career.title}
                      </h3>
                      <p style={{ margin: '0 0 8px 0', color: '#636363', fontSize: '14px' }}>
                        <strong>Department:</strong> {career.department}
                      </p>
                      <p style={{ margin: '0 0 8px 0', color: '#636363', fontSize: '14px' }}>
                        <strong>Location:</strong> {career.location}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#2ea6f7',
                          color: 'white',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          marginBottom: '8px'
                        }}
                      >
                        {career.job_type}
                      </span>
                      <br />
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#e0e0e0',
                          color: '#333',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}
                      >
                        {career.experience_level}
                      </span>
                    </div>
                  </div>

                  {career.salary_range && (
                    <p style={{ margin: '0 0 15px 0', color: '#2ea6f7', fontSize: '14px', fontWeight: 'bold' }}>
                      💰 {career.salary_range}
                    </p>
                  )}

                  <p style={{ margin: '0 0 15px 0', color: '#636363', fontSize: '14px', lineHeight: '1.6' }}>
                    {career.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>

                  <Link
                    href={`/careers/${career.slug}`}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#002261',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2ea6f7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#002261';
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

