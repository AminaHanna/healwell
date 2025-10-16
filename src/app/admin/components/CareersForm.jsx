'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function CareersForm({ career, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    department: '',
    location: '',
    job_type: 'Full-time',
    experience_level: 'Mid-level',
    salary_range: '',
    description: '',
    requirements: '',
    benefits: '',
    active: true,
  });

  useEffect(() => {
    if (career) {
      setFormData(career);
    }
  }, [career]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && !career && { slug: generateSlug(value) })
    }));
  };

  const handleDescriptionChange = (content) => {
    setFormData(prev => ({
      ...prev,
      description: content
    }));
  };

  const handleRequirementsChange = (content) => {
    setFormData(prev => ({
      ...prev,
      requirements: content
    }));
  };

  const handleBenefitsChange = (content) => {
    setFormData(prev => ({
      ...prev,
      benefits: content
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.department || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    onSave(formData);
  };

  return (
    <div className="form-modal-overlay" onClick={onCancel}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h3 className="cs_primary_color">
            {career ? 'Edit Career Posting' : 'Create New Career Posting'}
          </h3>
          <button className="close-btn" onClick={onCancel}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="career-form">
          <div className="form-group">
            <label className="cs_primary_color">Job Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Auto-generated from title"
              disabled
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Department *</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g., Cardiology"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., New York, NY"
              required
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Job Type</label>
            <select name="job_type" value={formData.job_type} onChange={handleChange}>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Experience Level</label>
            <select name="experience_level" value={formData.experience_level} onChange={handleChange}>
              <option value="Entry-level">Entry-level</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior">Senior</option>
              <option value="Executive">Executive</option>
            </select>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Salary Range</label>
            <input
              type="text"
              name="salary_range"
              value={formData.salary_range}
              onChange={handleChange}
              placeholder="e.g., $80,000 - $120,000"
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Job Description *</label>
            <div className="quill-editor-wrapper">
              <ReactQuill
                value={formData.description}
                onChange={handleDescriptionChange}
                theme="snow"
                placeholder="Enter job description"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['link', 'image'],
                    ['clean']
                  ]
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Requirements</label>
            <div className="quill-editor-wrapper">
              <ReactQuill
                value={formData.requirements}
                onChange={handleRequirementsChange}
                theme="snow"
                placeholder="Enter job requirements"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['link', 'image'],
                    ['clean']
                  ]
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Benefits</label>
            <div className="quill-editor-wrapper">
              <ReactQuill
                value={formData.benefits}
                onChange={handleBenefitsChange}
                theme="snow"
                placeholder="Enter job benefits"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'align': [] }],
                    ['link', 'image'],
                    ['clean']
                  ]
                }}
              />
            </div>
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="active"
              id="active"
              checked={formData.active}
              onChange={handleChange}
            />
            <label htmlFor="active" className="cs_secondary_color">
              Publish this career posting
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="cs_btn cs_style_2" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="cs_btn cs_style_1">
              {career ? 'Update Career' : 'Create Career'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

