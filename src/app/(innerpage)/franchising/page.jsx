'use client';

import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import SectionHeading from '@/app/Components/SectionHeading';
import Button from '@/app/Components/Buttons';
import React from 'react';
import { FaGraduationCap, FaTrophy, FaChartLine, FaHeadset, FaBullhorn, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

const headingData = {
  title: 'Franchising',
};

const Page = () => {
  const handleMarketInfo = (region) => {
    // Navigate to contact form with pre-filled region
    window.location.href = `/contact?region=${region}`;
  };

  return (
    <div>
      {/* Page Heading */}
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Hero Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="cs_franchising_hero">
            <h2 className="cs_primary_color">Franchise Opportunities</h2>
            <p className="cs_franchising_hero_text">
              Join the Healwell Healthcare family and build a successful healthcare staffing business in your market. Proven systems, ongoing support, and unlimited growth potential.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Franchise Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <SectionHeading
            SectionSubtitle="FRANCHISE BENEFITS"
            SectionTitle="Why Franchise with Healwell?"
            SectionDescription="Leverage our proven business model and industry expertise to build your healthcare staffing empire"
            variant="text-center"
          />
          <div className="cs_height_50 cs_height_lg_50" />
          
          <div className="cs_franchising_cards">
            {/* Card 1 */}
            <div className="cs_franchising_card">
              <div className="card_icon">
                <FaChartLine />
              </div>
              <h3 className="cs_primary_color">Proven Growth Model</h3>
              <p>Our franchisees see average revenue growth of 35% year-over-year with our tested systems.</p>
            </div>

            {/* Card 2 */}
            <div className="cs_franchising_card">
              <div className="card_icon">
                <FaGraduationCap />
              </div>
              <h3 className="cs_primary_color">Comprehensive Training</h3>
              <p>6-week intensive training program plus ongoing education and support systems.</p>
            </div>

            {/* Card 3 */}
            <div className="cs_franchising_card">
              <div className="card_icon">
                <FaTrophy />
              </div>
              <h3 className="cs_primary_color">Industry Leadership</h3>
              <p>Join the #1 rated healthcare staffing franchise with 98% franchisee satisfaction.</p>
            </div>

            {/* Card 4 */}
            <div className="cs_franchising_card">
              <div className="card_icon">
                <FaHandshake />
              </div>
              <h3 className="cs_primary_color">Strong ROI</h3>
              <p>Average franchisee achieves profitability within 18 months with our support.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment Overview Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <SectionHeading
            SectionSubtitle="INVESTMENT DETAILS"
            SectionTitle="Investment Overview"
            variant="text-center"
          />
          <div className="cs_height_50 cs_height_lg_50" />

          <div className="cs_investment_overview">
            <div className="cs_investment_grid">
              <div className="cs_investment_item">
                <h4>Initial Franchise Fee</h4>
                <p className="cs_investment_value">$75,000</p>
              </div>
              <div className="cs_investment_item">
                <h4>Total Investment Range</h4>
                <p className="cs_investment_value">$150K - $250K</p>
              </div>
              <div className="cs_investment_item">
                <h4>Liquid Capital Required</h4>
                <p className="cs_investment_value">$100,000</p>
              </div>
              <div className="cs_investment_item">
                <h4>Ongoing Royalty</h4>
                <p className="cs_investment_value">6% of Gross Revenue</p>
              </div>
            </div>

            {/* <div className="cs_height_50 cs_height_lg_50" /> */}

            <div className="cs_requirements">
              <h3 className="cs_primary_color">Franchise Requirements</h3>
              <ul className="cs_requirements_list">
                <li><FaCheckCircle /> Business or healthcare industry experience preferred</li>
                <li><FaCheckCircle /> Strong leadership and management skills</li>
                <li><FaCheckCircle /> Commitment to brand standards and values</li>
                <li><FaCheckCircle /> Financial qualifications and creditworthiness</li>
                <li><FaCheckCircle /> Dedication to community involvement</li>
                <li><FaCheckCircle /> Passion for healthcare and helping others</li>
                <li><FaCheckCircle /> Ability to follow proven systems and processes</li>
                <li><FaCheckCircle /> Commitment to ongoing training and development</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Support System Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <SectionHeading
            SectionSubtitle="FRANCHISEE SUPPORT"
            SectionTitle="Comprehensive Support System"
            SectionDescription="We provide everything you need to succeed, from initial training to ongoing operational support"
            variant="text-center"
          />
          <div className="cs_height_50 cs_height_lg_50" />

          <div className="cs_support_cards">
            {/* Support Card 1 */}
            <div className="cs_support_card">
              <h3 className="cs_primary_color">Initial Training Program</h3>
              <ul className="cs_support_list">
                <li>6-week comprehensive training</li>
                <li>Healthcare staffing fundamentals</li>
                <li>Sales and marketing strategies</li>
                <li>Operations and compliance</li>
                <li>Technology platform training</li>
                <li>Financial management systems</li>
              </ul>
            </div>

            {/* Support Card 2 */}
            <div className="cs_support_card">
              <h3 className="cs_primary_color">Marketing Support</h3>
              <ul className="cs_support_list">
                <li>National advertising campaigns</li>
                <li>Local marketing materials</li>
                <li>Digital marketing support</li>
                <li>Brand development assistance</li>
                <li>Lead generation systems</li>
                <li>Social media templates</li>
              </ul>
            </div>

            {/* Support Card 3 */}
            <div className="cs_support_card">
              <h3 className="cs_primary_color">Ongoing Operations</h3>
              <ul className="cs_support_list">
                <li>24/7 technical support</li>
                <li>Regular business coaching</li>
                <li>Quality assurance programs</li>
                <li>Compliance monitoring</li>
                <li>Performance benchmarking</li>
                <li>Peer networking opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Available Markets Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <SectionHeading
            SectionSubtitle="EXPANSION OPPORTUNITIES"
            SectionTitle="Available Markets"
            SectionDescription="Prime territories available in growing healthcare markets across the country"
            variant="text-center"
          />
          <div className="cs_height_50 cs_height_lg_50" />

          <div className="cs_markets_grid">
            {/* Market 1 */}
            <div className="cs_market_card">
              <h3 className="cs_primary_color">Southeast Region</h3>
              <div className="market_info">
                <p><strong>Available Markets:</strong> Atlanta, GA • Charlotte, NC • Jacksonville, FL • Nashville, TN</p>
                <p><strong>Population:</strong> 2.5M+ Combined</p>
                <p><strong>Healthcare Facilities:</strong> 150+ Healthcare Facilities</p>
              </div>
              <Button
                btnText="Request Market Info"
                variant="cs_btn cs_style_1 cs_color_1"
                btnUrl="/contact?region=Southeast"
              />
            </div>

            {/* Market 2 */}
            <div className="cs_market_card">
              <h3 className="cs_primary_color">Southwest Region</h3>
              <div className="market_info">
                <p><strong>Available Markets:</strong> Austin, TX • Phoenix, AZ • Denver, CO • Las Vegas, NV</p>
                <p><strong>Population:</strong> 3.2M+ Combined</p>
                <p><strong>Healthcare Facilities:</strong> 200+ Healthcare Facilities</p>
              </div>
              <Button
                btnText="Request Market Info"
                variant="cs_btn cs_style_1 cs_color_1"
                btnUrl="/contact?region=Southwest"
              />
            </div>

            {/* Market 3 */}
            <div className="cs_market_card">
              <h3 className="cs_primary_color">Midwest Region</h3>
              <div className="market_info">
                <p><strong>Available Markets:</strong> Columbus, OH • Indianapolis, IN • Milwaukee, WI • Kansas City, MO</p>
                <p><strong>Population:</strong> 2.8M+ Combined</p>
                <p><strong>Healthcare Facilities:</strong> 175+ Healthcare Facilities</p>
              </div>
              <Button
                btnText="Request Market Info"
                variant="cs_btn cs_style_1 cs_color_1"
                btnUrl="/contact?region=Midwest"
              />
            </div>

            {/* Market 4 */}
            <div className="cs_market_card">
              <h3 className="cs_primary_color">Northeast Region</h3>
              <div className="market_info">
                <p><strong>Available Markets:</strong> Hartford, CT • Albany, NY • Providence, RI • Portland, ME</p>
                <p><strong>Population:</strong> 1.9M+ Combined</p>
                <p><strong>Healthcare Facilities:</strong> 125+ Healthcare Facilities</p>
              </div>
              <Button
                btnText="Request Market Info"
                variant="cs_btn cs_style_1 cs_color_1"
                btnUrl="/contact?region=Northeast"
              />
            </div>

            {/* Market 5 */}
            <div className="cs_market_card">
              <h3 className="cs_primary_color">West Coast Region</h3>
              <div className="market_info">
                <p><strong>Available Markets:</strong> Sacramento, CA • Portland, OR • Spokane, WA • Boise, ID</p>
                <p><strong>Population:</strong> 2.1M+ Combined</p>
                <p><strong>Healthcare Facilities:</strong> 140+ Healthcare Facilities</p>
              </div>
              <Button
                btnText="Request Market Info"
                variant="cs_btn cs_style_1 cs_color_1"
                btnUrl="/contact?region=WestCoast"
              />
            </div>

            {/* Market 6 */}
            <div className="cs_market_card">
              <h3 className="cs_primary_color">Mountain Region</h3>
              <div className="market_info">
                <p><strong>Available Markets:</strong> Salt Lake City, UT • Albuquerque, NM • Billings, MT • Cheyenne, WY</p>
                <p><strong>Population:</strong> 1.6M+ Combined</p>
                <p><strong>Healthcare Facilities:</strong> 95+ Healthcare Facilities</p>
              </div>
              <Button
                btnText="Request Market Info"
                variant="cs_btn cs_style_1 cs_color_1"
                btnUrl="/contact?region=Mountain"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Application Process Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <SectionHeading
            SectionSubtitle="GETTING STARTED"
            SectionTitle="Franchise Application Process"
            SectionDescription="Our streamlined process gets you from inquiry to opening in just 90-120 days"
            variant="text-center"
          />
          <div className="cs_height_50 cs_height_lg_50" />

          <div className="cs_process_timeline">
            <div className="cs_process_step">
              <div className="step_number">01</div>
              <h3 className="cs_primary_color">Initial Inquiry</h3>
              <p>Submit your franchise inquiry and schedule a discovery call with our team.</p>
            </div>

            <div className="cs_process_step">
              <div className="step_number">02</div>
              <h3 className="cs_primary_color">Qualification</h3>
              <p>Complete financial qualification and review franchise disclosure document.</p>
            </div>

            <div className="cs_process_step">
              <div className="step_number">03</div>
              <h3 className="cs_primary_color">Discovery Day</h3>
              <p>Visit our headquarters, meet the team, and experience our culture firsthand.</p>
            </div>

            <div className="cs_process_step">
              <div className="step_number">04</div>
              <h3 className="cs_primary_color">Launch & Training</h3>
              <p>Sign agreement, complete training program, and launch your franchise.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        topSpaceLg="40"
        topSpaceMd="60"
        bottomSpaceLg="40"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="cs_franchising_cta">
            <h2 className="cs_primary_color">Ready to Join the Healwell Family?</h2>
            <p>Take the first step toward building your healthcare staffing empire. Contact us today to learn more about franchise opportunities.</p>
            <Button
              btnText="Start Your Journey"
              variant="cs_btn cs_style_1 cs_color_1"
              btnUrl="/contact"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Page;

