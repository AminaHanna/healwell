'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

export default function ServiceForm({ service, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    short_description: '',
    icon: '',
    featured_image: '',
    price: '',
    active: true,
    display_order: 0,
  });

  useEffect(() => {
    if (service) {
      setFormData(service);
    }
  }, [service]);

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
      ...(name === 'title' && { slug: generateSlug(value) })
    }));
  };

  const handleDescriptionChange = (description) => {
    setFormData(prev => ({
      ...prev,
      description
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="form-modal-overlay">
      <div className="form-modal">
        <div className="form-header">
          <h3 className="cs_primary_color">
            {service ? 'Edit Service' : 'Create New Service'}
          </h3>
          <button className="close-btn" onClick={onCancel}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="service-form">
          <div className="form-group">
            <label className="cs_primary_color">Service Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter service title"
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
            <label className="cs_primary_color">Short Description</label>
            <textarea
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              placeholder="Brief description"
              rows="2"
            />
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Full Description *</label>
            <div className="quill-editor-wrapper">
              <ReactQuill
                value={formData.description}
                onChange={handleDescriptionChange}
                theme="snow"
                placeholder="Enter full service description"
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

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Icon (Emoji or URL)</label>
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="🏥 or icon URL"
              />
            </div>

            <div className="form-group">
              <label className="cs_primary_color">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., $99 or Free"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="cs_primary_color">Featured Image URL</label>
            <input
              type="url"
              name="featured_image"
              value={formData.featured_image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="cs_primary_color">Display Order</label>
              <input
                type="number"
                name="display_order"
                value={formData.display_order}
                onChange={handleChange}
                placeholder="0"
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
            <button type="button" className="cs_btn cs_style_2" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="cs_btn cs_style_1">
              {service ? 'Update Service' : 'Create Service'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

