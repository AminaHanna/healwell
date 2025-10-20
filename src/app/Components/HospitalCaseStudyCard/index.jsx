'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUsers, FaCheck, FaStar, FaArrowRight } from 'react-icons/fa6';

const HospitalCaseStudyCard = ({ data }) => {
  const {
    id,
    featuredImage,
    category = 'Hospitals',
    title,
    hospitalName,
    location,
    duration,
    staffPlaced,
    description,
    keyResults = [],
    testimonial,
    testimonialAuthor,
    testimonialTitle,
    rating = 5,
    caseStudyLink = '#',
  } = data;

  return (
    <div className="cs_hospital_case_study_card">
      {/* Featured Image */}
      <div className="cs_card_featured_image">
        <Link href={caseStudyLink} className="cs_card_image_link">
          <Image
            src={featuredImage}
            alt={title}
            width={400}
            height={280}
            className="cs_card_image"
          />
        </Link>

        {/* Category Badge */}
        <div className="cs_category_badge">
          {category}
        </div>
      </div>

      {/* Card Content */}
      <div className="cs_card_content">
        {/* Title */}
        <h3 className="cs_case_study_title">
          <Link href={caseStudyLink}>{title}</Link>
        </h3>

        {/* Subtitle - Hospital Name & Location */}
        <p className="cs_case_study_subtitle">
          {hospitalName} • {location}
        </p>

        {/* Info Chips */}
        <div className="cs_info_chips">
          <div className="cs_chip">
            <FaCalendar className="cs_chip_icon" />
            <span>{duration}</span>
          </div>
          <div className="cs_chip">
            <FaUsers className="cs_chip_icon" />
            <span>{staffPlaced}</span>
          </div>
        </div>

        {/* Description */}
        <p className="cs_case_study_description">
          {description}
        </p>

        {/* Key Results Section */}
        {keyResults && keyResults.length > 0 && (
          <div className="cs_key_results_section">
            <h4 className="cs_key_results_title">Key Results</h4>
            <ul className="cs_key_results_list">
              {keyResults.map((result, index) => (
                <li key={index} className="cs_key_result_item">
                  <FaCheck className="cs_result_icon" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Testimonial Block */}
        {testimonial && (
          <div className="cs_testimonial_block">
            {/* Star Rating */}
            <div className="cs_star_rating">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="cs_star" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="cs_testimonial_text">
              &quot;{testimonial}&quot;
            </p>

            {/* Author Attribution */}
            <div className="cs_testimonial_author">
              <p className="cs_author_name">{testimonialAuthor}</p>
              <p className="cs_author_title">{testimonialTitle}</p>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Link href={caseStudyLink} className="cs_case_study_btn">
          <span>View Case Study</span>
          <FaArrowRight className="cs_btn_icon" />
        </Link>
      </div>
    </div>
  );
};

export default HospitalCaseStudyCard;

