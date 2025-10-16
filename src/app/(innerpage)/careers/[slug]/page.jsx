'use client';

import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const headingData = {
  title: "Career Details",
};

export default function CareerDetailsPage({ params }) {
  const slug = params.slug;
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch(`/api/careers?slug=${slug}`);
        const data = await response.json();
        
        if (data && data.length > 0) {
          setCareer(data[0]);
        }
      } catch (error) {
        console.error('Error fetching career:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCareer();
    }
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Section
          className={'cs_page_heading cs_bg_filed cs_center'}
          backgroundImage="/assets/img/page_heading_bg.jpg"
        >
          <PageHeading data={headingData} />
        </Section>
        <Section topSpaceLg="80" topSpaceMd="120" bottomSpaceLg="80" bottomSpaceMd="120">
          <div className="container">
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Loading career details...</p>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  if (!career) {
    return (
      <div>
        <Section
          className={'cs_page_heading cs_bg_filed cs_center'}
          backgroundImage="/assets/img/page_heading_bg.jpg"
        >
          <PageHeading data={headingData} />
        </Section>
        <Section topSpaceLg="80" topSpaceMd="120" bottomSpaceLg="80" bottomSpaceMd="120">
          <div className="container">
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Career posting not found</p>
              <Link href="/careers" style={{ color: '#2ea6f7', textDecoration: 'none', fontWeight: 'bold' }}>
                ← Back to Careers
              </Link>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Job Title and Basic Info */}
              <div style={{ marginBottom: '40px' }}>
                <h1 style={{ color: '#002261', marginBottom: '20px', fontSize: '36px', fontWeight: '700' }}>
                  {career.title}
                </h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #2ea6f7' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Department</p>
                    <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.department}</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #2ea6f7' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Location</p>
                    <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.location}</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #2ea6f7' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Job Type</p>
                    <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.job_type}</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: '#f9fafb', borderRadius: '8px', borderLeft: '4px solid #2ea6f7' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Experience</p>
                    <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.experience_level}</p>
                  </div>
                </div>

                {career.salary_range && (
                  <div style={{ padding: '20px', backgroundColor: '#e8f4fd', borderRadius: '8px', marginBottom: '30px', borderLeft: '4px solid #2ea6f7' }}>
                    <p style={{ margin: '0 0 5px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Salary Range</p>
                    <p style={{ margin: '0', color: '#002261', fontSize: '20px', fontWeight: '700' }}>💰 {career.salary_range}</p>
                  </div>
                )}
              </div>

              {/* Job Description */}
              {career.description && (
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ color: '#002261', marginBottom: '20px', fontSize: '24px', fontWeight: '600' }}>Job Description</h2>
                  <div
                    className="cs_blog_content"
                    dangerouslySetInnerHTML={{ __html: career.description }}
                    style={{ color: '#636363', lineHeight: '1.8' }}
                  />
                </div>
              )}

              {/* Requirements */}
              {career.requirements && (
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ color: '#002261', marginBottom: '20px', fontSize: '24px', fontWeight: '600' }}>Requirements</h2>
                  <div
                    className="cs_blog_content"
                    dangerouslySetInnerHTML={{ __html: career.requirements }}
                    style={{ color: '#636363', lineHeight: '1.8' }}
                  />
                </div>
              )}

              {/* Benefits */}
              {career.benefits && (
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ color: '#002261', marginBottom: '20px', fontSize: '24px', fontWeight: '600' }}>Benefits</h2>
                  <div
                    className="cs_blog_content"
                    dangerouslySetInnerHTML={{ __html: career.benefits }}
                    style={{ color: '#636363', lineHeight: '1.8' }}
                  />
                </div>
              )}

              {/* Apply Button */}
              <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #e0e0e0' }}>
                <button
                  style={{
                    backgroundColor: '#002261',
                    color: 'white',
                    padding: '15px 40px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2ea6f7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#002261';
                  }}
                  onClick={() => alert('Apply functionality coming soon!')}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div style={{ padding: '30px', backgroundColor: '#f9fafb', borderRadius: '8px', position: 'sticky', top: '20px' }}>
                <h3 style={{ color: '#002261', marginBottom: '20px', fontSize: '20px', fontWeight: '600' }}>Quick Info</h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Department</p>
                  <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.department}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Location</p>
                  <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.location}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Job Type</p>
                  <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.job_type}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <p style={{ margin: '0 0 8px 0', color: '#636363', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Experience Level</p>
                  <p style={{ margin: '0', color: '#002261', fontSize: '16px', fontWeight: '600' }}>{career.experience_level}</p>
                </div>

                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#2ea6f7',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '20px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#002261';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2ea6f7';
                  }}
                  onClick={() => alert('Apply functionality coming soon!')}
                >
                  Apply Now
                </button>

                <Link
                  href="/careers"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '15px',
                    color: '#2ea6f7',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  ← Back to Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

