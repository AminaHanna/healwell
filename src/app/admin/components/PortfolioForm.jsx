'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { uploadImage } from '@/lib/imageUpload';

export default function PortfolioForm({ portfolio, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Hospitals',
    hospital_name: '',
    location: '',
    duration: '',
    staff_placed: '',
    description: '',
    key_results: [],
    testimonial: '',
    testimonial_author: '',
    testimonial_author_title: '',
    rating: 5,
    featured_image: '',
    active: true,
    display_order: 0,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [keyResultInput, setKeyResultInput] = useState('');

  useEffect(() => {
    if (portfolio) {
      setFormData(portfolio);
      if (portfolio.featured_image) {
        setImagePreview(portfolio.featured_image);
      }
    }
  }, [portfolio]);

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
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    if (name === 'title') {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(value),
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload to Supabase Storage using utility function
      const { publicUrl, error } = await uploadImage(file, 'portfolio-images', 'portfolio');

      if (error) throw error;

      setFormData(prev => ({
        ...prev,
        featured_image: publicUrl
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const addKeyResult = () => {
    if (keyResultInput.trim()) {
      setFormData({
        ...formData,
        key_results: [...formData.key_results, keyResultInput.trim()],
      });
      setKeyResultInput('');
    }
  };

  const removeKeyResult = (index) => {
    setFormData({
      ...formData,
      key_results: formData.key_results.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.hospital_name) {
      alert('Please fill in all required fields');
      return;
    }

    // Remove id field when updating to avoid "GENERATED ALWAYS" error
    const dataToSave = { ...formData };
    delete dataToSave.id;

    onSave(dataToSave);
  };

  return (
    <div className="form-modal-overlay">
      <div className="form-modal">
        <div className="form-header">
          <h3 className="cs_primary_color">{portfolio ? 'Edit Portfolio Entry' : 'Create New Portfolio Entry'}</h3>
          <button className="close-btn" onClick={onCancel}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="portfolio-form">
          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter case study title"
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
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Hospital/Client Name *</label>
              <input
                type="text"
                name="hospital_name"
                value={formData.hospital_name}
                onChange={handleChange}
                placeholder="Enter hospital or client name"
                required
              />
            </div>

            <div className="form-group">
              <label className="cs_primary_color">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Chicago, IL"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option>Hospitals</option>
                <option>Long-term Care</option>
                <option>Emergency Response</option>
                <option>Specialty Care</option>
              </select>
            </div>

            <div className="form-group">
              <label className="cs_primary_color">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 18 months"
              />
            </div>

            <div className="form-group">
              <label className="cs_primary_color">Staff Placed</label>
              <input
                type="text"
                name="staff_placed"
                value={formData.staff_placed}
                onChange={handleChange}
                placeholder="e.g., 45 placed"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter case study description"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Key Results</label>
            <div className="key-results-input">
              <input
                type="text"
                value={keyResultInput}
                onChange={(e) => setKeyResultInput(e.target.value)}
                placeholder="Enter a key result and click Add"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyResult())}
              />
              <button type="button" onClick={addKeyResult} className="cs_btn cs_style_1">
                Add
              </button>
            </div>
            <div className="key-results-list">
              {formData.key_results.map((result, index) => (
                <div key={index} className="key-result-item">
                  <span>{result}</span>
                  <button
                    type="button"
                    onClick={() => removeKeyResult(index)}
                    className="remove-btn"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Testimonial</label>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                placeholder="Enter client testimonial"
                rows="3"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Testimonial Author</label>
              <input
                type="text"
                name="testimonial_author"
                value={formData.testimonial_author}
                onChange={handleChange}
                placeholder="e.g., Dr. Sarah Johnson"
              />
            </div>

            <div className="form-group">
              <label className="cs_primary_color">Author Title</label>
              <input
                type="text"
                name="testimonial_author_title"
                value={formData.testimonial_author_title}
                onChange={handleChange}
                placeholder="e.g., Chief Nursing Officer"
              />
            </div>

            <div className="form-group">
              <label className="cs_primary_color">Rating</label>
              <select name="rating" value={formData.rating} onChange={handleChange}>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Featured Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="cs_form_field"
            />
            {uploading && <p className="cs_secondary_color">Uploading image...</p>}
            {imagePreview && (
              <div className="image-preview" style={{ marginTop: '10px' }}>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '8px' }}
                />
              </div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Display Order</label>
              <input
                type="number"
                name="display_order"
                value={formData.display_order}
                onChange={handleChange}
                min="0"
              />
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
                Active
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="cs_btn cs_style_1">
              {portfolio ? 'Update Entry' : 'Create Entry'}
            </button>
            <button type="button" onClick={onCancel} className="cs_btn cs_style_2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

